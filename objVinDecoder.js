var Countrytxt; // Adding new stuff here and here
var Manufacturertxt;
var Modeltxt;
var YEARtxt;
var insertVIN;

function submitVin() {
    insertVIN = prompt("Enter VIN Number", "17 Characters Long");
    CountryCode();
    ManufacturerCode();
    ModelCode();
    YearCode();

    document.getElementById("Country").innerHTML = Countrytxt;
    document.getElementById("Model").innerHTML = Modeltxt;
    document.getElementById("Manufacturer").innerHTML = Manufacturertxt;
    document.getElementById("YEAR").innerHTML = YEARtxt;
    return(insertVIN);
}

function  CountryCode()  {
  if (insertVIN ==  null  ||  insertVIN.length  !== 17) {
    Countrytxt  = "VIN must be 17 characters long.";
  } else if (insertVIN.length === 17) {
    vinCountryCode = insertVIN.slice(0,1);
  } if (Country.hasOwnProperty(vinCountryCode)) {
    Countrytxt  = Country[vinCountryCode];
  }
}

function  ManufacturerCode(){
    vinManufactureCode  = insertVIN.slice(1,2);
    if(Manufacturer.hasOwnProperty(vinManufactureCode)) {
      Manufacturertxt = Manufacturer[vinManufactureCode];
  }
}

function  ModelCode()  {
  vinModelCode  = insertVIN.slice(3,4);
  console.log(vinModelCode);
  if (Model.hasOwnProperty(vinModelCode)) {
    Modeltxt  = Model[vinModelCode];
  }
}

function YearCode() {
  vinYearCode = insertVIN.slice(9, 10)
  console.log(YearCode);
  if (Year.hasOwnProperty(vinYearCode))  {
        YEARtxt = Year[vinYearCode];
  }
}

//1st Character Determines country
Country = {
  K:  "Korea",
  J:  "Japan"
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
