/*
Instructions: Add dirt to the following to get the associated paydirt:
Scrap - Normal
Gold Coin - Better
Uranium - Good
Diamond - Best

Add water to filter through the paydirt

Add cloth to cellulose to form a seive to filter out the dirty water.
This is the product of 1 day's work and 3 years of gem(m)ology interest.
21 gemstones to collect... Good luck. ~ Ekle24

<Challenge Accepted: "Ooh Shiny":>
 _________________________________
|Attain all gemstones:   0/21    |
`````````````````````````````````
-added extra jewelery metals-

*/

elements.dirt.reactions.metal_scrap = {elem2:"NormalPaydirt", elem1:"NormalPaydirt"}
elements.dirt.reactions.gold_coin = {elem2:"BetterPaydirt", elem1:"BetterPaydirt"}
elements.dirt.reactions.uranium = {elem2:"GoodPaydirt", elem1:"GoodPaydirt"}
elements.dirt.reactions.diamond = {elem2:"BestPaydirt", elem1:"BestPaydirt"}
elements.cellulose.reactions.cloth = {elem2:"Sieve"}
elements.Opal={
    color:["#cceecc","#eecccc","#ccccee","#eeeeee"],
    behavior: [
        "XX|XX|XX",
        "SP|CC:6e4e24%0.1,eecccc%1,cceecc%1,ccccee%1,eeeeee%1|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["sand","steam"],
    tempHigh:"100",
    reactions:{
        "water":{elem1:"Opal",elem2:"water"}
    },
    breakInto:"sand",
    hardness: "60%"
}
elements.Sapphire={
    color:["#2b5c6e","#335B94","#4880D1","#3041D1","#4A36D1"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["metal_scrap","oxygen"],
    tempHigh:"2040",
    breakInto:["aluminium","oxygen"],
    hardness: "80%"
}
elements.Ruby={
    color:["#d13032","#d14471","#FF5B90","#FF3C3F","#EB9B9C"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["metal_scrap","oxygen"],
    tempHigh:"2040",
    breakInto:["aluminium","oxygen"],
    hardness: "80%"
}
elements.Emerald={
    color:["#47d046","#59d999","#7Dd494","#43c846","#45b765"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["metal_scrap","sand","oxygen"],
    tempHigh:"2519",
    breakInto:["aluminium","oxygen"],
    hardness: "60%"
}
elements.Topaz={
    color:["#FFF3BA","#FDFFCE","#FDE0FF","#DAECFF","#D7FFF4"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["metal_scrap","hydrogen","oxygen"],
    tempHigh:"210",
    breakInto:["gravel","oxygen"],
    hardness: "70%"
}
elements.Quartz={
    color:["#FFFDFB","#FFFEE1","#D4D3BB","#FFEFDD","#FFE2BF"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["sand","oxygen"],
    tempHigh:"1725",
    breakInto:["sand","oxygen"],
    hardness: "60%"
}
elements.Amethyst={
    color:["#CFA2FF","#F2A2FF","#F6D8FF","#B479ED","#CA51F5"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["sand","rust","oxygen","radiation","Citrine"],
    tempHigh:"1600",
    breakInto:["sand","oxygen"],
    hardness: "60%"
}
elements.Citrine={
    color:["#F5E1C3","#F5D7A3","#F5D07A","#F5CA59","#D19A23"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["sand","rust","oxygen"],
    tempHigh:"1750",
    breakInto:["sand","oxygen"],
    hardness: "60%"
}
elements.Garnet={
    color:["#FF8A01","#D64B07","#D6613D","#D66769"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["sand","gravel","metal_scrap","rust","magnesium"],
    tempHigh:"1300",
    breakInto:["rust","magnesium"],
    hardness: "60%"
}
elements.Zircon={
    color:["#B86142","#B8712C","#E08F25","#B3381B"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["gravel","oxygen","rust"],
    tempHigh:"1300",
    breakInto:["rust","gravel"],
    hardness: "65%"
}
elements.Agate={
    color:["#B25D3F","#E8C6BB","#336BAD","#8AAD94"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["gravel","Quartz","Amethyst"],
    tempHigh:"1500",
    breakInto:["sand","oxygen"],
    hardness: "60%"
}
elements.Laminar={
    color:["#A7F9FF","#CCFBFF","#8FFFE2","#ACCFCE"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
         "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["slag","Quartz","gravel"],
    tempHigh:"700",
    breakInto:["sand","oxygen","Quartz"],
    hardness: "60%"
}
elements.Bloodstone={
    color:["#56785B","#3A7848","#8BAD71","#8A2828"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
         "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["sand","Quartz","gravel"],
    tempHigh:"1230",
    breakInto:["sand","Quartz","rock"],
    hardness: "60%"
}
elements.Rutile={
    color:["#8A743B","#C99C2F","#E8AB2A","#E88D35"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "XX|M1|XX"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["Titanium","oxygen","gravel"],
    tempHigh:"2135",
    breakInto:["Titanium","oxygen"],
    hardness: "60%"
}
elements.TigersEye={
    color:["#4D3E1A","#C99C2F","#52381A","#E88D35"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|M1|XX"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["Rutile","Quartz","gravel"],
    tempHigh:"1700",
    breakInto:["Titanium","oxygen"],
    hardness: "60%"
}
elements.Onyx={
    color:["#222222","#FFFFFF","#000000"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|M1|XX"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["gravel","Quartz","Agate"],
    tempHigh:"200",
    breakInto:["sand","oxygen"],
    hardness: "60%"
}
elements.BlackOpal={
    color:["#22cc22","#2222cc","#cc2222","#111111","#000000"],
    behavior: [
        "XX|XX|XX",
        "SP|CC:6e4e24%0.04,22cc22%1,22eeee%1,2222cc%1,111111%1,000000%1|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["sand","steam"],
    tempHigh:"100",
    reactions:{
        "water":{elem1:"BlackOpal",elem2:"water"}
    },
    breakInto:["sand","oxygen","water"],
    hardness: "55%"
}
elements.FancySapphire={
    color:["#DD97FF","#FFCF8B","#D2FFB0","#3041D1","#B2FFFA"],
    behavior: [
        "XX|XX|XX",
        "SP|XX|SP",
        "M2|M1|M2"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["metal_scrap","oxygen"],
    tempHigh:"2040",
    breakInto:["aluminium","oxygen"],
    hardness: "80%"
}
elements.Carnelian={
    color:["#AD3C3C","#D63131","#EB3535"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["metal_scrap","oxygen"],
    tempHigh:"3000",
    breakInto:["gravel","oxygen"],
    hardness: "45%"
}
elements.Nephrite={
    color:["#EBEBEB","#E4EBD4","#D0EBCC"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["calcium","sand","rust","oxygen","magnesium","hydrogen"],
    tempHigh:"1060",
    breakInto:["magnesium","oxygen","rust","calcium"],
    hardness: "45%"
}
elements.Jadite={
    color:["#2A9E31","#499E5A","#649E74"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"gemstones",
    state:"solid",
    stateHigh:["sodium","oxygen","sand"],
    tempHigh:"1040",
    breakInto:["sodium","oxygen"],
    hardness: "45%"
}
elements.Titanium={
    color:["#BCCED1","#D1D1D1","#E8E8E8"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"solid",
    stateHigh:"MoltenTitanium",
    tempHigh:"1668",
}
elements.MoltenTitanium={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"Titanium",
    tempLow:"1667",
}
elements.GoodRoseGold={
    color:["#FF8088","#DE83A3","#DE8081"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"liquid",
    stateHigh:"MoltenGoodRoseGold",
    tempHigh:"897",
}
elements.MoltenGoodRoseGold={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"GoodRoseGold",
    tempLow:"896",
    
}
elements.BadRoseGold={
    color:["#DE8080","#DE7D67","#DE8081"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"liquid",
    stateHigh:"MoltenBadRoseGold",
    tempHigh:"900",
}
elements.MoltenBadRoseGold={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"BadRoseGold",
    tempLow:"899",
}
elements.GoodBlueGold={
    color:["#93BEDE","#93B2DE","#97D5DE"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"liquid",
    stateHigh:"MoltenGoodBlueGold",
    tempHigh:"491",
}
elements.MoltenGoodBlueGold={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"GoodBlueGold",
    tempLow:"490",
}
elements.BadBlueGold={
    color:["#A4C3C9","#A4B6C9","#A4A8C9"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"liquid",
    stateHigh:"MoltenGoodBlueGold",
    tempHigh:"491",
}
elements.MoltenBadBlueGold={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"GoodBlueGold",
    tempLow:"490",
}
elements.GoodPurpleGold={
    color:["#C95EC9","#AE6FC9","#C08BE3"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"liquid",
    stateHigh:"MoltenGoodPurpleGold",
    tempHigh:"1060",
}
elements.MoltenGoodPurpleGold={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"GoodPurpleGold",
    tempLow:"1059",
}
elements.BadPurpleGold={
    color:["#9C8BC7","#B48AC7","#C790C6"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"liquid",
    stateHigh:"MoltenBadPurpleGold",
    tempHigh:"1060",
}
elements.MoltenBadPurpleGold={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"BadPurpleGold",
    tempLow:"1059",
}
elements.GoodElectrum={
    color:["#CFDEAD","#E2EDAC","#DBDEB1"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"liquid",
    stateHigh:"MoltenGoodElectrum",
    tempHigh:"1064",
}
elements.MoltenGoodElectrum={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"GoodElectrum",
    tempLow:"1063",
}
elements.BadElectrum={
    color:["#B5B599","#AFB59C","#A9B5A1"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"liquid",
    stateHigh:"MoltenBadElectrum",
    tempHigh:"1064",
}
elements.MoltenBadElectrum={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"BadElectrum",
    tempLow:"1063",
}
elements.WhiteGold={
    color:["#F2F2F2","#F2EDE2","#F2F2C9"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"liquid",
    stateHigh:"MoltenWhiteGold",
    tempHigh:"1035",
}
elements.MoltenWhiteGold={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"WhiteGold",
    tempLow:"1035",
}
elements.HoneyGold={
    color:["#F2BB52","#F2DB5C","#F2C462"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category:"Metals",
    state:"liquid",
    stateHigh:"MoltenHoneyGold",
    tempHigh:"1035",
}
elements.MoltenHoneyGold={
    color:["#E87D00","#E8DF00","#E83C00"],
    behavior: [
        "XX|CR:fire%5|XX",
        "M2|XX|M2",
        "M1|M1|M1"
    ],
    category:"states",
    state:"liquid",
    stateLow:"HoneyGold",
    tempLow:"1035",
}
elements.NormalPaydirt={
    color:"#6E4C25",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|M1|XX"
    ],
    category:"gemology",
    state:"solid",
    reactions:{
        "water":{elem1:["Quartz","Quartz","Quartz","Citrine","Citrine","Bloodstone","Laminar","mud","mud","mud","mud","mud","mud","mud","dirt","mudstone","tuff"],elem2:"dirty_water"}
    },
}
elements.BetterPaydirt={
    color:["#6E4C25","#C26E15","#9C6422"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|M1|XX"
    ],
    category:"gemology",
    state:"solid",
    reactions:{
        "water":{elem1:["Rutile","TigersEye","TigersEye","Agate","Agate","Agate","Zircon","dirt","mud","mud","mud","mud","mud","mudstone","tuff"],elem2:"dirty_water"}
    },
}
elements.GoodPaydirt={
    color:["#6E4C25","#9C9288","#C2BFBC"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|M1|XX"
    ],
    category:"gemology",
    state:"solid",
    reactions:{
        "water":{elem1:["Carnelian","Onyx","Carnelian","Onyx","Jadite","Nephrite","Nephrite","Amethyst","Amethyst","Amethyst","Garnet","mud","mud","mud","mud","mud","mud","mud","mud","dirt","mudstone","tuff"],elem2:"dirty_water"}
    },
}
elements.BestPaydirt={
    color:["#6E4C25","#735F19","#FFCA3D"],
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|M1|XX"
    ],
    category:"gemology",
    state:"solid",
    reactions:{
        "water":{elem1:["Opal","BlackOpal","Emerald","FancySapphire","Ruby","Sapphire","mud","dirt","mudstone","tuff"],elem2:"dirty_water"}
    },
}
elements.Sieve={
    color:"#FDFFCC",
    behavior: [
        "SA|DL:dirty_water,water|SA",
        "XX|XX|XX",
        "XX|M1|XX"
    ],
    category:"gemology",
    state:"solid",
}
