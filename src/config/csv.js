const csv = [
  {
    model: "CVS100F TM50D 3P3D",
    price: "780.02",
  },
  {
    model: "CVS100F TM100D 3P3D",
    price: "780.02",
  },
  {
    model: "CVS160F TM160D 3P3D",
    price: "1024.49",
  },
  {
    model: "CVS250F TM250D 3P3D",
    price: "1843.78",
  },
  {
    model: "CVS100N TM100D 3P3D",
    price: "897.86",
  },
  {
    model: "CVS100F TM80D 3P3D",
    price: "780.02",
  },
  {
    model: "CVS100F TM63D 3P3D",
    price: "780.02",
  },
  {
    model: "CVS160F TM125D 3P3D",
    price: "1024.49",
  },
  {
    model: "CVS100F TM100D 4P3D",
    price: "1084.14",
  },
  {
    model: "CVS160N TM160D 3P3D",
    price: "1089.98",
  },
  {
    model: "CVS250F TM200D 3P3D",
    price: "1843.78",
  },
  {
    model: "CVS100F TM25D 4P3D",
    price: "1084.14",
  },
  {
    model: "CVS400F TM400D 3P3D",
    price: "3156.72",
  },
  {
    model: "CVS250N TM250D 3P3D",
    price: "2174.49",
  },
  {
    model: "CVS250N TM200D 3P3D",
    price: "2174.49",
  },
  {
    model: "CVS400F TM320D 3P3D",
    price: "3156.72",
  },
  {
    model: "CVS100F TM25D 3P3D",
    price: "780.02",
  },
  {
    model: "CVS100F TM40D 3P3D",
    price: "780.02",
  },
  {
    model: "CVS250F TM200D 4P3D",
    price: "2628.17",
  },
  {
    model: "CVS100BS TM100 3P3D",
    price: "640.29",
  },
  {
    model: "CVS100N TM63D 3P3D",
    price: "897.86",
  },
  {
    model: "CVS100F TM16D 3P3D",
    price: "780.02",
  },
  {
    model: "CVS100F TM32D 3P3D",
    price: "780.02",
  },
  {
    model: "CVS100F TM50D 4P3D",
    price: "1084.14",
  },
  {
    model: "CVS100F TM32D 4P3D",
    price: "1084.14",
  },
  {
    model: "CVS100F TM63D 4P3D",
    price: "1084.14",
  },
  {
    model: "CVS100N TM32D 3P3D",
    price: "897.86",
  },
  {
    model: "CVS160B TM125D 3P3D",
    price: "907.37",
  },
  {
    model: "CVS100B TM100D 3P3D",
    price: "725.41",
  },
  {
    model: "CVS100BS TM80 3P3D",
    price: "640.29",
  },
  {
    model: "CVS400F MA320 3P3D",
    price: "3463.19",
  },
  {
    model: "CVS400F ETS 2.3 400A 3P3D",
    price: "3417.61",
  },
  {
    model: "CVS630F ETS 2.3 630A 3P3D",
    price: "5989.15",
  },
  {
    model: "CVS160F TM160D 4P3D",
    price: "1322.79",
  },
  {
    model: "CVS160F TM125D 4P3D",
    price: "1322.79",
  },
  {
    model: "CVS160N TM125D 3P3D",
    price: "1089.98",
  },
  {
    model: "CVS400N TM400D 3P3D",
    price: "3678.26",
  },
  {
    model: "CVS100N TM40D 3P3D",
    price: "897.86",
  },
  {
    model: "CVS250N MA220 3P3D",
    price: "2327.31",
  },
  {
    model: "CVS160F MA150 3P3D",
    price: "1189.88",
  },
  {
    model: "CVS100F MA50 3P3D",
    price: "836.78",
  },
  {
    model: "CVS250F MA220 3P3D",
    price: "2024.49",
  },
  {
    model: "CVS160B TM160D 3P3D",
    price: "952.77",
  },
  {
    model: "CVS250B TM200D 3P3D",
    price: "1659.41",
  },
  {
    model: "CVS630H TM600D 3P3D",
    price: "6613.37",
  },
  {
    model: "CVS100B TM80D 3P3D",
    price: "725.41",
  },
  {
    model: "CVS250B TM250D 3P3D",
    price: "1659.41",
  },
  {
    model: "CVS100F TM40D 3P3D P",
    price: "1530.46",
  },
  {
    model: "CVS250H TM200D 3P3D",
    price: "2510.84",
  },
  {
    model: "CVS400N TM320D 3P3D",
    price: "3678.26",
  },
  {
    model: "CVS250N TM250D 4P3D",
    price: "2978.14",
  },
  {
    model: "CVS400H TM320D 3P3D",
    price: "3972.66",
  },
  {
    model: "CVS400F ETS 2.3 400A 4P4D",
    price: "4729.62",
  },
  {
    model: "CVS100H TM32D 3P3D P",
    price: "2454.44",
  },
  {
    model: "CVS100N MA25 3P3D",
    price: "978.49",
  },
  {
    model: "CVS160H MA150 3P3D P",
    price: "3110.35",
  },
  {
    model: "CVS400N TM400D 3P3D P",
    price: "5753.10",
  },
  {
    model: "CVS160H TM100D 4P3D",
    price: "2402.23",
  },
  {
    model: "CVS100N TM40D 3P3D P",
    price: "1646.04",
  },
  {
    model: "CVS630H ETS 2.3 630A 4P4D",
    price: "9394.36",
  },
  {
    model: "CVS100B TM100D 3P3D P",
    price: "1300.90",
  },
  {
    model: "CVS100H TM25D 4P3D",
    price: "2020.97",
  },
  {
    model: "CVS100H TM16D 3P3D P",
    price: "2454.44",
  },
  {
    model: "CVS100B TM16D 3P3D P",
    price: "1300.90",
  },
  {
    model: "CVS630H TM600D 4P3D",
    price: "8454.92",
  },
  {
    model: "CVS100B TM32D 4P3D",
    price: "877.63",
  },
  {
    model: "CVS100N TM50D 3P3D P",
    price: "1646.04",
  },
  {
    model: "CVS250F TM200D 4P3D P",
    price: "3840.37",
  },
  {
    model: "CVS100E TM30D 3P3D P",
    price: "1295.79",
  },
  {
    model: "CVS100H TM100D 3P3D P",
    price: "2454.44",
  },
  {
    model: "CVS100N TM25D 4P3D",
    price: "1180.18",
  },
  {
    model: "CVS100H TM80D 3P3D",
    price: "1403.20",
  },
  {
    model: "CVS630H TM600D 3P3D P",
    price: "8916.86",
  },
  {
    model: "CVS100N TM80D 3P3D",
    price: "897.86",
  },
  {
    model: "CVS630H MA500 3P3D",
    price: "5345.44",
  },
  {
    model: "CVS160F TM100D 3P3D P",
    price: "1812.10",
  },
  {
    model: "CVS630N TM500D 3P3D",
    price: "5535.94",
  },
  {
    model: "CVS160N TM100D 3P3D",
    price: "1089.98",
  },
  {
    model: "CVS100B TM16D 3P3D",
    price: "725.41",
  },
  {
    model: "CVS100B TM100D 4P3D",
    price: "877.63",
  },
  {
    model: "CVS100B TM100D 4P3D P",
    price: "1645.12",
  },
  {
    model: "CVS100H MA6,3 3P3D",
    price: "1142.19",
  },
  {
    model: "CVS100E TM50D 3P3D",
    price: "640.29",
  },
  {
    model: "CVS160H TM100D 3P3D",
    price: "1645.46",
  },
  {
    model: "CVS400H TM320D 4P3D",
    price: "5557.41",
  },
  {
    model: "CVS100N TM80D 3P3D P",
    price: "1646.04",
  },
  {
    model: "CVS630N TM500D 4P3D",
    price: "7533.92",
  },
  {
    model: "CVS160N MA100 3P3D P",
    price: "2505.59",
  },
  {
    model: "CVS630F TM600D 3P3D P",
    price: "7863.39",
  },
  {
    model: "CVS100E TM30D 4P3D",
    price: "845.40",
  },
  {
    model: "CVS160B TM125D 4P3D",
    price: "1171.60",
  },
  {
    model: "CVS100H MA50 3P3D",
    price: "1228.45",
  },
  {
    model: "CVS100N MA50 3P3D P",
    price: "2126.76",
  },
  {
    model: "CVS160F MA100 3P3D P",
    price: "2453.37",
  },
  {
    model: "CVS100B TM50D 4P3D",
    price: "877.63",
  },
  {
    model: "CVS100E TM40D 3P3D",
    price: "640.29",
  },
  {
    model: "CVS250N TM250D 3P3D P",
    price: "2965.74",
  },
  {
    model: "CVS100H MA12,5 3P3D",
    price: "1131.12",
  },
  {
    model: "CVS630F ETS 2.3 630A 4P4D P",
    price: "10645.99",
  },
  {
    model: "CVS100E TM75D 3P3D",
    price: "640.29",
  },
  {
    model: "CVS100B TM40D 3P3D",
    price: "725.41",
  },
  {
    model: "LV510151",
    price: "687.14",
  },
  {
    model: "CVS100N MA25 3P3D P",
    price: "2081.04",
  },
  {
    model: "CVS100B TM32D 3P3D P",
    price: "1300.90",
  },
  {
    model: "CVS160N TM125D 3P3D P",
    price: "1877.47",
  },
  {
    model: "CVS630H ETS 2.3 630A 3P3D",
    price: "7085.76",
  },
  {
    model: "CVS100F TM16D 3P3D P",
    price: "1530.46",
  },
  {
    model: "CVS160F TM160D 4P3D P",
    price: "2370.77",
  },
  {
    model: "CVS160H TM125D 4P3D",
    price: "2402.23",
  },
  {
    model: "CVS630N TM600D 3P3D P",
    price: "8184.78",
  },
  {
    model: "CVS630N ETS 2.3 630A 4P4D P",
    price: "11198.80",
  },
  {
    model: "CVS100F MA50 3P3D P",
    price: "1983.06",
  },
  {
    model: "CVS100H TM32D 4P3D",
    price: "2020.97",
  },
  {
    model: "CVS100N MA2,5 3P3D",
    price: "978.49",
  },
  {
    model: "CVS400N TM400D 4P3D",
    price: "5093.73",
  },
  {
    model: "CVS160F TM100D 4P3D",
    price: "1322.79",
  },
  {
    model: "CVS630F TM500D 4P3D P",
    price: "10619.38",
  },
  {
    model: "CVS160F TM100D 3P3D",
    price: "1024.49",
  },
  {
    model: "CVS100F MA25 3P3D P",
    price: "1943.86",
  },
  {
    model: "CVS100F TM100D 3P3D P",
    price: "1530.46",
  },
  {
    model: "CVS160H TM160D 3P3D",
    price: "1645.46",
  },
  {
    model: "CVS630F TM600D 4P3D",
    price: "7372.29",
  },
  {
    model: "CVS250B TM200D 4P3D",
    price: "2365.34",
  },
  {
    model: "CVS400H ETS 2.3 400A 3P3D P",
    price: "6145.86",
  },
  {
    model: "CVS400H TM400D 3P3D",
    price: "3972.66",
  },
  {
    model: "CVS100H TM63D 3P3D",
    price: "1403.20",
  },
  {
    model: "CVS400N MA320 3P3D",
    price: "3531.91",
  },
  {
    model: "CVS160N MA100 3P3D",
    price: "1399.91",
  },
  {
    model: "CVS100H TM80D 4P3D",
    price: "2020.97",
  },
  {
    model: "CVS100N TM32D 4P3D",
    price: "1180.18",
  },
  {
    model: "CVS250H TM250D 4P3D",
    price: "3582.54",
  },
  {
    model: "CVS100N TM63D 3P3D P",
    price: "1646.04",
  },
  {
    model: "CVS100N MA50 3P3D",
    price: "978.49",
  },
  {
    model: "CVS630N ETS 2.3 630A 4P4D",
    price: "8609.65",
  },
  {
    model: "CVS160H MA100 3P3D",
    price: "1567.36",
  },
  {
    model: "CVS100N TM80D 4P3D",
    price: "1180.18",
  },
  {
    model: "CVS100H TM25D 3P3D",
    price: "1403.20",
  },
  {
    model: "CVS100B TM25D 3P3D P",
    price: "1300.90",
  },
  {
    model: "CVS250H TM250D 3P3D P",
    price: "3327.94",
  },
  {
    model: "CVS100B TM16D 4P3D",
    price: "877.63",
  },
  {
    model: "CVS250B TM200D 3P3D P",
    price: "2425.58",
  },
  {
    model: "CVS250F MA220 3P3D P",
    price: "2806.77",
  },
  {
    model: "CVS100F MA25 3P3D",
    price: "836.78",
  },
  {
    model: "CVS100N TM32D 3P3D P",
    price: "1646.04",
  },
  {
    model: "CVS100E TM20D 4P3D",
    price: "845.40",
  },
  {
    model: "CVS400N ETS 2.3 400A 3P3D",
    price: "3871.83",
  },
  {
    model: "CVS630H TM500D 3P3D",
    price: "6298.45",
  },
  {
    model: "CVS100E TM80D 4P3D",
    price: "845.40",
  },
  {
    model: "CVS160N TM100D 4P3D",
    price: "1478.47",
  },
  {
    model: "CVS100B TM80D 3P3D P",
    price: "1300.90",
  },
  {
    model: "CVS630F ETS 2.3 630A 4P4D",
    price: "8172.17",
  },
  {
    model: "CVS400N TM320D 3P3D P",
    price: "5753.10",
  },
  {
    model: "CVS100B TM63D 3P3D",
    price: "725.41",
  },
  {
    model: "CVS400F ETS 2.3 400A 3P3D P",
    price: "5418.06",
  },
  {
    model: "CVS100E TM15D 4P3D",
    price: "845.40",
  },
  {
    model: "CVS250F TM250D 4P3D",
    price: "2628.17",
  },
  {
    model: "CVS250H MA220 3P3D",
    price: "2587.46",
  },
  {
    model: "CVS400F TM320D 3P3D P",
    price: "5464.54",
  },
  {
    model: "CVS400F MA320 3P3D P",
    price: "5240.21",
  },
  {
    model: "CVS100N TM25D 3P3D",
    price: "897.86",
  },
  {
    model: "CVS250F TM250D 4P3D P",
    price: "3840.37",
  },
  {
    model: "CVS100N TM40D 4P3D P",
    price: "2041.71",
  },
  {
    model: "CVS100E TM50D 4P3D",
    price: "845.40",
  },
  {
    model: "CVS100B TM40D 4P3D",
    price: "877.63",
  },
  {
    model: "CVS100E TM20D 3P3D",
    price: "640.29",
  },
  {
    model: "CVS630F MA500 3P3D",
    price: "5046.75",
  },
  {
    model: "CVS250N TM200D 3P3D P",
    price: "2965.74",
  },
  {
    model: "CVS100E TM100D 3P3D P",
    price: "1295.79",
  },
  {
    model: "CVS100N MA12,5 3P3D P",
    price: "2081.04",
  },
  {
    model: "CVS630N MA500 3P3D P",
    price: "6643.26",
  },
  {
    model: "CVS100B TM50D 3P3D",
    price: "725.41",
  },
  {
    model: "CVS100H MA100 3P3D",
    price: "1228.45",
  },
  {
    model: "CVS100E TM25D 4P3D",
    price: "845.40",
  },
  {
    model: "CVS160B TM160D 4P3D",
    price: "1230.20",
  },
  {
    model: "CVS100N MA100 3P3D P",
    price: "2126.76",
  },
  {
    model: "CVS630F TM500D 4P3D",
    price: "7021.22",
  },
  {
    model: "CVS250H TM250D 3P3D",
    price: "2510.84",
  },
  {
    model: "CVS250N MA220 3P3D P",
    price: "3156.49",
  },
  {
    model: "CVS100H TM63D 4P3D",
    price: "2020.97",
  },
  {
    model: "CVS100F TM80D 3P3D P",
    price: "1530.46",
  },

  {
    model: "CVS400F TM400D 4P3D",
    price: "4742.77",
  },
  {
    model: "CVS400H MA320 3P3D P",
    price: "5514.97",
  },
  {
    model: "CVS100H TM32D 3P3D",
    price: "1403.20",
  },
  {
    model: "CVS100F MA12,5 3P3D P",
    price: "1943.86",
  },
  {
    model: "CVS100F MA100 3P3D P",
    price: "1983.06",
  },
  {
    model: "CVS100N TM63D 4P3D",
    price: "1180.18",
  },
  {
    model: "CVS100F MA2,5 3P3D",
    price: "836.78",
  },
  {
    model: "CVS100F TM25D 3P3D P",
    price: "1530.46",
  },
  {
    model: "CVS630F TM600D 4P3D P",
    price: "10619.38",
  },
  {
    model: "CVS100E TM75D 4P3D",
    price: "845.40",
  },
  {
    model: "CVS250B TM250D 3P3D P",
    price: "2425.58",
  },
  {
    model: "CVS160N TM160D 3P3D P",
    price: "1877.47",
  },
  {
    model: "CVS630H TM500D 3P3D P",
    price: "8916.86",
  },
  {
    model: "CVS160N TM160D 4P3D",
    price: "1478.47",
  },
  {
    model: "CVS100F TM80D 4P3D",
    price: "1084.14",
  },
  {
    model: "CVS100B TM63D 4P3D",
    price: "877.63",
  },
  {
    model: "CVS400H ETS 2.3 400A 3P3D",
    price: "4148.81",
  },
  {
    model: "CVS630N ETS 2.3 630A 3P3D P",
    price: "8205.29",
  },
  {
    model: "CVS100E TM15D 3P3D",
    price: "640.29",
  },
  {
    model: "CVS160N MA150 3P3D P",
    price: "2766.88",
  },
  {
    model: "CVS630N TM600D 4P3D",
    price: "7910.64",
  },
  {
    model: "CVS100N TM100D 3P3D P",
    price: "1646.04",
  },
  {
    model: "CVS100B TM40D 3P3D P",
    price: "1300.90",
  },
  {
    model: "CVS100B TM63D 3P3D P",
    price: "1300.90",
  },
  {
    model: "CVS100N TM50D 3P3D",
    price: "897.86",
  },
  {
    model: "CVS630F TM500D 3P3D",
    price: "5030.90",
  },
  {
    model: "CVS400N ETS 2.3 400A 3P3D P",
    price: "5705.48",
  },
  {
    model: "CVS250N TM200D 4P3D",
    price: "2978.14",
  },
  {
    model: "CVS100B TM32D 3P3D",
    price: "725.41",
  },
  {
    model: "CVS100H MA25 3P3D",
    price: "1142.19",
  },
  {
    model: "CVS100N TM16D 3P3D P",
    price: "1646.04",
  },
  {
    model: "CVS100B TM50D 3P3D P",
    price: "1300.90",
  },
  {
    model: "CVS400F TM400D 4P3D P",
    price: "7472.93",
  },
  {
    model: "CVS400N TM320D 4P3D",
    price: "5093.73",
  },
  {
    model: "CVS100H TM40D 4P3D",
    price: "2020.97",
  },
  {
    model: "CVS160H TM160D 4P3D",
    price: "2522.34",
  },
  {
    model: "CVS400N MA320 3P3D P",
    price: "5308.92",
  },
  {
    model: "CVS250H TM200D 4P3D",
    price: "3582.54",
  },
  {
    model: "CVS100N TM40D 4P3D",
    price: "1180.18",
  },
  {
    model: "CVS100N MA6,3 3P3D",
    price: "978.49",
  },
  {
    model: "CVS160F TM125D 3P3D P",
    price: "1812.10",
  },
  {
    model: "CVS100F TM16D 4P3D",
    price: "1084.14",
  },
  {
    model: "CVS160N MA150 3P3D",
    price: "1469.89",
  },
  {
    model: "CVS100H TM50D 3P3D",
    price: "1403.20",
  },
  {
    model: "CVS100N TM25D 4P3D P",
    price: "2041.71",
  },
  {
    model: "CVS160F TM160D 3P3D P",
    price: "1812.10",
  },
  {
    model: "CVS100H TM16D 4P3D",
    price: "2020.97",
  },
  {
    model: "CVS160N TM160D 4P3D P",
    price: "2494.31",
  },
  {
    model: "CVS160B TM125D 3P3D P",
    price: "1652.98",
  },
  {
    model: "CVS630F MA500 3P3D P",
    price: "6569.92",
  },
  {
    model: "CVS630F ETS 2.3 630A 3P3D P",
    price: "7883.13",
  },
  {
    model: "CVS250B TM250D 4P3D",
    price: "2365.34",
  },
  {
    model: "CVS400H MA320 3P3D",
    price: "3698.59",
  },
  {
    model: "CVS100N MA12,5 3P3D",
    price: "978.49",
  },
  {
    model: "CVS100F TM40D 4P3D",
    price: "1084.14",
  },
  {
    model: "CVS100N TM16D 4P3D",
    price: "1180.18",
  },
  {
    model: "CVS100H TM100D 3P3D",
    price: "1403.20",
  },
  {
    model: "CVS630F TM500D 3P3D P",
    price: "7863.39",
  },
  {
    model: "CVS630H TM500D 4P3D",
    price: "8454.92",
  },
  {
    model: "CVS100H TM50D 4P3D",
    price: "2020.97",
  },

  {
    model: "CVS400F TM400D 3P3D P",
    price: "5464.54",
  },
  {
    model: "CVS100F MA100 3P3D",
    price: "836.78",
  },
  {
    model: "CVS160H TM160D 3P3D P",
    price: "2802.31",
  },
  {
    model: "CVS160B TM100D 3P3D",
    price: "907.37",
  },
  {
    model: "CVS400H ETS 2.3 400A 4P4D",
    price: "5961.52",
  },
  {
    model: "CVS630H ETS 2.3 630A 3P3D P",
    price: "9157.95",
  },
  {
    model: "CVS100F TM50D 3P3D P",
    price: "1530.46",
  },
  {
    model: "CVS250F TM250D 3P3D P",
    price: "2695.10",
  },
  {
    model: "CVS100B TM80D 4P3D",
    price: "877.63",
  },
  {
    model: "CVS160H TM125D 3P3D",
    price: "1645.46",
  },
  {
    model: "CVS100E TM60D 3P3D",
    price: "640.29",
  },
  {
    model: "CVS160N TM100D 3P3D P",
    price: "1877.47",
  },
  {
    model: "CVS100E TM25D 3P3D",
    price: "640.29",
  },
  {
    model: "CVS100H MA2,5 3P3D",
    price: "1142.19",
  },
  {
    model: "CVS100B TM25D 3P3D",
    price: "725.41",
  },
  {
    model: "CVS630N TM500D 3P3D P",
    price: "8184.78",
  },
  {
    model: "CVS400H TM400D 4P3D",
    price: "5557.41",
  },
  {
    model: "CVS630F TM600D 3P3D",
    price: "5030.90",
  },
  {
    model: "CVS100N TM100D 4P3D P",
    price: "2041.71",
  },
  {
    model: "CVS160F MA150 3P3D P",
    price: "2527.84",
  },
  {
    model: "CVS100F MA6,3 3P3D",
    price: "836.78",
  },
  {
    model: "CVS100F TM100D 4P3D P",
    price: "1935.46",
  },
  {
    model: "CVS400F TM320D 4P3D",
    price: "4742.77",
  },
  {
    model: "CVS100N TM25D 3P3D P",
    price: "1646.04",
  },
  {
    model: "CVS100H TM40D 3P3D",
    price: "1403.20",
  },
  {
    model: "CVS400F ETS 2.3 400A 4P4D P",
    price: "7097.34",
  },
  {
    model: "CVS100N TM50D 4P3D",
    price: "1180.18",
  },
  {
    model: "CVS100E TM60D 3P3D P",
    price: "1295.79",
  },
  {
    model: "CVS100N MA100 3P3D",
    price: "978.49",
  },
  {
    model: "CVS630N ETS 2.3 630A 3P3D",
    price: "6761.34",
  },
  {
    model: "CVS100E TM60D 4P3D",
    price: "845.40",
  },
  {
    model: "CVS100H TM100D 4P3D",
    price: "2020.97",
  },
  {
    model: "CVS100BS TM100 4P3D",
    price: "845.40",
  },
  {
    model: "CVS100N TM100D 4P3D",
    price: "1180.18",
  },
  {
    model: "CVS100F MA12,5 3P3D",
    price: "878.63",
  },
  {
    model: "CVS100H TM16D 3P3D",
    price: "1403.20",
  },
  {
    model: "CVS100N MA6,3 3P3D P",
    price: "2081.04",
  },
  {
    model: "CVS160F MA100 3P3D",
    price: "1189.88",
  },
  {
    model: "CVS160B TM160D 3P3D P",
    price: "1652.98",
  },
  {
    model: "CVS630N TM600D 3P3D",
    price: "5812.74",
  },
  {
    model: "CVS100E TM30D 3P3D",
    price: "640.29",
  },
  {
    model: "CVS100N TM16D 3P3D",
    price: "897.86",
  },
  {
    model: "CVS250F TM200D 3P3D P",
    price: "2695.10",
  },
  {
    model: "CVS100F TM32D 3P3D P",
    price: "1530.46",
  },
  {
    model: "CVS160H MA150 3P3D",
    price: "1645.74",
  },
  {
    model: "CVS630N MA500 3P3D",
    price: "5120.10",
  },
  {
    model: "CVS400N ETS 2.3 400A 4P4D",
    price: "5079.64",
  },
  {
    model: "CVS160N TM125D 4P3D",
    price: "1478.47",
  },
  {
    model: "CVS100B TM25D 4P3D",
    price: "877.63",
  },
  {
    model: "CVS100F TM63D 3P3D P",
    price: "1530.46",
  },
  {
    model: "CVS160B TM160D 4P3D P",
    price: "1851.72",
  },
  {
    model: "CVS400H TM400D 3P3D P",
    price: "6130.49",
  },
  {
    model: "CVS160B TM100D 4P3D",
    price: "1171.60",
  },
  {
    model: "CVS100F MA6,3 3P3D P",
    price: "1943.86",
  },
  {
    model: "CVS100E TM40D 4P3D",
    price: "845.40",
  },
  {
    model: "LV563317",
    price: "5987.14",
  },
  {
    model: "LV530358",
    price: "975.74",
  },
];
export default csv;
