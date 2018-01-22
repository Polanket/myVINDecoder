var invalidVinTxt;
var Countrytxt;
var Manufacturertxt;
var Modeltxt;
var YEARtxt;
var vinCodeArray;

function  vinArray()  {
  vinTextBox  = prompt("Type VIN Number", "17 Characters Long");
  if (vinTextBox.length  === 17) {
    cleanVinTextBox = vinTextBox.toUpperCase();
    CodeArray  = cleanVinTextBox.split("");
    console.log(CodeArray);
    decodeVin();
  } else {
    invalidVinTxt = "Invalid VIN, Please Type Again"
    document.getElementById("invalidVinTxt").innerHTML = invalidVinTxt;
  }
}

function  decodeVin() {
    decodeCountry()
    decodeManufacturer()
    decodeModel()
    decodeYear()
    document.getElementById("Country").innerHTML = Countrytxt;
    document.getElementById("Manufacturer").innerHTML = Manufacturertxt;
    document.getElementById("Model").innerHTML  = Modeltxt;
    document.getElementById("YEAR").innerHTML  = YEARtxt;
}

function  decodeCountry() {
  if (Country.hasOwnProperty(CodeArray[0]))  {
    Countrytxt  = Country[CodeArray[0]];
    console.log(Countrytxt);
  } else {
    Countrytxt  = "Unknown Country of Origin"
  }
}

function  decodeManufacturer()  {
  if (Manufacturer.hasOwnProperty(CodeArray[1])) {
    Manufacturertxt = Manufacturer[CodeArray[1]];
    console.log(Manufacturertxt);
  } else {
    Manufacturertxt = "Unknown Manufacturer"
  }
}

function  decodeModel() {
  if (Model.hasOwnProperty(CodeArray[3])) {
    Modeltxt  = Model[CodeArray[3]]
    console.log(Modeltxt)
  } else {
    Modeltxt  = "Unknown Model"
  }
}

function  decodeYear()  {
  if (Year.hasOwnProperty(CodeArray[11])) {
    YEARtxt = Year[CodeArray[11]]
    console.log(YEARtxt);
  } else {
    YEARtxt = "Unknown Year"
  }
}

//1st Character Determines country
Country = {
  K:  "Korea",
  J:  "Japan",
  Z:  "Italy"
}

//2nd Character Determines Manufacturer
Manufacturer = {
  P:  "SsangYong",
  F:  "Subaru"
}

//4th Character Determines Model
Model  = {
  A:  "Korando",
  4:  "Rexton",
  N:  "Rodius",
  2:  "Tivoli/XLV",
  S:  "Forester",
  B:  "Outback",
  G:  "XV"
}

//10th Character Determines Year
Year = {
  L:  "1990",
  M:  "1991",
  N:  "1992",
  P:  "1993",
  R:  "1994",
  S:  "1995",
  T:  "1996",
  V:  "1997",
  W:  "1998",
  X:  "1999",
  Y:  "2000",
  1:  "2001",
  2:  "2002",
  3:  "2003",
  4:  "2004",
  5:  "2005",
  6:  "2006",
  7:  "2007",
  8:  "2008",
  9:  "2009",
  A:  "2010",
  B:  "2011",
  C:  "2012",
  D:  "2013",
  E:  "2014",
  F:  "2015",
  G:  "2016",
  H:  "2017",
  J:  "2018",
  K:  "2019"
}
