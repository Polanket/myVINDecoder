var WMItxt; // This will be the staging Code
var YEARtxt;
var insertVIN;
function submitVin() {
    insertVIN = prompt("Enter VIN Number", "17 Characters Long");
    vinWmiCode()
    vinYearCode()
    document.getElementById("WMI").innerHTML = WMItxt;
    document.getElementById("YEAR").innerHTML = YEARtxt;
}

function vinWmiCode() {
  if (insertVIN == null || insertVIN.length !== 17) {
      WMItxt = "VIN must be 17 characters long.";
  } else if (insertVIN.length === 17){
      countryCode = insertVIN.slice(0, 3)
  } if (vinWmi.hasOwnProperty(countryCode))  {
        WMItxt = vinWmi[countryCode]
  }
}

function vinYearCode() {
  yearCode = insertVIN.slice(9, 10)
  console.log(yearCode);
  if (vinYear.hasOwnProperty(yearCode))  {
        YEARtxt = vinYear[yearCode]
  }
}




vinWmi = { // Characters 1 to 3 of VIN number identify the maker
AAV:"Volkswagen South Africa",
AC5:"Hyundai South Africa",
ADD:"Hyundai South Africa",
AFA:"Ford South Africa",
AHT:"Toyota South Africa",
JA3:"Mitsubishi",
JA4:"Mitsubishi",
JA:"Isuzu",
JD:"Daihatsu",
JF:"Fuji Heavy Industries (Subaru)",
JH:"Honda",
JK:"Kawasaki (motorcycles)",
JL5:"Mitsubishi Fuso",
JMB:"Mitsubishi Motors",
JMY:"Mitsubishi Motors",
JMZ:"Mazda",
JN:"Nissan",
JS:"Suzuki",
JT:"Toyota",
JY:"Yamaha (motorcycles)",
KL:"Daewoo General Motors South Korea",
KM:"Hyundai",
KMY:"Daelim (motorcycles)",
KM1:"Hyosung (motorcycles)",
KN:"Kia",
KNM:"Renault Samsung",
KPA:"SsangYong",
KPT:"SsangYong",
LAE:"Jinan Qingqi Motorcycle",
LAN:"Changzhou Yamasaki Motorcycle",
LBB:"Zhejiang Qianjiang Motorcycle (Keeway/Generic)",
LBE:"Beijing Hyundai",
LBM:"Zongshen Piaggio",
LBP:"Chongqing Jainshe Yamaha (motorcycles)",
LB2:"Geely Motorcycles",
LCE:"Hangzhou Chunfeng Motorcycles (CFMOTO)",
LDC:"Dong Feng Peugeot Citroen (DPCA), China",
LDD:"Dandong Huanghai Automobile",
LDN:"SouEast Motor",
LDY:"Zhongtong Coach, China",
LET:"Jiangling-Isuzu Motors, China",
LE4:"Beijing Benz, China",
LFB:"FAW, China (busses)",
LFG:"Taizhou Chuanl Motorcycle Manufacturing",
LFP:"FAW, China (passenger vehicles)",
LFT:"FAW, China (trailers)",
LFV:"FAW-Volkswagen, China",
LFW:"FAW JieFang, China",
LFY:"Changshu Light Motorcycle Factory",
LGB:"Dong Feng (DFM), China",
LGH:"Qoros (formerly Dong Feng (DFM)), China",
LGX:"BYD Auto, China",
LHB:"Beijing Automotive Industry Holding",
LH1:"FAW-Haima, China",
LJC:"JAC, China",
LJ1:"JAC, China",
LKL:"Suzhou King Long, China",
LL6:"Hunan Changfeng Manufacture Joint-Stock",
LL8:"Linhai (ATV)",
LMC:"Suzuki Hong Kong (motorcycles)",
LPR:"Yamaha Hong Kong (motorcycles)",
LSG:"Shanghai General Motors, China",
LSJ:"MG Motor UK Limited - SAIC Motor, Shanghai, China",
LSV:"Shanghai Volkswagen, China",
LSY:"Brilliance Zhonghua",
LTV:"Toyota Tian Jin",
LUC:"Guangqi Honda, China",
LVS:"Ford Chang An",
LVV:"Chery, China",
LVZ:"Dong Feng Sokon Motor Company (DFSK)",
LZM:"MAN China",
LZE:"Isuzu Guangzhou, China",
LZG:"Shaanxi Automobile Group, China",
LZP:"Zhongshan Guochi Motorcycle (Baotian)",
LZY:"Yutong Zhengzhou, China",
LZZ:"Chongqing Shuangzing Mech & Elec (Howo)",
L4B:"Xingyue Group (motorcycles)",
L5C:"KangDi (ATV)",
L5K:"Zhejiang Yongkang Easy Vehicle",
L5N:"Zhejiang Taotao, China (ATV & motorcycles)",
L5Y:"Merato Motorcycle Taizhou Zhongneng",
L85:"Zhejiang Yongkang Huabao Electric Appliance",
L8X:"Zhejiang Summit Huawin Motorcycle",
MAB:"Mahindra & Mahindra",
MAC:"Mahindra & Mahindra",
MAJ:"Ford India",
MAK:"Honda Siel Cars India",
MAL:"Hyundai",
MAT:"Tata Motors",
MA1:"Mahindra & Mahindra",
MA3:"Suzuki India (Maruti)",
MA6:"GM India",
MA7:"Mitsubishi India (formerly Honda)",
MBH:"Suzuki India (Maruti)",
MBJ:"Toyota India",
MBR:"Mercedes-Benz India",
MB1:"Ashok Leyland",
MCA:"Fiat India",
MCB:"GM India",
MC2:"Volvo Eicher commercial vehicles limited.",
MDH:"Nissan India",
MD2:"Bajaj Auto",
MEE:"Renault India",
MEX:"Volkswagen India",
MHF:"Toyota Indonesia",
MHR:"Honda Indonesia",
MLC:"Suzuki Thailand",
MLH:"Honda Thailand",
MMB:"Mitsubishi Thailand",
MMC:"Mitsubishi Thailand",
MMM:"Chevrolet Thailand",
MMS:"Suzuki Thailand",
MMT:"Mitsubishi Thailand",
MM8:"Mazda Thailand",
MNB:"Ford Thailand",
MNT:"Nissan Thailand",
MPA:"Isuzu Thailand",
MP1:"Isuzu Thailand",
MRH:"Honda Thailand",
MR0:"Toyota Thailand",
NLA:"Honda Türkiye",
NLE:"Mercedes-Benz Türk Truck",
NLH:"Hyundai Assan",
NLT:"TEMSA",
NMB:"Mercedes-Benz Türk Buses",
NMC:"BMC",
NM0:"Ford Turkey",
NM4:"Tofaş Türk",
NMT:"Toyota Türkiye",
NNA:"Isuzu Turkey",
PE1:"Ford Phillipines",
PE3:"Mazda Phillipines",
PL1:"Proton, Malaysia",
PNA:"NAZA, Malaysia (Peugeot)",
RA1:"Steyr Trucks International FZE, UAE",
RFB:"Kymco, Taiwan",
RFG:"Sanyang SYM, Taiwan",
RFL:"Adly, Taiwan",
RFT:"CPI, Taiwan",
RF3:"Aeon Motor, Taiwan",
SAD:"Jaguar (F-Pace)",
SAL:"Land Rover",
SAJ:"Jaguar",
SAR:"Rover",
SB1:"Toyota UK",
SBM:"McLaren",
SCA:"Rolls Royce",
SCB:"Bentley",
SCC:"Lotus Cars",
SCE:"DeLorean Motor Cars N. Ireland (UK)",
SCF:"Aston",
SDB:"Peugeot UK (formerly Talbot)",
SED:"General Motors Luton Plant",
SEY:"LDV",
SFA:"Ford UK",
SFD:"Alexander Dennis UK",
SHH:"Honda UK",
SHS:"Honda UK",
SJN:"Nissan UK",
SKF:"Vauxhall",
SLP:"JCB Research UK",
SMT:"Triumph Motorcycles",
SUF:"Fiat Auto Poland",
SUL:"FSC (Poland)",
SUP:"FSO-Daewoo (Poland)",
SUU:"Solaris Bus & Coach (Poland)",
SWV:"TA-NO (Poland)",
TCC:"Micro Compact Car AG (smart 1998-1999)",
TDM:"QUANTYA Swiss Electric Movement (Switzerland)",
TK9:"SOR buses (Czech Republic)",
TMA:"Hyundai Motor Manufacturing Czech",
TMB:"Škoda (Czech Republic)",
TMK:"Karosa (Czech Republic)",
TMP:"Škoda trolleybuses (Czech Republic)",
TMT:"Tatra (Czech Republic)",
TM9:"Škoda trolleybuses (Czech Republic)",
TNE:"TAZ",
TN9:"Karosa (Czech Republic)",
TRA:"Ikarus Bus",
TRU:"Audi Hungary",
TSE:"Ikarus Egyedi Autobuszgyar, (Hungary)",
TSM:"Suzuki Hungary",
TW1:"Toyota Caetano Portugal",
TYA:"Mitsubishi Trucks Portugal",
TYB:"Mitsubishi Trucks Portugal",
UU1:"Renault Dacia, (Romania)",
UU3:"ARO",
UU6:"Daewoo Romania",
U5Y:"Kia Motors Slovakia",
U6Y:"Kia Motors Slovakia",
VAG:"Magna Steyr Puch",
VAN:"MAN Austria",
VBK:"KTM (Motorcycles)",
VF1:"Renault",
VF2:"Renault",
VF3:"Peugeot",
VF4:"Talbot",
VF6:"Renault (Trucks & Buses)",
VF7:"Citroën",
VF8:"Matra",
VF9:"Bugatti",
VG5:"MBK (motorcycles)",
VLU:"Scania France",
VN1:"SOVAB (France)",
VNE:"Irisbus (France)",
VNK:"Toyota France",
VNV:"Renault-Nissan",
VSA:"Mercedes-Benz Spain",
VSE:"Suzuki Spain (Santana Motors)",
VSK:"Nissan Spain",
VSS:"SEAT",
VSX:"Opel Spain",
VS6:"Ford Spain",
VS7:"Citroën Spain",
VS9:"Carrocerias Ayats (Spain)",
VTH:"Derbi (motorcycles)",
VTL:"Yamaha Spain (motorcycles)",
VTT:"Suzuki Spain (motorcycles)",
VV9:"TAURO Spain",
VWA:"Nissan Spain",
VWV:"Volkswagen Spain",
VX1:"Zastava / Yugo Serbia",
WAG:"Neoplan",
WAU:"Audi",
WA1:"Audi SUV",
WBA:"BMW",
WBS:"BMW M",
WBY:"BMW",
WDA:"Daimler",
WDB:"Mercedes-Benz",
WDC:"DaimlerChrysler",
WDD:"Mercedes-Benz",
WDF:"Mercedes-Benz (commercial vehicles)",
WEB:"Evobus GmbH (Mercedes-Bus)",
WJM:"Iveco Magirus",
WF0:"Ford Germany",
WKK:"Kässbohrer/Setra",
WMA:"MAN Germany",
WME:"smart",
WMW:"MINI",
WMX:"Mercedes-AMG",
WP0:"Porsche",
WP1:"Porsche SUV",
W0L:"Opel",
W0V:"Opel",
WUA:"quattro GmbH",
WVG:"Volkswagen MPV/SUV",
WVW:"Volkswagen",
WV1:"Volkswagen Commercial Vehicles",
WV2:"Volkswagen Bus/Van",
WV3:"Volkswagen Trucks",
XLB:"Volvo (NedCar)",
XLE:"Scania Netherlands",
XLR:"DAF (trucks)",
XL9:"Spyker",
XMC:"Mitsubishi (NedCar)",
XTA:"Lada/AvtoVAZ (Russia)",
XTC:"KAMAZ (Russia)",
XTH:"GAZ (Russia)",
XTT:"UAZ/Sollers (Russia)",
XTY:"LiAZ (Russia)",
XUF:"General Motors Russia",
XUU:"AvtoTor (Russia, General Motors SKD)",
XW8:"Volkswagen Group Russia",
XWB:"UZ-Daewoo (Uzbekistan)",
XWE:"AvtoTor (Russia, Hyundai-Kia SKD)",
X1M:"PAZ (Russia)",
X4X:"AvtoTor (Russia, BMW SKD)",
X7L:"Renault AvtoFramos (Russia)",
X7M:"Hyundai TagAZ (Russia)",
YBW:"Volkswagen Belgium",
YB1:"Volvo Trucks Belgium",
YCM:"Mazda Belgium",
YE2:"Van Hool (buses)",
YH2:"BRP Finland (Lynx snowmobiles)",
YK1:"Saab-Valmet Finland",
YS2:"Scania AB",
YS3:"Saab",
YS4:"Scania Bus",
YTN:"Saab NEVS",
YT9:"Koenigsegg",
YT9:"Carvia",
YU7:"Husaberg (motorcycles)",
YV1:"Volvo Cars",
YV4:"Volvo Cars",
YV2:"Volvo Trucks",
YV3:"Volvo Buses",
Y3M:"MAZ (Belarus)",
Y6D:"Zaporozhets/AvtoZAZ (Ukraine)",
ZAA:"Autobianchi",
ZAM:"Maserati",
ZAP:"Piaggio/Vespa/Gilera",
ZAR:"Alfa Romeo",
ZBN:"Benelli",
ZCG:"Cagiva SpA / MV Agusta",
ZCF:"Iveco",
ZDM:"Ducati Motor Holdings SpA",
ZDF:"Ferrari Dino",
ZD0:"Yamaha Italy",
ZD3:"Beta Motor",
ZD4:"Aprilia",
ZFA:"Fiat",
ZFC:"Fiat V.I.",
ZFF:"Ferrari",
ZGU:"Moto Guzzi",
ZHW:"Lamborghini",
ZJM:"Malaguti",
ZJN:"Innocenti",
ZKH:"Husqvarna Motorcycles Italy",
ZLA:"Lancia",
ZOM:"OM",
Z8M:"Marussia (Russia)"
}

vinYear = { // Model year is found in the 10th character
L: "1990",
M: "1991",
N: "1992",
P: "1993",
R: "1994",
S: "1995",
T: "1996",
V: "1997",
W: "1998",
X: "1999",
Y: "2000",
1: "2001",
2: "2002",
3: "2003",
4: "2004",
5: "2005",
6: "2006",
7: "2007",
8: "2008",
9: "2009",
A: "2010",
B: "2011",
C: "2012",
D: "2013",
E: "2014",
F: "2015",
G: "2016",
H: "2017",
J: "2018",
K: "2019"
}
