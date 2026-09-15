import _ from "lodash";

/**
 * 对比新旧对象数组差异并生成更新后的最新数据
 *
 * @param {Object} options
 * @param {Array<Object>} options.oldList - 旧数据数组
 * @param {Array<Object>} options.newList - 新数据数组
 * @param {string} options.idKey - 唯一标识字段名称（如 'id'、'code'）
 * @param {Array<string>} [options.compareFields] - 参与差异比对的字段；为空则默认比对除 idKey 外的所有字段
 * @param {Array<string>} [options.overwriteFields] - 指定新对象中哪些字段覆盖到旧对象上；若为空，默认用整个新对象覆盖
 * @param {Array<string>} [options.preserveFields] - [新增] 旧对象中保护不被覆盖的字段列表（具有最高优先级）
 *
 * @returns {Object} { diff, resultList }
 */
function diffAndMergeLists({
  oldList = [],
  newList = [],
  idKey = "id",
  compareFields = [],
  overwriteFields = [],
  preserveFields = [],
}) {
  const oldMap = _.keyBy(oldList, idKey);
  const newMap = _.keyBy(newList, idKey);

  const oldIds = Object.keys(oldMap);
  const newIds = Object.keys(newMap);

  const addedIds = _.difference(newIds, oldIds);
  const removedIds = _.difference(oldIds, newIds);
  const commonIds = _.intersection(oldIds, newIds);

  const added = addedIds.map((id) => _.cloneDeep(newMap[id]));
  const removed = removedIds.map((id) => _.cloneDeep(oldMap[id]));
  const updated = [];

  const resultList = [];

  commonIds.forEach((id) => {
    const oldItem = oldMap[id];
    const newItem = newMap[id];

    // 确定参与差异比对的字段范围
    const fieldsToCompare =
      compareFields.length > 0
        ? compareFields
        : _.without(_.union(Object.keys(oldItem), Object.keys(newItem)), idKey);

    const changes = {};
    const changedFields = [];

    fieldsToCompare.forEach((field) => {
      const oldVal = _.get(oldItem, field);
      const newVal = _.get(newItem, field);

      if (!_.isEqual(oldVal, newVal)) {
        changedFields.push(field);
        changes[field] = {
          oldValue: oldVal,
          newValue: newVal,
        };
      }
    });

    const isDifferent = changedFields.length > 0;

    if (isDifferent) {
      updated.push({
        [idKey]: id,
        changes,
        oldItem: _.cloneDeep(oldItem),
        newItem: _.cloneDeep(newItem),
      });
    }

    // 核心覆盖逻辑：以旧对象为基准进行字段覆写
    let mergedItem = _.cloneDeep(oldItem);

    // 1. 收集所有需要被新值覆盖的候选字段：
    //    - 比对出有变化的字段 (changedFields)
    //    - 显式要求覆盖的字段 (overwriteFields)
    //    - 若两者皆未指定，则默认整条 newItem 的所有键
    let candidateKeysToOverwrite = [];

    if (overwriteFields.length === 0 && compareFields.length === 0) {
      // 既没指定比对字段也没指定覆盖字段，默认全量覆盖
      candidateKeysToOverwrite = Object.keys(newItem);
    } else {
      // 比对发生变化的字段 + 显式指定的覆盖字段
      candidateKeysToOverwrite = _.union(changedFields, overwriteFields);
    }

    // 2. 剔除 preserveFields（严格保护不被覆盖的字段）
    const finalFieldsToOverwrite = _.difference(
      candidateKeysToOverwrite,
      preserveFields,
    );

    // 3. 执行覆盖赋值
    finalFieldsToOverwrite.forEach((field) => {
      if (_.has(newItem, field)) {
        _.set(mergedItem, field, _.cloneDeep(_.get(newItem, field)));
      }
    });

    resultList.push(mergedItem);
  });

  // 新增条目直接纳入结果集
  added.forEach((item) => {
    resultList.push(_.cloneDeep(item));
  });

  return {
    diff: {
      added,
      removed,
      updated,
    },
    resultList,
  };
}

export { diffAndMergeLists };
