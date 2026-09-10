const list = [
  {
    orderId: "ATV320U04M2C",
    model: "ATV320 0.37kW 220V 单相",
    price: "1671.27",
    showPrice: "1671.27",
    remark:
      "系列：ATV320 | 额定电机功率：0.37kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/223298/34/10543/43740/62060186E56f3d358/edda5335023495ad.jpg.avif",
  },
  {
    orderId: "ATV320U40N4C",
    model: "ATV320 4kW 400V 三相",
    price: "4082.69",
    showPrice: "4082.69",
    remark:
      "系列：ATV320 | 额定电机功率：4kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/309196/5/17030/25379/6875dd18Fd8522577/cc996468bce95425.jpg.avif",
  },
  {
    orderId: "ATV320D11N4B",
    model: "ATV320 11kW 400V 三相",
    price: "7948.42",
    showPrice: "7948.42",
    remark:
      "系列：ATV320 | 额定电机功率：11kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型外观(书本型控制板)",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/210436/7/17151/30930/620601acEb906be2b/a3bf271379bd9d38.jpg.avif",
  },
  {
    orderId: "ATV320U15N4C",
    model: "ATV320 1.5kW 400V 三相",
    price: "2759.46",
    showPrice: "2759.46",
    remark:
      "系列：ATV320 | 额定电机功率：1.5kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/93883/34/20550/26725/6206019fEd08d01d4/65b4e5efacac803f.jpg.avif",
  },
  {
    orderId: "ATV320U04N4C",
    model: "ATV320 0.37kW 400V 三相",
    price: "2252.09",
    showPrice: "2252.09",
    remark:
      "系列：ATV320 | 额定电机功率：0.37kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/130946/3/21963/43388/62060195E72c6103b/0e67c464782d086a.jpg.avif",
  },
  {
    orderId: "ATV320U04N4B",
    model: "ATV320 0.37kW 400V 三相 书本型",
    price: "2252.09",
    showPrice: "2252.09",
    remark:
      "系列：ATV320 | 额定电机功率：0.37kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/113865/1/21297/29056/620601c2E2420e88d/74817f26f1517023.jpg.avif",
  },
  {
    orderId: "ATV320U11M3C",
    model: "ATV320 1.1kW 220V 三相 紧凑型",
    price: "2671.32",
    showPrice: "2671.32",
    remark:
      "系列：ATV320 | 额定电机功率：1.1kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/174192/12/28320/54202/620601ddE3d642600/ced525b3d810342d.jpg.avif",
  },
  {
    orderId: "ATV320U22N4C",
    model: "ATV320 2.2kW 400V 三相",
    price: "3395.65",
    showPrice: "3395.65",
    remark:
      "系列：ATV320 | 额定电机功率：2.2kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/146076/23/21576/42359/620601a1E6dffa207/e4fca8db226c72d5.jpg.avif",
  },
  {
    orderId: "ATV320U55M3C",
    model: "ATV320 5.5kW 220V 三相 紧凑型",
    price: "6743.84",
    showPrice: "6743.84",
    remark:
      "系列：ATV320 | 额定电机功率：5.5kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/219710/29/12134/33872/620601eaE4f8bc848/d62d9c8ca9609635.jpg.avif",
  },
  {
    orderId: "ATV320U06N4B",
    model: "ATV320 0.55kW 400V 三相 书本型",
    price: "2377.52",
    showPrice: "2377.52",
    remark:
      "系列：ATV320 | 额定电机功率：0.55kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/122172/38/20964/29127/620601c4E112a5497/e06cf25cb81732a6.jpg.avif",
  },
  {
    orderId: "ATV320U75N4B",
    model: "ATV320 7.5kW 400V 三相",
    price: "5966.4",
    showPrice: "5966.4",
    remark:
      "系列：ATV320 | 额定电机功率：7.5kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型外观(书本型控制板)",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/211351/36/17035/42185/620601aaE50e97e49/f7829bb952dc4f4a.jpg.avif",
  },
  {
    orderId: "ATV320U04M2B",
    model: "ATV320 0.37kW 220V 单相 书本型",
    price: "2339.1",
    showPrice: "2339.1",
    remark:
      "系列：ATV320 | 额定电机功率：0.37kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/221963/10/10491/28402/620601b5E890f4532/2a6732e9afe7e285.jpg.avif",
  },
  {
    orderId: "ATV320U07N4B",
    model: "ATV320 0.75kW 400V 三相 书本型",
    price: "2385.43",
    showPrice: "2385.43",
    remark:
      "系列：ATV320 | 额定电机功率：0.75kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/87943/18/22186/28828/620601c6Eabf08efd/d1631e844d2d3b0c.jpg.avif",
  },
  {
    orderId: "ATV320U40N4B",
    model: "ATV320 4kW 400V 三相 书本型",
    price: "4082.69",
    showPrice: "4082.69",
    remark:
      "系列：ATV320 | 额定电机功率：4kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/131975/2/24115/29529/620601d1E831c902e/e050112c63dcf6a7.jpg.avif",
  },
  {
    orderId: "ATV320U40S6C",
    model: "ATV320 4kW 600V 三相 紧凑型",
    price: "6831.98",
    showPrice: "6831.98",
    remark:
      "系列：ATV320 | 额定电机功率：4kW | 相数：三相 | 电源电压：AC525-600V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/214920/5/12388/38093/620601fdE88fa49de/082465a256996198.jpg.avif",
  },
  {
    orderId: "ATV320U07N4C",
    model: "ATV320 0.75kW 400V 三相",
    price: "2385.43",
    showPrice: "2385.43",
    remark:
      "系列：ATV320 | 额定电机功率：0.75kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/210014/35/16969/43247/6206019aE33f2bd48/5212a868eb2231d5.jpg.avif",
  },
  {
    orderId: "ATV320U06N4C",
    model: "ATV320 0.55kW 400V 三相",
    price: "2377.52",
    showPrice: "2377.52",
    remark:
      "系列：ATV320 | 额定电机功率：0.55kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/207899/23/17157/42388/62060198E826e4277/2d7d142cec0afd08.jpg.avif",
  },
  {
    orderId: "ATV320U30M3C",
    model: "ATV320 3kW 220V 三相 紧凑型",
    price: "4725.66",
    showPrice: "4725.66",
    remark:
      "系列：ATV320 | 额定电机功率：3kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/157862/34/27892/45664/620601e6E83826051/3e55bc333a0de94f.jpg.avif",
  },
  {
    orderId: "ATV320D15M3C",
    model: "ATV320 15kW 220V 三相 紧凑型",
    price: "15182.68",
    showPrice: "15182.68",
    remark:
      "系列：ATV320 | 额定电机功率：15kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/105497/39/21268/27582/620601f2Ec63e14c9/64150de95a94746b.jpg.avif",
  },
  {
    orderId: "ATV320D15N4B",
    model: "ATV320 15kW 400V 三相",
    price: "10466.06",
    showPrice: "10466.06",
    remark:
      "系列：ATV320 | 额定电机功率：15kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型外观(书本型控制板)",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/165609/19/27142/31048/620601afE0abaa66f/1cccfcbec695949d.jpg.avif",
  },
  {
    orderId: "ATV320U07M2C",
    model: "ATV320 0.75kW 220V 单相",
    price: "1831.73",
    showPrice: "1831.73",
    remark:
      "系列：ATV320 | 额定电机功率：0.75kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/287907/5/19862/29611/6875dd15Fb182ecd0/edb9e0418042c8c5.jpg.avif",
  },
  {
    orderId: "ATV320U11N4B",
    model: "ATV320 1.1kW 400V 三相 书本型",
    price: "2608.04",
    showPrice: "2608.04",
    remark:
      "系列：ATV320 | 额定电机功率：1.1kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/142057/37/20511/29541/620601c8E21a9e89c/a8d84211d1ccec4f.jpg.avif",
  },
  {
    orderId: "ATV320U06M2B",
    model: "ATV320 0.55kW 220V 单相 书本型",
    price: "2464.53",
    showPrice: "2464.53",
    remark:
      "系列：ATV320 | 额定电机功率：0.55kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/214721/7/12441/28333/620601b7Efe72f765/59c19e75875fa1aa.jpg.avif",
  },
  {
    orderId: "ATV320U22M2B",
    model: "ATV320 2.2kW 220V 单相 书本型",
    price: "3248.75",
    showPrice: "3248.75",
    remark:
      "系列：ATV320 | 额定电机功率：2.2kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/210609/35/16829/28208/620601c0Ebecf13ac/372ab2e94c29ef76.jpg.avif",
  },
  {
    orderId: "ATV320U02M2B",
    model: "ATV320 0.18kW 220V 单相 书本型",
    price: "2158.3",
    showPrice: "2158.3",
    remark:
      "系列：ATV320 | 额定电机功率：0.18kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/214108/37/12226/28591/620601b3E18990264/242fc5cde09f22b8.jpg.avif",
  },
  {
    orderId: "ATV320U07M2B",
    model: "ATV320 0.75kW 220V 单相 书本型",
    price: "2563.97",
    showPrice: "2563.97",
    remark:
      "系列：ATV320 | 额定电机功率：0.75kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/206754/9/17114/29172/620601b9E714b470a/f15fb50585bc08e9.jpg.avif",
  },
  {
    orderId: "ATV320U04M3C",
    model: "ATV320 0.37kW 220V 三相 紧凑型",
    price: "2001.23",
    showPrice: "2001.23",
    remark:
      "系列：ATV320 | 额定电机功率：0.37kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/174464/22/26460/42070/620601d6Ebabb2562/f1d1cfc76c894345.jpg.avif",
  },
  {
    orderId: "ATV320U15M2B",
    model: "ATV320 1.5kW 220V 单相 书本型",
    price: "2995.63",
    showPrice: "2995.63",
    remark:
      "系列：ATV320 | 额定电机功率：1.5kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/133141/21/23209/28128/620601beE9e9b9f90/13b882c4730247f4.jpg.avif",
  },
  {
    orderId: "ATV320U02M2C",
    model: "ATV320 0.18kW 220V 单相",
    price: "1438.49",
    showPrice: "1438.49",
    remark:
      "系列：ATV320 | 额定电机功率：0.18kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/211752/1/12400/43740/62060184E569d6aa4/5238a62e67fc5d58.jpg.avif",
  },
  {
    orderId: "ATV320U06M3C",
    model: "ATV320 0.55kW 220V 三相 紧凑型",
    price: "2144.74",
    showPrice: "2144.74",
    remark:
      "系列：ATV320 | 额定电机功率：0.55kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/158056/25/27687/41917/620601d8E2f9de138/2a31443f4565b701.jpg.avif",
  },
  {
    orderId: "ATV320U11M2C",
    model: "ATV320 1.1kW 220V 单相",
    price: "2091.63",
    showPrice: "2091.63",
    remark:
      "系列：ATV320 | 额定电机功率：1.1kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/217345/9/12136/43250/6206018eE6f4a1950/b69e38143e9d6e66.jpg.avif",
  },
  {
    orderId: "ATV320U11M2B",
    model: "ATV320 1.1kW 220V 单相 书本型",
    price: "2821.61",
    showPrice: "2821.61",
    remark:
      "系列：ATV320 | 额定电机功率：1.1kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/148643/14/21859/28362/620601bbE98817f15/01f65f407fc2a55e.jpg.avif",
  },
  {
    orderId: "ATV320U22M3C",
    model: "ATV320 2.2kW 220V 三相 紧凑型",
    price: "3492.83",
    showPrice: "3492.83",
    remark:
      "系列：ATV320 | 额定电机功率：2.2kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/144500/5/22995/54326/620601e3Efb7651bf/d73ad0ac7b25f7c7.jpg.avif",
  },
  {
    orderId: "ATV320U11N4C",
    model: "ATV320 1.1kW 400V 三相",
    price: "2608.04",
    showPrice: "2608.04",
    remark:
      "系列：ATV320 | 额定电机功率：1.1kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/140595/4/20726/42353/6206019dE9916642f/93af9940811ced50.jpg.avif",
  },
  {
    orderId: "ATV320U07S6C",
    model: "ATV320 0.75kW 600V 三相 紧凑型",
    price: "4099.64",
    showPrice: "4099.64",
    remark:
      "系列：ATV320 | 额定电机功率：0.75kW | 相数：三相 | 电源电压：AC525-600V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/127846/16/22505/44240/620601f5E13149855/561a784b67a0d869.jpg.avif",
  },
  {
    orderId: "ATV320U06M2C",
    model: "ATV320 0.55kW 220V 单相",
    price: "1760.54",
    showPrice: "1760.54",
    remark:
      "系列：ATV320 | 额定电机功率：0.55kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/318130/4/16384/26816/6875dd12Fad49c35e/e1c3d804cc7c954b.jpg.avif",
  },
  {
    orderId: "ATV320U22M2C",
    model: "ATV320 2.2kW 220V 单相",
    price: "2706.35",
    showPrice: "2706.35",
    remark:
      "系列：ATV320 | 额定电机功率：2.2kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/114140/7/21371/42541/62060192E17e2b9c6/35ab332e7ac48085.jpg.avif",
  },
  {
    orderId: "ATV320U55N4B",
    model: "ATV320 5.5kW 400V 三相",
    price: "5492.93",
    showPrice: "5492.93",
    remark:
      "系列：ATV320 | 额定电机功率：5.5kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型外观(书本型控制板)",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/220022/5/12090/42441/620601a8Eac327cad/9d1d31127942dbcd.jpg.avif",
  },
  {
    orderId: "ATV320U75M3C",
    model: "ATV320 7.5kW 220V 三相 紧凑型",
    price: "8583.48",
    showPrice: "8583.48",
    remark:
      "系列：ATV320 | 额定电机功率：7.5kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/133159/17/23839/33500/620601edEa8734f77/ea58eb42e513c7fa.jpg.avif",
  },
  {
    orderId: "ATV320U22N4B",
    model: "ATV320 2.2kW 400V 三相 书本型",
    price: "3395.65",
    showPrice: "3395.65",
    remark:
      "系列：ATV320 | 额定电机功率：2.2kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/125737/9/22978/29873/620601ccEb9e3ec96/42e465888c2faaa5.jpg.avif",
  },
  {
    orderId: "ATV320U30N4C",
    model: "ATV320 3kW 400V 三相",
    price: "4055.57",
    showPrice: "4055.57",
    remark:
      "系列：ATV320 | 额定电机功率：3kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/159444/9/26836/43058/620601a3E4dc1bd4e/a6e6d6b02f0c2637.jpg.avif",
  },
  {
    orderId: "ATV320U40M3C",
    model: "ATV320 4kW 220V 三相 紧凑型",
    price: "5341.51",
    showPrice: "5341.51",
    remark:
      "系列：ATV320 | 额定电机功率：4kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/214634/16/12319/45175/620601e8Ebaa20c89/58c70b5265ec178f.jpg.avif",
  },
  {
    orderId: "ATV320U75S6C",
    model: "ATV320 7.5kW 600V 三相 紧凑型",
    price: "10208.42",
    showPrice: "10208.42",
    remark:
      "系列：ATV320 | 额定电机功率：7.5kW | 相数：三相 | 电源电压：AC525-600V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/212539/21/12153/34580/62060202E7addf6d9/34681633d7c0c918.jpg.avif",
  },
  {
    orderId: "ATV320U02M3C",
    model: "ATV320 0.18kW 220V 三相 紧凑型",
    price: "1742.46",
    showPrice: "1742.46",
    remark:
      "系列：ATV320 | 额定电机功率：0.18kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/96591/25/23452/41957/620601d3E3f952a5d/6e69f3dc481cfada.jpg.avif",
  },
  {
    orderId: "ATV320U15M2C",
    model: "ATV320 1.5kW 220V 单相",
    price: "2305.2",
    showPrice: "2305.2",
    remark:
      "系列：ATV320 | 额定电机功率：1.5kW | 相数：单相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/128087/38/22943/42381/62060190Ea856d61b/f6db544ca02539ee.jpg.avif",
  },
  {
    orderId: "ATV320U15N4B",
    model: "ATV320 1.5kW 400V 三相 书本型",
    price: "2759.46",
    showPrice: "2759.46",
    remark:
      "系列：ATV320 | 额定电机功率：1.5kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/164710/15/28091/30396/620601caE44bc90e8/9c519fe4a69bb2a0.jpg.avif",
  },
  {
    orderId: "ATV320U30N4B",
    model: "ATV320 3kW 400V 三相 书本型",
    price: "4055.57",
    showPrice: "4055.57",
    remark:
      "系列：ATV320 | 额定电机功率：3kW | 相数：三相 | 电源电压：AC380-500V | 应用类型：书本型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/6195/6/21683/30266/620601ceEb332ac9e/2328f6c880bffe22.jpg.avif",
  },
  {
    orderId: "ATV320U15S6C",
    model: "ATV320 1.5kW 600V 三相 紧凑型",
    price: "4654.47",
    showPrice: "4654.47",
    remark:
      "系列：ATV320 | 额定电机功率：1.5kW | 相数：三相 | 电源电压：AC525-600V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/213432/30/12336/44414/620601f7E01de48bc/a0b96cee718c0fc2.jpg.avif",
  },
  {
    orderId: "ATV320D11M3C",
    model: "ATV320 11kW 220V 三相 紧凑型",
    price: "12297.79",
    showPrice: "12297.79",
    remark:
      "系列：ATV320 | 额定电机功率：11kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/134038/28/22191/27554/620601f0E0e7c0b5b/f91e78a71e449914.jpg.avif",
  },
  {
    orderId: "ATV320U15M3C",
    model: "ATV320 1.5kW 220V 三相 紧凑型",
    price: "2867.94",
    showPrice: "2867.94",
    remark:
      "系列：ATV320 | 额定电机功率：1.5kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123741/34/21219/53802/620601e0E168a5796/87913c73ccdbd671.jpg.avif",
  },
  {
    orderId: "ATV320U22S6C",
    model: "ATV320 2.2kW 600V 三相 紧凑型",
    price: "5465.81",
    showPrice: "5465.81",
    remark:
      "系列：ATV320 | 额定电机功率：2.2kW | 相数：三相 | 电源电压：AC525-600V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/206543/23/17289/38497/620601faEc2351df9/6ae776c31316fa74.jpg.avif",
  },
  {
    orderId: "ATV320D11S6C",
    model: "ATV320 11kW 600V 三相 紧凑型",
    price: "12565.6",
    showPrice: "12565.6",
    remark:
      "系列：ATV320 | 额定电机功率：11kW | 相数：三相 | 电源电压：AC525-600V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/90247/2/21075/29843/62060204E8ddf1119/c2ef7a8bf5f2d4ce.jpg.avif",
  },
  {
    orderId: "ATV320D15S6C",
    model: "ATV320 15kW 600V 三相 紧凑型",
    price: "13869.62",
    showPrice: "13869.62",
    remark:
      "系列：ATV320 | 额定电机功率：15kW | 相数：三相 | 电源电压：AC525-600V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/158749/33/26977/29033/62060206E538adac4/614de55f254afe52.jpg.avif",
  },
  {
    orderId: "ATV320U07M3C",
    model: "ATV320 0.75kW 220V 三相 紧凑型",
    price: "2260",
    showPrice: "2260",
    remark:
      "系列：ATV320 | 额定电机功率：0.75kW | 相数：三相 | 电源电压：AC200-240V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/172103/23/26624/42014/620601dbE6df43235/2f97ac057cc46324.jpg.avif",
  },
  {
    orderId: "ATV320U55S6C",
    model: "ATV320 5.5kW 600V 三相 紧凑型",
    price: "7860.28",
    showPrice: "7860.28",
    remark:
      "系列：ATV320 | 额定电机功率：5.5kW | 相数：三相 | 电源电压：AC525-600V | 应用类型：紧凑型",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/129010/24/22570/34110/620601ffE922a7376/e9a426c50d00fd3a.jpg.avif",
  },
  {
    orderId: "ATV320U55N4C",
    model: "ATV320U55N4C",
    price: "5492.93",
    showPrice: "5492.93",
    remark: "系列：ATV320 | 电源电压：380-500V",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/373043/26/11516/15719/693b8534F85199c34/0711320320d51bf3.jpg.avif",
  },
  {
    orderId: "ATV320D11N4C",
    model: "ATV320D11N4C",
    price: "7948.42",
    showPrice: "7948.42",
    remark: "系列：ATV320 | 电源电压：380-500V",
    url: "",
  },
];
export default list;
