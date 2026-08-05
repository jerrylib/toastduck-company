const tmax = [
  {
    model: "T5N630 PR221DS-LSI R630 FF 3P",
    price: "7273.43",
  },
  {
    model: "T5N630 PR221DS-LSI R630 PMP 3P",
    price: "8301.98",
  },
  {
    model: "T5H400 PR221DS-LSI R400 PMP 3P",
    price: "5692.71",
  },
  {
    model: "T4N250 TMA250/1250-2500 FF 3P",
    price: "3268.69",
  },
  {
    model: "T6S630 TMA630/3150-6300 FF 3P",
    price: "9960.82",
  },
  {
    model: "T7S1600 PR231/P-LSI R1600 FF 3P",
    price: "26996.80",
  },
  {
    model: "T5S630 TMA500/2500-5000 FF 3P",
    price: "6951.62",
  },
  {
    model: "T5N630 PR222DS/P-LSI R630 FF 3P",
    price: "9751.08",
  },
  {
    model: "T5S400 TMA400/2000-4000 FF 3P",
    price: "4158.13",
  },
  {
    model: "T5N400 UL/CSA TMA 400-2000..4000 3p F F",
    price: "4576.57",
  },
  {
    model: "T5N400 UL/CSA TMA 300-1500..3000 3p F F",
    price: "4576.57",
  },
  {
    model: "T4V250 TMA250/1250-2500 FF 3P",
    price: "6209.33",
  },
  {
    model: "T4V250 PR221DS-LSI R250 FF 3P",
    price: "8689.49",
  },
  {
    model: "T5V630 PR221DS-I R630 FF 3P",
    price: "13152.46",
  },
  {
    model: "T4V250 PR221DS-LSI R100 FF 3P",
    price: "8689.49",
  },
  {
    model: "T4S250 TMA250/1250-2500 FF 3P",
    price: "3445.70",
  },
  {
    model: "T4N250 TMA125/625-1250 FF 4P N=100%",
    price: "4334.63",
  },
  {
    model: "T4V250 PR222DS/P-LSI R250 FF 3P",
    price: "9601.83",
  },
  {
    model: "T4L250 MA160/960-2240 FF 3P",
    price: "2845.67",
  },
  {
    model: "T6S800 PR221DS-LSI R800 FF 3P",
    price: "11506.52",
  },
  {
    model: "T6S630 PR221DS-LSI R630 FF 3P",
    price: "10639.87",
  },
  {
    model: "T6H800 PR221DS-LSI R800 FF 3P",
    price: "13143.15",
  },
  {
    model: "T6N800 PR221DS-I R800 FF 3P",
    price: "10354.48",
  },
  {
    model: "T6H630 TMA630/3150-6300 FF 3P",
    price: "11735.08",
  },
  {
    model: "T6H800 TMA800/4000-8000 FF 3P",
    price: "12307.07",
  },
  {
    model: "T6N630 PR222DS/P-LSI R630 FF 3P",
    price: "11691.70",
  },
  {
    model: "T6N630 TMA630/3150-6300 FF 4P N=100%",
    price: "10987.32",
  },
  {
    model: "T6S800 PR222DS/P-LSI R800 FF 3P",
    price: "13857.16",
  },
  {
    model: "T6S800 TMA800/4000-8000 WMP 3P",
    price: "13395.40",
  },
  {
    model: "T6N800 PR222DS/P-LSI R800 FF 3P",
    price: "12471.01",
  },
  {
    model: "T6N800 PR221DS-LSI R800 FF 4P",
    price: "12898.54",
  },
  {
    model: "T6S800 PR221DS-LSI R800 WMP 3P",
    price: "14026.12",
  },
  {
    model: "T6N800 PR222MP-LRIU R630 FF 3P",
    price: "11840.81",
  },
  {
    model: "T6N630 PR221DS-LSI R630 FF 3P",
    price: "9574.00",
  },
  {
    model: "T6S800 PR222DS/P-LSI R800 WMP 3P",
    price: "16376.79",
  },
  {
    model: "T6S800 PR221DS-I R800 FF 3P",
    price: "11506.52",
  },
  {
    model: "T6N800 TMA800/4000-8000 WMP 3P",
    price: "12316.79",
  },
  {
    model: "T6S800 TMA800/4000-8000 FF 3P",
    price: "10772.78",
  },
  {
    model: "T6N800 TMA800/4000-8000 FF 4P N=100%",
    price: "12079.24",
  },
  {
    model: "T7S1000 PR232/P-LSI R1000 FF 3P",
    price: "18811.32",
  },
  {
    model: "T7S1250 PR231/P-LSI R1250 FF 3P",
    price: "21448.58",
  },
  {
    model: "T7S1000 PR231/P-I R1000 FF 3P",
    price: "16553.85",
  },
  {
    model: "T7S1600 PR231/P-I R1600 FF 3P",
    price: "26996.80",
  },
  {
    model: "T7S1250 PR231/P-LSI R1250 FF 4P",
    price: "27080.65",
  },
  {
    model: "T7S800 PR231/P-I R800 FF 3P",
    price: "12083.11",
  },
  {
    model: "T7S1250 PR232/P-LSI R1250 FF 3P",
    price: "22231.34",
  },
  {
    model: "T7S800M PR231/P-LSI R800 FF 3P",
    price: "17839.82",
  },
  {
    model: "T7H1000 PR231/P-LSI R1000 FF 3P",
    price: "18534.13",
  },
  {
    model: "T7S1000M PR231/P-LSI R1000 FF 3P",
    price: "24776.59",
  },
  {
    model: "T7L1250 PR231/P-I R1250 FF 3P",
    price: "28117.41",
  },
  {
    model: "T7H1250 PR231/P-LSI R1250 FF 3P",
    price: "22804.47",
  },
  {
    model: "T7S1000 PR231/P-LSI R1000 FF 4P",
    price: "21523.13",
  },
  {
    model: "T7S1250M PR232/P-LSI R1250 FF 3P",
    price: "30181.51",
  },
  {
    model: "T7S1000 PR231/P-LSI R1000 FF 3P",
    price: "16553.85",
  },
  {
    model: "T7L1000 PR231/P-LSI R1000 FF 3P",
    price: "22349.02",
  },
  {
    model: "T7S1250M PR231/P-LSI R1250 FF 3P",
    price: "28845.41",
  },
  {
    model: "T7S1250 PR231/P-I R1250 FF 3P",
    price: "20828.85",
  },
  {
    model: "T7S800 PR231/P-LSI R800 FF 3P",
    price: "12083.11",
  },
  {
    model: "T5S400 PR221DS-LSI R400 FF 4P",
    price: "5867.46",
  },
  {
    model: "T5S400 PR221DS-I R400 FF 3P",
    price: "4042.09",
  },
  {
    model: "T5N400 PR222DS/P-LSI R320 FF 3P",
    price: "6424.27",
  },
  {
    model: "T5N400 PR221DS-I R400 FF 3P",
    price: "3571.49",
  },
  {
    model: "T5N400 TMA400/2000-4000 FF 3P",
    price: "4034.51",
  },
  {
    model: "T5S400 PR221DS-LSI R320 FF 3P",
    price: "4353.13",
  },
  {
    model: "T5H400 PR221DS-LSI R400 FF 3P",
    price: "4958.82",
  },
  {
    model: "T5S400 TMA320/1600-3200 FF 4P N=100%",
    price: "5496.08",
  },
  {
    model: "T5H400 PR221DS-LSI R400 FF 4P",
    price: "6746.92",
  },
  {
    model: "T5S400 PR221DS-LSI R400 PMP 3P",
    price: "5045.05",
  },
  {
    model: "T5L400 PR221DS-LSI R400 FF 3P",
    price: "7501.70",
  },
  {
    model: "T5H400 PR221DS-I R320 PMP 3P",
    price: "5476.04",
  },
  {
    model: "T5N400 PR221DS-I R320 FF 3P",
    price: "3571.49",
  },
  {
    model: "T5S400 PR221DS-LSI R400 FF 3P",
    price: "4353.13",
  },
  {
    model: "T5S400 TMA400/2000-4000 FF 4P N=100%",
    price: "5496.08",
  },
  {
    model: "T5S630 PR221DS-I R630 FF 3P",
    price: "7370.10",
  },
  {
    model: "T5N400 TMA320/1600-3200 FF 3P",
    price: "4034.51",
  },
  {
    model: "T5S400 PR222DS/P-LSIG R400 FF 3P",
    price: "7436.48",
  },
  {
    model: "T5S400 PR222DS/P-LSI R320 PMP 3P",
    price: "7316.53",
  },
  {
    model: "T5S630 PR221DS-I R630 PMP 3P",
    price: "8470.89",
  },
  {
    model: "T5N400 TMA320/1600-3200 WMP 3P",
    price: "5509.43",
  },
  {
    model: "T5N400 PR221DS-LSI R320 WMP 3P",
    price: "5713.67",
  },
  {
    model: "T5H630 PR221DS-I R630 FF 3P",
    price: "8438.28",
  },
  {
    model: "T5N400 PR222MP R400 FF 3P",
    price: "5140.56",
  },
  {
    model: "T5V400 TMA400/2000-4000 FF 3P",
    price: "8077.49",
  },
  {
    model: "T5H400 PR222DS/P-LSI R400 FF 4P",
    price: "9368.99",
  },
  {
    model: "T5N400 TMA400/2000-4000 FF 4P N=100%",
    price: "5325.19",
  },
  {
    model: "T5L400 PR221DS-LSI R320 FF 3P",
    price: "7501.70",
  },
  {
    model: "T5N400 PR222DS/P-LSIG R400 PMP 4P",
    price: "10236.81",
  },
  {
    model: "T5L400 PR222DS/P-LSIG R320 FF 3P",
    price: "11388.85",
  },
  {
    model: "T5S630 PR221DS-LSI R630 FF 4P",
    price: "10020.18",
  },
  {
    model: "T5S630 PR222DS/P-LSI R630 FF 3P",
    price: "10044.61",
  },
  {
    model: "T5S630 PR222DS/P-LSI R630 PMP 3P",
    price: "11145.41",
  },
  {
    model: "T5N400 PR221DS-LSI R320 FF 3P",
    price: "4224.97",
  },
  {
    model: "T5H400 PR222DS/P-LSI R400 FF 3P",
    price: "7582.10",
  },
  {
    model: "T5S630 PR221DS-I R630 WMP 3P",
    price: "9343.36",
  },
  {
    model: "T5N400 PR221DS-LSI R400 FF 4P",
    price: "5690.35",
  },
  {
    model: "T5H400 TMA400/2000-4000 FF 4P N=100%",
    price: "6317.78",
  },
  {
    model: "T5N630 PR221DS-LSI R630 FF 4P",
    price: "9717.26",
  },
  {
    model: "T5N630 PR222DS/P-LSIG R630 FF 3P",
    price: "10317.20",
  },
  {
    model: "T5L630 PR221DS-I R630 FF 3P",
    price: "11739.48",
  },
  {
    model: "T5N400 PR221DS-LSI R400 FF 3P",
    price: "4224.97",
  },
  {
    model: "T5S400 TMA400/2000-4000 PMP 3P",
    price: "4800.48",
  },
  {
    model: "T5S400 PR222DS/P-LSI R400 FF 3P",
    price: "6585.01",
  },
  {
    model: "T5N400 PR221DS-LSI R320 FF 4P",
    price: "5690.35",
  },
  {
    model: "T5L400 TMA400/2000-4000 FF 3P",
    price: "7025.54",
  },
  {
    model: "T5L400 PR221DS-LSI R320 PMP 3P",
    price: "8235.60",
  },
  {
    model: "T5L400 PR221DS-LSI R400 PMP 3P",
    price: "8235.60",
  },
  {
    model: "T5H400 TMA400/2000-4000 FF 3P",
    price: "4642.93",
  },
  {
    model: "T5N630 PR221DS-I R630 FF 3P",
    price: "6720.10",
  },
  {
    model: "T5H630 TMA500/2500-5000 FF 3P",
    price: "7889.62",
  },
  {
    model: "T5S630 PR221DS-LSI R630 PMP 4P",
    price: "11339.96",
  },
  {
    model: "T5N400 PR221DS-LSI R400 PMP 3P",
    price: "4916.92",
  },
  {
    model: "T5S400 PR222DS/P-LSI R320 FF 3P",
    price: "6585.01",
  },
  {
    model: "T5S400 PR222DS/P-LSI R400 PMP 3P",
    price: "7316.53",
  },
  {
    model: "T5V400 PR221DS-LSI R400 FF 3P",
    price: "8347.45",
  },
  {
    model: "T5S630 PR221DS-LSI R630 WMP 3P",
    price: "9399.29",
  },
  {
    model: "T5H400 PR222DS/P-LSI R320 FF 3P",
    price: "7582.10",
  },
  {
    model: "T5S630 TMA500/2500-5000 PMP 3P",
    price: "8096.87",
  },
  {
    model: "T5H400 PR222DS/P-LSIG R400 FF 3P",
    price: "8578.05",
  },
  {
    model: "T5H630 PR222DS/P-LSI R630 FF 3P",
    price: "11048.75",
  },
  {
    model: "T5S630 PR221DS-I R630 FF 4P",
    price: "11102.31",
  },
  {
    model: "T5H400 TMA320/1600-3200 PMP 3P",
    price: "5405.19",
  },
  {
    model: "T5H400 PR221DS-LSI R320 PMP 3P",
    price: "5692.71",
  },
  {
    model: "T5H400 PR222DS/P-LSI R400 PMP 3P",
    price: "8314.79",
  },
  {
    model: "T5N400 TMA400/2000-4000 PMP 3P",
    price: "4680.46",
  },
  {
    model: "T5H400 PR221DS-I R320 FF 3P",
    price: "4743.34",
  },
  {
    model: "T5V400 PR221DS-I R400 FF 3P",
    price: "7505.22",
  },
  {
    model: "T5H630 PR221DS-LSI R630 FF 3P",
    price: "8427.82",
  },
  {
    model: "T5L630 PR222DS/P-LSIG R630 FF 3P",
    price: "17753.66",
  },
  {
    model: "T4H250 TMA250/1250-2500 PMP 3P",
    price: "4494.83",
  },
  {
    model: "T5N400 TMA320/1600-3200 WMP 4P N=100%",
    price: "7083.73",
  },
  {
    model: "T5H400 PR221DS-LSI R400 PMP 4P",
    price: "7700.92",
  },
  {
    model: "T5N630 TMA500/2500-5000 FF 4P N=100%",
    price: "9100.34",
  },
  {
    model: "T5H630 PR221DS-LSI R630 WMP 3P",
    price: "10401.06",
  },
  {
    model: "T5H630 TMA500/2500-5000 FF 4P N=100%",
    price: "10738.82",
  },
  {
    model: "T5L630 PR221DS-LSI R630 FF 3P",
    price: "12849.60",
  },
  {
    model: "T5N400 TMA400/2000-4000 WMP 3P",
    price: "5509.43",
  },
  {
    model: "T5N400 PR222DS/P-LSIG R400 FF 3P",
    price: "7285.08",
  },
  {
    model: "T5S400 TMA320/1600-3200 FF 3P",
    price: "4158.13",
  },
  {
    model: "T6S800 PR221DS-LSI R800 FF 4P",
    price: "14333.63",
  },
  {
    model: "T6H800 PR222DS/P-LSI R800 FF 3P",
    price: "15596.32",
  },
  {
    model: "T6N800 PR221DS-LSI R800 FF 3P",
    price: "10354.48",
  },
  {
    model: "T6H800 PR221DS-LSI R800 WMP 3P",
    price: "15665.06",
  },
  {
    model: "T7S1000M PR231/P-LSI R1000 FF 4P",
    price: "29509.40",
  },
  {
    model: "T7S1600M PR231/P-LSI R1600 FF 3P",
    price: "34034.88",
  },
  {
    model: "T7S1600 PR232/P-LSI R1600 FF 3P",
    price: "30103.44",
  },
  {
    model: "T7H1000M PR231/P-LSI R1000 FF 3P",
    price: "26661.32",
  },
  {
    model: "T5H400 TMA320/1600-3200 FF 3P",
    price: "4642.93",
  },
  {
    model: "T5H400 PR221DS-LSI R320 FF 3P",
    price: "4958.82",
  },
  {
    model: "T5H400 PR221DS-LSI R400 WMP 3P",
    price: "6489.48",
  },
  {
    model: "T5N400 TMA320/1600-3200 FF 4P N=100%",
    price: "5325.19",
  },
  {
    model: "T5N630 TMA500/2500-5000 FF 3P",
    price: "6877.68",
  },
  {
    model: "T5S630 PR221DS-LSI R630 PMP 3P",
    price: "8525.64",
  },
  {
    model: "T5H400 PR221DS-I R400 FF 3P",
    price: "4743.34",
  },
  {
    model: "T5H400 PR222DS/P-LSIG R400 PMP 3P",
    price: "9310.74",
  },
  {
    model: "T5H630 PR221DS-I R630 PMP 3P",
    price: "9539.07",
  },
  {
    model: "T5N400 PR222DS/P-LSI R400 FF 3P",
    price: "6424.27",
  },
  {
    model: "T5N630 PR222DS/P-LSIG R630 FF 4P",
    price: "14093.67",
  },
  {
    model: "T5S400 PR221DS-I R320 FF 3P",
    price: "4042.09",
  },
  {
    model: "T5H400 PR221DS-I R400 PMP 3P",
    price: "5476.04",
  },
  {
    model: "T5H630 PR222DS/P-LSI R630 PMP 3P",
    price: "12150.67",
  },
  {
    model: "T5H630 PR221DS-LSI R630 PMP 3P",
    price: "9526.23",
  },
  {
    model: "T4V250 PR222DS/P-LSI R250 FF 3P 1150Vac",
    price: "9461.83",
  },
];
export default tmax;
