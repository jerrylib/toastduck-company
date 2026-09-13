const list = [
  {
    orderId: "M3E250M2503340AZ25",
    model: "CDM3E-250M 3340 250A 分励AC230V 圆形手操250MM",
    price: "2248",
    showPrice: "2248",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：手操操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E125M1253360P7R",
    model: "CDM3E-125M 3360 125A 电操AC230V 插入板后",
    price: "4420",
    showPrice: "4420",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：电动操作 | 接线方式：板后接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E630M630C328R",
    model: "CDM3E-630M 4328C 630A 插入板后",
    price: "7114.01",
    showPrice: "7114.01",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E125M0323320",
    model: "CDM3E-125M 3320 32A",
    price: "1771",
    showPrice: "1771",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 32A",
  },
  {
    orderId: "M3E125M0633328",
    model: "CDM3E-125M 3328 63A",
    price: "1812",
    showPrice: "1812",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 63A",
  },
  {
    orderId: "M3E630M6303360R",
    model: "CDM3E-630M 3360 630A 插入板后",
    price: "5529",
    showPrice: "5529",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E125M063C300R",
    model: "CDM3E-125M 4300C 63A 插入板后",
    price: "3745",
    showPrice: "3745",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 125A | Rated current: 63A",
  },
  {
    orderId: "M3E250M1603328",
    model: "CDM3E-250M 3328 160A",
    price: "1995",
    showPrice: "1995",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 160A",
  },
  {
    orderId: "M3E250M2503300",
    model: "CDM3E-250M 3300 250A",
    price: "1913",
    showPrice: "1913",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E125M1253320R",
    model: "CDM3E-125M 3320 125A 插入板后",
    price: "2785",
    showPrice: "2785",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E400M400D340A",
    model: "CDM3E-400M 4340D 400A 分励AC230V",
    price: "3931",
    showPrice: "3931",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E125M1253340A",
    model: "CDM3E-125M 3340 125A 分励AC230V",
    price: "1866",
    showPrice: "1866",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E800M8003340AP7",
    model: "CDM3E-800M 3340 800A 分励/电操AC230V",
    price: "8721",
    showPrice: "8721",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 800A | Rated current: 800A",
  },
  {
    orderId: "M3E250M1603340A",
    model: "CDM3E-250M 3340 160A 分励AC230V",
    price: "2049",
    showPrice: "2049",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 160A",
  },
  {
    orderId: "M3E400M4003328P7I",
    model: "CDM3E-400M 3328 400A 电操AC230V 过报AC",
    price: "6489",
    showPrice: "6489",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E800M800C300R",
    model: "CDM3E-800M 4300C 800A 插入板后",
    price: "10702",
    showPrice: "10702",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 800A | Rated current: 800A",
  },
  {
    orderId: "M3E400M4003370AP7R",
    model: "CDM3E-400M 3370 400A 欠压/电操AC230V 插入板后",
    price: "7935",
    showPrice: "7935",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：电动操作 | 接线方式：板后接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E250M2503348AY1",
    model: "CDM3E-250M 3348 250A 分励AC230V 引线1M",
    price: "2090",
    showPrice: "2090",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E250M250D368",
    model: "CDM3E-250M 4368D 250A",
    price: "2524",
    showPrice: "2524",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E250M1603320",
    model: "CDM3E-250M 3320 160A",
    price: "1954",
    showPrice: "1954",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 160A",
  },
  {
    orderId: "M3E250M2503360P7R",
    model: "CDM3E-250M 3360 250A 电操AC230V 插入板后",
    price: "4603",
    showPrice: "4603",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：电动操作 | 接线方式：板后接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E800M800C300",
    model: "CDM3E-800M 4300C 800A",
    price: "6152",
    showPrice: "6152",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 800A | Rated current: 800A",
  },
  {
    orderId: "M3E125M125C300S2",
    model: "CDM3E-125M 4300C 125A 3遥AC230V",
    price: "3498.01",
    showPrice: "3498.01",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E250M2503320S2",
    model: "CDM3E-250M 3320 250A 3遥AC230V",
    price: "3227",
    showPrice: "3227",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E125M1253300Z25",
    model: "CDM3E-125M 3300 125A 圆形手操250MM",
    price: "1929",
    showPrice: "1929",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：手操操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E125M0323340A",
    model: "CDM3E-125M 3340 32A 分励AC230V",
    price: "1866",
    showPrice: "1866",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 32A",
  },
  {
    orderId: "M3E400M4003380AP7",
    model: "CDM3E-400M 3340 400A 分励/电操AC230V 双辅",
    price: "6199",
    showPrice: "6199",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E250M1603300",
    model: "CDM3E-250M 3300 160A",
    price: "1913",
    showPrice: "1913",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 160A",
  },
  {
    orderId: "M3E125M125C370A",
    model: "CDM3E-125M 4370C 125A AC230V",
    price: "2542",
    showPrice: "2542",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E400M400C318AN",
    model: "CDM3E-400M 4318C 400A 分励AC230V 过报DC24V",
    price: "4110",
    showPrice: "4110",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E630M6303328P7I",
    model: "CDM3E-630M 3328 630A 电操AC230V 过报AC",
    price: "7075",
    showPrice: "7075",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E125M0633300R",
    model: "CDM3E-125M 3300 63A 插入板后",
    price: "2744",
    showPrice: "2744",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 125A | Rated current: 63A",
  },
  {
    orderId: "M3E250M250C300",
    model: "CDM3E-250M 4300C 250A",
    price: "2401",
    showPrice: "2401",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E125M1253350A",
    model: "CDM3E-125M 3350 125A 分励/欠压AC230V",
    price: "2101",
    showPrice: "2101",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E630M6303340AZ25",
    model: "CDM3E-630M 3340 630A 分励AC230V 圆形手操250MM",
    price: "4089",
    showPrice: "4089",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：手操操作 | 接线方式：板前接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E125M0633300",
    model: "CDM3E-125M 3300 63A",
    price: "1730",
    showPrice: "1730",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 63A",
  },
  {
    orderId: "M3E250M1603300R",
    model: "CDM3E-250M 3300 160A 插入板后",
    price: "2927.01",
    showPrice: "2927.01",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 250A | Rated current: 160A",
  },
  {
    orderId: "M3E630M6303360P7R",
    model: "CDM3E-630M 3360 630A 电操AC230V 插入板后",
    price: "8425",
    showPrice: "8425",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：电动操作 | 接线方式：板后接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E800M8003300",
    model: "CDM3E-800M 3300 800A",
    price: "4690",
    showPrice: "4690",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 800A | Rated current: 800A",
  },
  {
    orderId: "M3E400M400C300",
    model: "CDM3E-400M 4300C 400A",
    price: "3647",
    showPrice: "3647",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E250M2503300Z25",
    model: "CDM3E-250M 3300 250A 圆形手操250MM",
    price: "2112",
    showPrice: "2112",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：手操操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E125M0633320",
    model: "CDM3E-125M 3320 63A",
    price: "1771",
    showPrice: "1771",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 63A",
  },
  {
    orderId: "M3E125M0323328",
    model: "CDM3E-125M 3328 32A",
    price: "1812",
    showPrice: "1812",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 32A",
  },
  {
    orderId: "M3E630M630C300",
    model: "CDM3E-630M 4300C 630A",
    price: "4457",
    showPrice: "4457",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E125M1253320S2",
    model: "CDM3E-125M 3320 125A 3遥AC230V",
    price: "3044.01",
    showPrice: "3044.01",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E125M1253340AY1",
    model: "CDM3E-125M 3340 125A 分励AC230V 引线1M",
    price: "1866",
    showPrice: "1866",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E250M2503340AP7F",
    model: "CDM3E-250M 3340 250A 分励/电操AC230V 插入板前",
    price: "4657",
    showPrice: "4657",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E250M2503378A",
    model: "CDM3E-250M 3378 250A 欠压AC230V",
    price: "2270.99",
    showPrice: "2270.99",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E125M1253378A",
    model: "CDM3E-125M 3378 125A 欠压AC230V",
    price: "2088",
    showPrice: "2088",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E125M0633320S2",
    model: "CDM3E-125M 3320 63A 3遥AC230V",
    price: "3044.01",
    showPrice: "3044.01",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 63A",
  },
  {
    orderId: "M3E250M2503380AP7",
    model: "CDM3E-250M 3340 250A 分励/电操AC230V 双辅",
    price: "3684",
    showPrice: "3684",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E125M125C340A",
    model: "CDM3E-125M 4340C 125A 分励AC230V",
    price: "2361",
    showPrice: "2361",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E400M400C360P7",
    model: "CDM3E-400M 4360C 400A 电操AC230V",
    price: "6707",
    showPrice: "6707",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E125M0323300R",
    model: "CDM3E-125M 3300 32A 插入板后",
    price: "2744",
    showPrice: "2744",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 125A | Rated current: 32A",
  },
  {
    orderId: "M3E125M0323300",
    model: "CDM3E-125M 3300 32A",
    price: "1730",
    showPrice: "1730",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 32A",
  },
  {
    orderId: "M3E250M250C360P7",
    model: "CDM3E-250M 4360C 250A 电操AC230V",
    price: "4076.99",
    showPrice: "4076.99",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E630M630C300I",
    model: "CDM3E-630M 4300C 630A 过报AC",
    price: "4949",
    showPrice: "4949",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E800M8003360R",
    model: "CDM3E-800M 3360 800A 插入式板后",
    price: "8331",
    showPrice: "8331",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 800A | Rated current: 800A",
  },
  {
    orderId: "M3E125M0633340A",
    model: "CDM3E-125M 3340 63A 分励AC230V",
    price: "1866",
    showPrice: "1866",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 63A",
  },
  {
    orderId: "M3E125M125C320P7",
    model: "CDM3E-125M 4320C 125A 电操AC230V",
    price: "3860",
    showPrice: "3860",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E800M800C320",
    model: "CDM3E-800M 4320C 800A",
    price: "6426",
    showPrice: "6426",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 800A | Rated current: 800A",
  },
  {
    orderId: "M3E400M4003340AZ25",
    model: "CDM3E-400M 3340 400A 分励AC230V 圆形手操250MM",
    price: "3503",
    showPrice: "3503",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：手操操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E400M4003300",
    model: "CDM3E-400M 3300 400A",
    price: "2937.01",
    showPrice: "2937.01",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E400M4003380AD",
    model: "CDM3E-400M 3340 400A 分励AC230V 双辅 抽出式",
    price: "8517",
    showPrice: "8517",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E250M250C350AP7",
    model: "CDM3E-250M 4350C 250A 分励/欠压/电操AC230V",
    price: "4366",
    showPrice: "4366",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E400M4003300D",
    model: "CDM3E-400M 3300 400A 抽出式",
    price: "8151",
    showPrice: "8151",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E630M6303348AY1",
    model: "CDM3E-630M 3348 630A 分励AC230V 引线1M",
    price: "3889",
    showPrice: "3889",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E630M6303320S2",
    model: "CDM3E-630M 3320 630A 3遥AC230V",
    price: "4960",
    showPrice: "4960",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E125M125C300",
    model: "CDM3E-125M 4300C 125A",
    price: "2225",
    showPrice: "2225",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E400M4003368I",
    model: "CDM3E-400M 3368 400A 过报AC",
    price: "3675",
    showPrice: "3675",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E125M125C350AP7",
    model: "CDM3E-125M 4350C 125A 分励/欠压/电操AC230V",
    price: "4189.99",
    showPrice: "4189.99",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E630M6303380B",
    model: "CDM3E-630M 3340 630A 分励DC24V 双辅",
    price: "3889",
    showPrice: "3889",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E125M032C300R",
    model: "CDM3E-125M 4300C 32A 插入板后",
    price: "3745",
    showPrice: "3745",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 125A | Rated current: 32A",
  },
  {
    orderId: "M3E400M4003300Z250",
    model: "CDM3E-400M 3300 400A 圆形手操250MM",
    price: "3219",
    showPrice: "3219",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：手操操作 | 接线方式：板前接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E250M2503310AS2",
    model: "CDM3E-250M 3310 250A 分励/3遥AC230V",
    price: "3281",
    showPrice: "3281",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E250M250C378A",
    model: "CDM3E-250M 4378C 250A 欠压AC230V",
    price: "2759",
    showPrice: "2759",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E125M1253348AY1",
    model: "CDM3E-125M 3348 125A 分励AC230V 引线1M",
    price: "1907",
    showPrice: "1907",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E250M2503340AY1",
    model: "CDM3E-250M 3340 250A 分励AC230V 引线1M",
    price: "2049",
    showPrice: "2049",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E125M1253300",
    model: "CDM3E-125M 3300 125A",
    price: "1730",
    showPrice: "1730",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 125A | Rated current: 125A",
  },
  {
    orderId: "M3E800M800C320P7",
    model: "CDM3E-800M 4320C 800A 电操AC230V",
    price: "9901",
    showPrice: "9901",
    remark:
      "Series: CDM3E | Number of poles: 4P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：电动操作 | 接线方式：板前接线 | Frame current: 800A | Rated current: 800A",
  },
  {
    orderId: "M3E400M4003340AR",
    model: "CDM3E-400M 3340 400A 分励AC230V 插入板后",
    price: "4713",
    showPrice: "4713",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 400A | Rated current: 400A",
  },
  {
    orderId: "M3E630M6303360",
    model: "CDM3E-630M 3360 630A",
    price: "3687",
    showPrice: "3687",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E630M6303340AR",
    model: "CDM3E-630M 3340 630A 分励AC230V 插入板后",
    price: "5649.01",
    showPrice: "5649.01",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 630A | Rated current: 630A",
  },
  {
    orderId: "M3E250M2503340AR",
    model: "CDM3E-250M 3340 250A 分励AC230V 插入板后",
    price: "3063",
    showPrice: "3063",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: 电子式 | 安装方式：插入式 | 操作方式：本体操作 | 接线方式：板后接线 | Frame current: 250A | Rated current: 250A",
  },
  {
    orderId: "M3E250M2503328",
    model: "CDM3E-250M 3328 250A",
    price: "1995",
    showPrice: "1995",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: - | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Rated current: 250A",
  },
  {
    orderId: "M3E125M1253328",
    model: "CDM3E-125M 3328 125A",
    price: "1812",
    showPrice: "1812",
    remark:
      "Series: CDM3E | Number of poles: 3P | Rated ultimate breaking capacity: 50kA | Trip unit type: - | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Rated current: 125A",
  },
];
export default list;
