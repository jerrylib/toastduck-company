const list = [
  {
    orderId: "710021510423040",
    model: "DZ15-40/3902 40A",
    price: "185",
    showPrice: "58.22",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/222708/9/41407/13958/6645804fFa0416a12/c87317f4dfc2d8d9.jpg.avif",
  },
  {
    orderId: "710021511003080",
    model: "DZ15-100/3902 100A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/131437/14/45349/17480/66458051Fe71da6f2/b15aade0a729e724.jpg.avif",
  },
  {
    orderId: "DZ151001003",
    model: "DZ15-100/3901 100A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/464843/6/1892/25649/6a3a6e3aFf7bf6aef/0711320320378b2e.jpg.avif",
  },
  {
    orderId: "DZ1540403",
    model: "DZ15-40/3901 40A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/454379/1/18878/22006/6a3a6e3eF5d5ead11/0711320320ae2fc4.jpg.avif",
  },
  {
    orderId: "710021510413040",
    model: "DZ15-40/3901 40A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/210019/27/17109/25942/62063c66E7647ffca/50970f77d062aaae.jpg.avif",
  },
  {
    orderId: "DZ15100633",
    model: "DZ15-100/3901 63A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/464843/6/1892/25649/6a3a6e3aFf7bf6aef/0711320320378b2e.jpg.avif",
  },
  {
    orderId: "710021511023063",
    model: "DZ15-100/3902 63A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/167250/10/26389/32198/62063c38Ec436ec81/099d68b61a10c225.jpg.avif",
  },
  {
    orderId: "710021510423032",
    model: "DZ15-40/3902 32A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 32A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/167250/10/26389/32198/62063c38Ec436ec81/099d68b61a10c225.jpg.avif",
  },
  {
    orderId: "710021511003100",
    model: "DZ15-100/3901 100A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/148973/40/23825/24411/62063c5bE2ac039dc/737c714fd104b2cb.jpg.avif",
  },
  {
    orderId: "710021500000134",
    model: "DZ15-100/2901 100A",
    price: "205",
    showPrice: "205",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/167250/10/26389/32198/62063c38Ec436ec81/099d68b61a10c225.jpg.avif",
  },
  {
    orderId: "DZ1540402",
    model: "DZ15-40/2901 40A",
    price: "135",
    showPrice: "135",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "710021510412040",
    model: "DZ15-40/2901 40A",
    price: "135",
    showPrice: "135",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/167250/10/26389/32198/62063c38Ec436ec81/099d68b61a10c225.jpg.avif",
  },
  {
    orderId: "710021500000138",
    model: "DZ15-100/2901 100A透明",
    price: "181",
    showPrice: "181",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/394738/22/20650/14392/69a6b126Fd34935af/07113203206c8c56.jpg.avif",
  },
  {
    orderId: "710021500000136",
    model: "DZ15-100/2901 63A透明",
    price: "181",
    showPrice: "181",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/222483/6/14340/50194/628cfa22Eb2802367/293bb9bf80366307.jpg.avif",
  },
  {
    orderId: "710021511023050",
    model: "DZ15-100/3902 50A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 50A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/167250/10/26389/32198/62063c38Ec436ec81/099d68b61a10c225.jpg.avif",
  },
  {
    orderId: "710021511033063",
    model: "DZ15-100/3902 80A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 80A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/167250/10/26389/32198/62063c38Ec436ec81/099d68b61a10c225.jpg.avif",
  },
  {
    orderId: "710021510412032",
    model: "DZ15-40/2901 32A",
    price: "135",
    showPrice: "135",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 32A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/219441/13/19387/17948/628cfa23E516f57c2/fcead1964606d99a.jpg.avif",
  },
  {
    orderId: "710021500000034",
    model: "DZ15-100/3902 63A透明",
    price: "221",
    showPrice: "221",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/208722/13/17095/39938/62063c1cE4a967dc3/b6b2abf4eebedb29.jpg.avif",
  },
  {
    orderId: "710021500000132",
    model: "DZ15-100/2901 63A",
    price: "205",
    showPrice: "205",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/167250/10/26389/32198/62063c38Ec436ec81/099d68b61a10c225.jpg.avif",
  },
  {
    orderId: "710021500000028",
    model: "DZ15-100/3902 100A透明",
    price: "221",
    showPrice: "221",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/208722/13/17095/39938/62063c1cE4a967dc3/b6b2abf4eebedb29.jpg.avif",
  },
  {
    orderId: "710021500000026",
    model: "DZ15-40/3902 40A透明",
    price: "165",
    showPrice: "165",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/208722/13/17095/39938/62063c1cE4a967dc3/b6b2abf4eebedb29.jpg.avif",
  },
  {
    orderId: "710021500000012",
    model: "DZ15-40/2901 40A透明",
    price: "123",
    showPrice: "123",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/208722/13/17095/39938/62063c1cE4a967dc3/b6b2abf4eebedb29.jpg.avif",
  },
  {
    orderId: "01040030042",
    model: "DZ15-40/3901 40A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/298250/38/15418/31155/684ffba5F6b1392ad/0cc6512fffd50e4e.jpg.avif",
  },
  {
    orderId: "01040030007",
    model: "DZ15-100/3901 100A",
    price: "242.5",
    showPrice: "242.5",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/303676/33/11674/21948/6852907bF37b26316/01f7cd25e72463da.jpg.avif",
  },
  {
    orderId: "01040030072",
    model: "DZ15-40/2901T 40A",
    price: "122.5",
    showPrice: "122.5",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/303061/39/16091/43219/6852907eF4c8b6bd2/4cefae1a8771db18.jpg.avif",
  },
  {
    orderId: "01040030077",
    model: "DZ15-100/2901T 100A",
    price: "205",
    showPrice: "205",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/317437/18/9831/37786/68529097F03766201/9d116f4fe5022807.jpg.avif",
  },
  {
    orderId: "01040030058",
    model: "DZ15-40/3901T 40A",
    price: "165",
    showPrice: "165",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/292493/18/15477/59895/6852907fF0f2a02ba/7b226c0305cbb622.jpg.avif",
  },
  {
    orderId: "01040030049",
    model: "DZ15-40/3902 40A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/312364/38/10050/22116/684ffba6F9863e1d3/cefb54acb20d7d7f.jpg.avif",
  },
  {
    orderId: "01040030041",
    model: "DZ15-40/3901 32A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 32A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/298250/38/15418/31155/684ffba5F6b1392ad/0cc6512fffd50e4e.jpg.avif",
  },
  {
    orderId: "01040030065",
    model: "DZ15-100/3901T 100A",
    price: "242.5",
    showPrice: "242.5",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/288681/39/15003/75647/68529099F2ed35ee0/23b59d91fbcea25a.jpg.avif",
  },
  {
    orderId: "01040030046",
    model: "DZ15-40/3902 20A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 20A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/312364/38/10050/22116/684ffba6F9863e1d3/cefb54acb20d7d7f.jpg.avif",
  },
  {
    orderId: "01040030028",
    model: "DZ15-40/2901 40A",
    price: "135.1",
    showPrice: "135.1",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/310594/9/10355/14433/68529082Fab2476a6/43004a652ec72d7c.jpg.avif",
  },
  {
    orderId: "01040030001",
    model: "DZ15-100/2901 100A",
    price: "205",
    showPrice: "205",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/307097/36/10588/20242/6852907aF5f610d87/79da5015feaee418.jpg.avif",
  },
  {
    orderId: "01040030075",
    model: "DZ15-40/2901T 32A",
    price: "122.5",
    showPrice: "122.5",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 32A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/303061/39/16091/43219/6852907eF4c8b6bd2/4cefae1a8771db18.jpg.avif",
  },
  {
    orderId: "01040030012",
    model: "DZ15-100/3902 100A",
    price: "242.5",
    showPrice: "242.5",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/301090/30/6868/43771/6852907cF5effacdf/28374457dc08a5ba.jpg.avif",
  },
  {
    orderId: "DZ1540322",
    model: "DZ15-40/2901 32A",
    price: "135",
    showPrice: "135",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 32A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ1540323",
    model: "DZ15-40/3901 32A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 32A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/100978/17/27634/33753/625ef586E4f293f1d/55f01c0ce243bb68.jpg.avif",
  },
  {
    orderId: "710021500000011",
    model: "DZ15-40/2901 32A透明",
    price: "123",
    showPrice: "123",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 32A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/223239/7/20835/37390/63476827E619005fa/c7a71a681f709797.jpg.avif",
  },
  {
    orderId: "710021500000031",
    model: "DZ15-100/3901 63A透明",
    price: "221",
    showPrice: "221",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/231855/38/7759/37390/6578642eFb9223638/02d5d29fbeccf1cd.jpg.avif",
  },
  {
    orderId: "710021500000029",
    model: "DZ15-100/3901 100A透明",
    price: "221",
    showPrice: "221",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/231855/38/7759/37390/6578642eFb9223638/02d5d29fbeccf1cd.jpg.avif",
  },
  {
    orderId: "01040030014",
    model: "DZ15-100/3902 63A",
    price: "242.5",
    showPrice: "242.5",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/301090/30/6868/43771/6852907cF5effacdf/28374457dc08a5ba.jpg.avif",
  },
  {
    orderId: "01040030003",
    model: "DZ15-100/2901 63A",
    price: "205",
    showPrice: "205",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/307097/36/10588/20242/6852907aF5f610d87/79da5015feaee418.jpg.avif",
  },
  {
    orderId: "01040030080",
    model: "DZ15-100/2901T 63A",
    price: "205",
    showPrice: "205",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/317437/18/9831/37786/68529097F03766201/9d116f4fe5022807.jpg.avif",
  },
  {
    orderId: "DZ1540323M",
    model: "DZ15-40/3902 32A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 32A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/100978/17/27634/33753/625ef586E4f293f1d/55f01c0ce243bb68.jpg.avif",
  },
  {
    orderId: "DZ1540162",
    model: "DZ15-40/2901 16A",
    price: "135",
    showPrice: "135",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 16A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/98027/28/29114/27593/625ef584Ea19398d8/b283aec8151f2646.jpg.avif",
  },
  {
    orderId: "DZ15100503",
    model: "DZ15-100/3901 50A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 50A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/85445/39/27729/37147/625ef584Edb96c20b/6723f3143f4d8e56.jpg.avif",
  },
  {
    orderId: "DZ154063",
    model: "DZ15-40/3901 6A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 6A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/454379/1/18878/22006/6a3a6e3eF5d5ead11/0711320320ae2fc4.jpg.avif",
  },
  {
    orderId: "DZ154061",
    model: "DZ15-40/1901 6A",
    price: "78",
    showPrice: "78",
    remark:
      "Series: DZ15 | Number of poles: 1P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 6A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ1540163M",
    model: "DZ15-40/3902 16A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 16A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/454379/1/18878/22006/6a3a6e3eF5d5ead11/0711320320ae2fc4.jpg.avif",
  },
  {
    orderId: "DZ15100803M",
    model: "DZ15-100/3902 80A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 80A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/85445/39/27729/37147/625ef584Edb96c20b/6723f3143f4d8e56.jpg.avif",
  },
  {
    orderId: "DZ15100503M",
    model: "DZ15-100/3902 50A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 50A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/464843/6/1892/25649/6a3a6e3aFf7bf6aef/0711320320378b2e.jpg.avif",
  },
  {
    orderId: "DZ1540161",
    model: "DZ15-40/1901 16A",
    price: "78",
    showPrice: "78",
    remark:
      "Series: DZ15 | Number of poles: 1P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 16A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ1540201",
    model: "DZ15-40/1901 20A",
    price: "78",
    showPrice: "78",
    remark:
      "Series: DZ15 | Number of poles: 1P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 20A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ1540253M",
    model: "DZ15-40/3902 25A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 25A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/454379/1/18878/22006/6a3a6e3eF5d5ead11/0711320320ae2fc4.jpg.avif",
  },
  {
    orderId: "DZ1540103",
    model: "DZ15-40/3901 10A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 10A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/100978/17/27634/33753/625ef586E4f293f1d/55f01c0ce243bb68.jpg.avif",
  },
  {
    orderId: "DZ1540252",
    model: "DZ15-40/2901 25A",
    price: "135",
    showPrice: "135",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 25A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ1540102",
    model: "DZ15-40/2901 10A",
    price: "135",
    showPrice: "135",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 10A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ1540251",
    model: "DZ15-40/1901 25A",
    price: "78",
    showPrice: "78",
    remark:
      "Series: DZ15 | Number of poles: 1P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 25A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ1540103M",
    model: "DZ15-40/3902 10A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 10A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/454379/1/18878/22006/6a3a6e3eF5d5ead11/0711320320ae2fc4.jpg.avif",
  },
  {
    orderId: "DZ1540401",
    model: "DZ15-40/1901 40A",
    price: "78",
    showPrice: "78",
    remark:
      "Series: DZ15 | Number of poles: 1P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ1540253",
    model: "DZ15-40/3901 25A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 25A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/100978/17/27634/33753/625ef586E4f293f1d/55f01c0ce243bb68.jpg.avif",
  },
  {
    orderId: "DZ1540203",
    model: "DZ15-40/3901 20A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 20A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/100978/17/27634/33753/625ef586E4f293f1d/55f01c0ce243bb68.jpg.avif",
  },
  {
    orderId: "DZ1540202",
    model: "DZ15-40/2901 20A",
    price: "135",
    showPrice: "135",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 20A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/98027/28/29114/27593/625ef584Ea19398d8/b283aec8151f2646.jpg.avif",
  },
  {
    orderId: "DZ1540163",
    model: "DZ15-40/3901 16A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 16A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/100978/17/27634/33753/625ef586E4f293f1d/55f01c0ce243bb68.jpg.avif",
  },
  {
    orderId: "DZ1540403M",
    model: "DZ15-40/3902 40A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 40A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/100978/17/27634/33753/625ef586E4f293f1d/55f01c0ce243bb68.jpg.avif",
  },
  {
    orderId: "DZ1540203M",
    model: "DZ15-40/3902 20A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 20A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/100978/17/27634/33753/625ef586E4f293f1d/55f01c0ce243bb68.jpg.avif",
  },
  {
    orderId: "DZ15100803",
    model: "DZ15-100/3901 80A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 80A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/85445/39/27729/37147/625ef584Edb96c20b/6723f3143f4d8e56.jpg.avif",
  },
  {
    orderId: "DZ15100633M",
    model: "DZ15-100/3902 63A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/85445/39/27729/37147/625ef584Edb96c20b/6723f3143f4d8e56.jpg.avif",
  },
  {
    orderId: "DZ151001003M",
    model: "DZ15-100/3902 100A",
    price: "243",
    showPrice: "243",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/85445/39/27729/37147/625ef584Edb96c20b/6723f3143f4d8e56.jpg.avif",
  },
  {
    orderId: "DZ151001002",
    model: "DZ15-100/2901 100A",
    price: "205",
    showPrice: "205",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: - | 安装方式：固定式 | 操作方式：手动操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ15100T1002",
    model: "DZ15-100T/2901 100A 透明",
    price: "181",
    showPrice: "181",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: - | 安装方式：固定式 | 操作方式：手动操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 100A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/467900/12/5993/29229/6a420c38F3d48cf8b/07113203203c3897.jpg.avif",
  },
  {
    orderId: "DZ15100T802",
    model: "DZ15-100T/2901 80A 透明",
    price: "181",
    showPrice: "181",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: - | 安装方式：固定式 | 操作方式：手动操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 80A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/467900/12/5993/29229/6a420c38F3d48cf8b/07113203203c3897.jpg.avif",
  },
  {
    orderId: "DZ15100T502",
    model: "DZ15-100T/2901 50A 透明",
    price: "181",
    showPrice: "181",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: - | 安装方式：固定式 | 操作方式：手动操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 50A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/467900/12/5993/29229/6a420c38F3d48cf8b/07113203203c3897.jpg.avif",
  },
  {
    orderId: "DZ15100632",
    model: "DZ15-100/2901 63A",
    price: "205",
    showPrice: "205",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: - | 安装方式：固定式 | 操作方式：手动操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ15100T632",
    model: "DZ15-100T/2901 63A 透明",
    price: "181",
    showPrice: "181",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: - | 安装方式：固定式 | 操作方式：手动操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/467900/12/5993/29229/6a420c38F3d48cf8b/07113203203c3897.jpg.avif",
  },
  {
    orderId: "DZ15100802",
    model: "DZ15-100/2901 80A",
    price: "205",
    showPrice: "205",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: - | 安装方式：固定式 | 操作方式：手动操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 80A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "DZ15100502",
    model: "DZ15-100/2901 50A",
    price: "205",
    showPrice: "205",
    remark:
      "Series: DZ15 | Number of poles: 2P | Rated ultimate breaking capacity: 5kA | Trip unit type: - | 安装方式：固定式 | 操作方式：手动操作 | 接线方式：板前接线 | Frame current: 100A | Rated current: 50A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/457969/11/12429/15940/6a3a6e3cFbc33bb25/0711320320244aa1.jpg.avif",
  },
  {
    orderId: "710021500000019",
    model: "DZ15-40/3901 40A透明",
    price: "165",
    showPrice: "165",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: - | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Rated current: 40A",
    url: "https://image3.vipmro.net/goodsImg/906616/50111013/10002wang/20150515/001a01!450450.jpg",
  },
  {
    orderId: "01040030073",
    model: "DZ15-40/3901T 32A",
    price: "165",
    showPrice: "165",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 32A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/292493/18/15477/59895/6852907fF0f2a02ba/7b226c0305cbb622.jpg.avif",
  },
  {
    orderId: "01040030039",
    model: "DZ15-40/3901 20A",
    price: "185",
    showPrice: "185",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 3kA | Trip unit type: 液压式 | 安装方式：固定式 | 操作方式：本体操作 | 接线方式：板前接线 | Frame current: 40A | Rated current: 20A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/298250/38/15418/31155/684ffba5F6b1392ad/0cc6512fffd50e4e.jpg.avif",
  },
  {
    orderId: "01040030066",
    model: "DZ15-100/3901T 63A",
    price: "242.5",
    showPrice: "242.5",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/288681/39/15003/75647/68529099F2ed35ee0/23b59d91fbcea25a.jpg.avif",
  },
  {
    orderId: "01040030010",
    model: "DZ15-100/3901 63A",
    price: "242.5",
    showPrice: "242.5",
    remark:
      "Series: DZ15 | Number of poles: 3P | Rated ultimate breaking capacity: 5kA | Trip unit type: 液压式 | Frame current: 100A | Rated current: 63A",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/303676/33/11674/21948/6852907bF37b26316/01f7cd25e72463da.jpg.avif",
  },
];

export default list;
