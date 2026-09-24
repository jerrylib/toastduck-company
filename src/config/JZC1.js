const list = [
  {
    orderId: "JZC122M",
    model: "JZC1-22 50Hz 220V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC220V | Frequency:50Hz | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/112562/34/27567/47815/625ef6cfEb2ea4f2d/155c015c1756bbc5.jpg.avif",
  },
  {
    orderId: "JZC144M",
    model: "JZC1-44 50Hz 220V",
    price: "130.65",
    showPrice: "59.65",
    remark:
      "Series: JZC1 | Coil voltage: AC220V | Frequency:50Hz | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/173482/5/44207/40824/660a93ebF611f4222/38421a5d583d92fd.jpg.avif",
  },
  {
    orderId: "JZC131MZ",
    model: "JZC1-31/Z 50Hz 220V",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC220V | Frequency:- | 触点类型：3NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC144Q",
    model: "JZC1-44 50Hz 380V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC380V | Frequency:50Hz | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC144F",
    model: "JZC1-44 50Hz 110V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC110V | Frequency:50Hz | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC144MZ",
    model: "JZC1-44/Z 50Hz 220V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC220V | Frequency:- | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC180B",
    model: "JZC1-80 50Hz 24V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC24V | Frequency:50Hz | 触点类型：8NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/118107/3/24738/59366/625ef6d0Ebad2e776/c1a31c9bb2af0690.jpg.avif",
  },
  {
    orderId: "JZC122MZ",
    model: "JZC1-22/Z 50Hz 220V",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC220V | Frequency:- | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/202511/11/20332/63103/625ef6d0Eae476565/950fa5854c6dfcdc.jpg.avif",
  },
  {
    orderId: "JZC162Q",
    model: "JZC1-62 50Hz 380V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC380V | Frequency:50Hz | 触点类型：6NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/202511/11/20332/63103/625ef6d0Eae476565/950fa5854c6dfcdc.jpg.avif",
  },
  {
    orderId: "JZC144BZ",
    model: "JZC1-44/Z 50Hz 24V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC24V | Frequency:- | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC162M",
    model: "JZC1-62 50Hz 220V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC220V | Frequency:50Hz | 触点类型：6NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC104MZ",
    model: "JZC1-04/Z 50HZ 220V",
    price: "223.43",
    showPrice: "223.43",
    remark: "Series: JZC1 | Coil voltage: DC220V | Frequency:- | 触点类型：4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC140MZ",
    model: "JZC1-40/Z 50Hz 220V",
    price: "223.43",
    showPrice: "223.43",
    remark: "Series: JZC1 | Coil voltage: DC220V | Frequency:- | 触点类型：4NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC140B",
    model: "JZC1-40 50Hz 24V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC24V | Frequency:50Hz | 触点类型：4NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/91692/39/27829/70442/625ef6ceE24ad7025/b7e2d551d85b6523.jpg.avif",
  },
  {
    orderId: "JZC122E",
    model: "JZC1-22 50HZ 48V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC48V | Frequency:50Hz | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC113Q",
    model: "JZC1-13 50Hz 380V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC380V | Frequency:50Hz | 触点类型：1NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/91692/39/27829/70442/625ef6ceE24ad7025/b7e2d551d85b6523.jpg.avif",
  },
  {
    orderId: "JZC140C",
    model: "JZC1-40 50Hz 36V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC36V | Frequency:50Hz | 触点类型：4NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC153F",
    model: "JZC1-53 50Hz 110V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC110V | Frequency:50Hz | 触点类型：5NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/118107/3/24738/59366/625ef6d0Ebad2e776/c1a31c9bb2af0690.jpg.avif",
  },
  {
    orderId: "JZC153C",
    model: "JZC1-53 50Hz 36V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC36V | Frequency:50Hz | 触点类型：5NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC180F",
    model: "JZC1-80 50Hz 110V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC110V | Frequency:50Hz | 触点类型：8NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/118107/3/24738/59366/625ef6d0Ebad2e776/c1a31c9bb2af0690.jpg.avif",
  },
  {
    orderId: "JZC180Q",
    model: "JZC1-80 50Hz 380V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC380V | Frequency:50Hz | 触点类型：8NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC122FZ",
    model: "JZC1-22/Z 50Hz 110V",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC110V | Frequency:- | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC131FZ",
    model: "JZC1-31/Z 50Hz 110V",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC110V | Frequency:- | 触点类型：3NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC144FZ",
    model: "JZC1-44/Z 50Hz 110V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC110V | Frequency:- | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/233412/1/18081/34854/666c4a8eFb611cc86/5c1e56d04f148447.jpg.avif",
  },
  {
    orderId: "JZC144EZ",
    model: "JZC1-44/Z 50Hz 48V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC48V | Frequency:- | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/91692/39/27829/70442/625ef6ceE24ad7025/b7e2d551d85b6523.jpg.avif",
  },
  {
    orderId: "JZC144J",
    model: "JZC1-44 50Hz 12V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC12V | Frequency:50Hz | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC144E",
    model: "JZC1-44 50Hz 48V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC48V | Frequency:50Hz | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/118107/3/24738/59366/625ef6d0Ebad2e776/c1a31c9bb2af0690.jpg.avif",
  },
  {
    orderId: "JZC180MZ",
    model: "JZC1-80/Z 50Hz 220V",
    price: "262.78",
    showPrice: "262.78",
    remark: "Series: JZC1 | Coil voltage: DC220V | Frequency:- | 触点类型：8NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC180C",
    model: "JZC1-80 50Hz 36V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC36V | Frequency:50Hz | 触点类型：8NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC113MZ",
    model: "JZC1-13/Z 50Hz 220V",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC220V | Frequency:- | 触点类型：1NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC180FZ",
    model: "JZC1-80/Z 50Hz 110V",
    price: "262.78",
    showPrice: "262.78",
    remark: "Series: JZC1 | Coil voltage: DC110V | Frequency:- | 触点类型：8NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC162FZ",
    model: "JZC1-62/Z 50Hz 110V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC110V | Frequency:- | 触点类型：6NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC140S",
    model: "JZC1-40 50Hz 127V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC127V | Frequency:50Hz | 触点类型：4NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/118107/3/24738/59366/625ef6d0Ebad2e776/c1a31c9bb2af0690.jpg.avif",
  },
  {
    orderId: "JZC144S",
    model: "JZC1-44 50Hz 127V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC127V | Frequency:50Hz | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/91692/39/27829/70442/625ef6ceE24ad7025/b7e2d551d85b6523.jpg.avif",
  },
  {
    orderId: "JZC144JZ",
    model: "JZC1-44/Z 50Hz 12V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC12V | Frequency:- | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC122S",
    model: "JZC1-22 50Hz 127V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC127V | Frequency:50Hz | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/91692/39/27829/70442/625ef6ceE24ad7025/b7e2d551d85b6523.jpg.avif",
  },
  {
    orderId: "JZC131C",
    model: "JZC1-31 50Hz 36V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC36V | Frequency:50Hz | 触点类型：3NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC153MZ",
    model: "JZC1-53/Z 50Hz 220V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC220V | Frequency:- | 触点类型：5NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC113M",
    model: "JZC1-13 50Hz 220V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC220V | Frequency:50Hz | 触点类型：1NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC122EZ",
    model: "JZC1-22/Z 50Hz 48v",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC48V | Frequency:- | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC131J",
    model: "JZC1-31 50Hz 12V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC12V | Frequency:50Hz | 触点类型：3NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/118107/3/24738/59366/625ef6d0Ebad2e776/c1a31c9bb2af0690.jpg.avif",
  },
  {
    orderId: "JZC131F",
    model: "JZC1-31 50Hz 110V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC110V | Frequency:50Hz | 触点类型：3NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/202511/11/20332/63103/625ef6d0Eae476565/950fa5854c6dfcdc.jpg.avif",
  },
  {
    orderId: "JZC153B",
    model: "JZC1-53 50Hz 24V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC24V | Frequency:50Hz | 触点类型：5NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/91692/39/27829/70442/625ef6ceE24ad7025/b7e2d551d85b6523.jpg.avif",
  },
  {
    orderId: "JZC162MZ",
    model: "JZC1-62/Z 50Hz 220V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC220V | Frequency:- | 触点类型：6NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/91692/39/27829/70442/625ef6ceE24ad7025/b7e2d551d85b6523.jpg.avif",
  },
  {
    orderId: "JZC104B",
    model: "JZC1-04 50HZ 24V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC24V | Frequency:50Hz | 触点类型：4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC162BZ",
    model: "JZC1-62/Z 50Hz 24V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC24V | Frequency:- | 触点类型：6NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC122BZ",
    model: "JZC1-22/Z 50Hz 24V",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC24V | Frequency:- | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC180BZ",
    model: "JZC1-80/Z 50Hz 24V",
    price: "262.78",
    showPrice: "262.78",
    remark: "Series: JZC1 | Coil voltage: DC24V | Frequency:- | 触点类型：8NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC131EZ",
    model: "JZC1-31/Z 50HZ 48V",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC48V | Frequency:- | 触点类型：3NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC153BZ",
    model: "JZC1-53/Z 50Hz 24V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC24V | Frequency:- | 触点类型：5NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC131BZ",
    model: "JZC1-31/Z 50Hz 24V",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC24V | Frequency:- | 触点类型：3NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC140BZ",
    model: "JZC1-40/Z 50Hz 24V",
    price: "223.43",
    showPrice: "223.43",
    remark: "Series: JZC1 | Coil voltage: DC24V | Frequency:- | 触点类型：4NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC113FZ",
    model: "JZC1-13/Z 50HZ DC110V",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC110V | Frequency:- | 触点类型：1NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/149636/1/22688/61277/6205d96aEdc32fee9/6a4cd42e7acffc66.jpg.avif",
  },
  {
    orderId: "JZC140FZ",
    model: "JZC1-40/Z 50Hz 110V",
    price: "223.43",
    showPrice: "223.43",
    remark: "Series: JZC1 | Coil voltage: DC110V | Frequency:- | 触点类型：4NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/99966/22/23450/49803/6205fc4fE074af81a/b79631b01106cdd4.jpg.avif",
  },
  {
    orderId: "JZC153FZ",
    model: "JZC1-53/Z 50Hz 110V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC110V | Frequency:- | 触点类型：5NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/99966/22/23450/49803/6205fc4fE074af81a/b79631b01106cdd4.jpg.avif",
  },
  {
    orderId: "JZC104M",
    model: "JZC1-04 50HZ 220V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC220V | Frequency:50Hz | 触点类型：4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/99966/22/23450/49803/6205fc4fE074af81a/b79631b01106cdd4.jpg.avif",
  },
  {
    orderId: "JZC122B",
    model: "JZC1-22 50Hz 24V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC24V | Frequency:50Hz | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC122Q",
    model: "JZC1-22 50Hz 380V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC380V | Frequency:50Hz | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/202511/11/20332/63103/625ef6d0Eae476565/950fa5854c6dfcdc.jpg.avif",
  },
  {
    orderId: "JZC140Q",
    model: "JZC1-40 50Hz 380V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC380V | Frequency:50Hz | 触点类型：4NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/91692/39/27829/70442/625ef6ceE24ad7025/b7e2d551d85b6523.jpg.avif",
  },
  {
    orderId: "JZC131M",
    model: "JZC1-31 50Hz 220V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC220V | Frequency:50Hz | 触点类型：3NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC131Q",
    model: "JZC1-31 50Hz 380V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC380V | Frequency:50Hz | 触点类型：3NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC122C",
    model: "JZC1-22 50Hz 36V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC36V | Frequency:50Hz | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC140M",
    model: "JZC1-40 50Hz 220V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC220V | Frequency:50Hz | 触点类型：4NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC131B",
    model: "JZC1-31 50Hz 24V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC24V | Frequency:50Hz | 触点类型：3NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/202511/11/20332/63103/625ef6d0Eae476565/950fa5854c6dfcdc.jpg.avif",
  },
  {
    orderId: "JZC122F",
    model: "JZC1-22 50Hz 110V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC110V | Frequency:50Hz | 触点类型：2NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/91692/39/27829/70442/625ef6ceE24ad7025/b7e2d551d85b6523.jpg.avif",
  },
  {
    orderId: "JZC162B",
    model: "JZC1-62 50Hz 24V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC24V | Frequency:50Hz | 触点类型：6NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC153M",
    model: "JZC1-53 50Hz 220V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC220V | Frequency:50Hz | 触点类型：5NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC180M",
    model: "JZC1-80 50Hz 220V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC220V | Frequency:50Hz | 触点类型：8NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/202511/11/20332/63103/625ef6d0Eae476565/950fa5854c6dfcdc.jpg.avif",
  },
  {
    orderId: "JZC162C",
    model: "JZC1-62 50Hz 36V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC36V | Frequency:50Hz | 触点类型：6NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC144B",
    model: "JZC1-44 50Hz 24V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC24V | Frequency:50Hz | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC144C",
    model: "JZC1-44 50Hz 36V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC36V | Frequency:50Hz | 触点类型：4NO+4NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC171M",
    model: "JZC1-71 50Hz 220V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC220V | Frequency:50Hz | 触点类型：7NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/123364/17/27029/62493/625ef6ceE447cb2ec/b8ab914e2a5c1f2f.jpg.avif",
  },
  {
    orderId: "JZC153Q",
    model: "JZC1-53 50Hz 380V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC380V | Frequency:50Hz | 触点类型：5NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/91692/39/27829/70442/625ef6ceE24ad7025/b7e2d551d85b6523.jpg.avif",
  },
  {
    orderId: "JZC162F",
    model: "JZC1-62 50Hz 110V",
    price: "130.65",
    showPrice: "130.65",
    remark:
      "Series: JZC1 | Coil voltage: AC110V | Frequency:50Hz | 触点类型：6NO+2NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/202511/11/20332/63103/625ef6d0Eae476565/950fa5854c6dfcdc.jpg.avif",
  },
  {
    orderId: "JZC113B",
    model: "JZC1-13 50Hz 24V",
    price: "98.46",
    showPrice: "98.46",
    remark:
      "Series: JZC1 | Coil voltage: AC24V | Frequency:50Hz | 触点类型：1NO+3NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/98558/20/22933/59685/620672cfE2b60a074/0b3ebbe2926fd911.jpg.avif",
  },
  {
    orderId: "JZC171MZ",
    model: "JZC1-71/Z 50Hz 220V",
    price: "262.78",
    showPrice: "262.78",
    remark:
      "Series: JZC1 | Coil voltage: DC220V | Frequency:- | 触点类型：7NO+1NC",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/98558/20/22933/59685/620672cfE2b60a074/0b3ebbe2926fd911.jpg.avif",
  },
  {
    orderId: "JZC140EZ",
    model: "JZC1-40/Z 50HZ 48V",
    price: "223.43",
    showPrice: "223.43",
    remark:
      "Series: JZC1 | Coil voltage: DC48V | Frequency:50Hz | 触点类型：4NO",
    url: "https://img20.360buyimg.com/vc/s280x280_jfs/t1/211301/33/17079/67087/6206a516E10d73de3/48ca11b9b6090ecf.jpg.avif",
  },
  {
    orderId: "JZC104FZ",
    model: "JZC1-04/Z 50HZ 110V",
    price: "223.43",
    showPrice: "223.43",
    remark: "Series: JZC1 | Coil voltage: DC110V | Frequency:- | 触点类型：4NC",
    url: "https://images.toastduck.com/default-01KPA529T747DE7ZV6D72A56TX.png",
  },
];
export default list;
