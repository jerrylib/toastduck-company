import { diffAndMergeLists } from "./../utils/difference";
import TargetList from "./a-target";

import Tmax from "./tmax";
import TmaxXT from "./tmax-xt";
import CVS from "./csv";
import Formula from "./formula";
import TmaxDC from "./tmax-dc";
import FormulaM from "./formula-m";
import LC1D from "./LC1D";
import threeTS from "./three-ts";
import threeRT20 from "./three-rt20";
import threeRT6 from "./three-rt6";
import DZ15 from "./dz15";
import DZ20 from "./dz20";
import NM1 from "./nm1";
import NXB63G from "./nxb-63g";
import NXMS from "./nxms";
import NXM from "./nxm";
import CDM1 from "./cdm1";
import CDM3S from "./cdm3s";
import CDM3LS from "./cdm3ls";
import CDM3E from "./cdm3e";
import s71200 from "./s7-1200";
import s71200G2 from "./s7-1200-g2";
import s71500 from "./s7-1500";
import plc1500 from "./plc-1500";
import s7200smart from "./s7-200-smart";
import s7300 from "./s7-300";
import s7400 from "./s7-400";
import acs880 from "./acs880";
import acs580 from "./acs580";
import acs550 from "./acs550";
import acs530 from "./acs530";
import acs510 from "./acs510";
import acs380 from "./acs380";
import acs180 from "./acs180";
import atv12 from "./atv12";
import atv320 from "./atv320";
import atv610 from "./atv610";
import atv212 from "./atv212";
import atv310a from "./atv310a";
import atv310e from "./atv310e";
import atv340 from "./atv340";
import atv630 from "./atv630";
import atv600 from "./atv600";
import ATV900 from "./atv900";
import ATV930 from "./atv930";
import MGM from "./mgm";
import MHM from "./mhm";
import MINASA6 from "./minis-a6";
import NXB63 from "./nxb-63";
import NB1_63 from "./nb1-63";
import NB1_63DC from "./nb1-63dc";
import NB7 from "./nb7";
import NXB125 from "./nxb-125";
import nb1_63h from "./nb1-63h";
import S200 from "./s200";
import SH200 from "./sh200";
import S200MDC from "./s200mdc";
import S200MUC from "./s200muc";
import S800 from "./s800";
import JZ7 from "./jz7";
import JZC1 from "./JZC1";
import JZC4s from "./JZC4s";

const obj = {
  JZ7,
  JZC1,
  JZC4s,
  S200,
  SH200,
  S800,
  "S200M DC": S200MDC,
  "S200M UC": S200MUC,
  "NXB-63": NXB63,
  "NB1-63": NB1_63,
  "NB1-63DC": NB1_63DC,
  "NXB-125": NXB125,
  "NB1-63H": nb1_63h,
  NB7,
  MGM,
  MHM,
  "MINAS A6": MINASA6,
  ATV310A: atv310a,
  ATV630: atv630,
  ATV310E: atv310e,
  ATV900,
  ATV930,
  ATV600: atv600,
  ATV12: atv12,
  ATV320: atv320,
  ATV340: atv340,
  ATV610: atv610,
  ATV212: atv212,
  ACS180: acs180,
  ACS380: acs380,
  ACS510: acs510,
  ACS530: acs530,
  ACS880: acs880,
  ACS580: acs580,
  ACS550: acs550,
  Tmax,
  "Tmax XT": TmaxXT,
  CVS,
  Formula,
  "Tmax DC": TmaxDC,
  "Formula M": FormulaM,
  LC1D,
  "3TS": threeTS,
  "3RT20": threeRT20,
  "3RT6": threeRT6,
  DZ15,
  DZ20,
  NM1,
  "NXB-63G": NXB63G,
  NXMS,
  NXM,
  CDM1,
  CDM3S,
  CDM3LS,
  CDM3E,
  "S7-1200": s71200,
  "S7-1200 G2": s71200G2,
  "S7-1500": s71500,
  "PLC-1500": plc1500,
  "S7-200 SMART": s7200smart,
  "S7-300": s7300,
  "S7-400": s7400,
};

// 统计总共多少产品条目
// console.log(
//   "items=",
//   Object.values(obj).reduce((rs, items) => rs + items.length, 0),
// );

// 统计新旧列表差异
// console.log(
//   "diff:",
//   diffAndMergeLists({
//     oldList: TmaxXT,
//     newList: TargetList,
//     idKey: "orderId",
//     compareFields: ["model", "price"],
//     overwriteFields: ["url", "remark"],
//     preserveFields: ["showPrice"],
//   }),
// );
export default obj;
