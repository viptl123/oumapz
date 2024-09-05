const places = {
    NA: "",
    DaleHall: "Dale Hall",
    NielsonHall: "Nielson Hall",
    CouchCenter: "Couch Center",
    Walkertower: "Walker Tower",
    Cross: "Cross",
    HeadingtonHall: "Headington Hall",
    DunhamCollege: "Dunham College",
    SarkysFitnessCenter: "Sarkys Fitness Center",
    PriceCollege: "Price College",
    GaylordHall: "Gaylord Hall",
    Catlett: "Catlett",
    DevonHall: "Devon Hall",
    GallogyHall: "Gallogy Hall",
    WagnerHall: "Wagner Hall",
    PhysicalScienceCenter: "Physical Science Center",
    FelgarHall: "Felgar Hall",
    CarsonEngineeringCenter: "Carson Engineering Center",
    SarkysEnergyCenter: "Sarkys Energy Center",
    Union: "Oklahoma Memorial Union",
    BizzellLibrary: "Bizzell Library",
    ReynolsPerformingArtsCenter: "Reynolds Performing Arts Center",
    GaylordStatium: "Gaylord Statium",
    CopelandHall: "Copeland Hall",
    GouldHall: "Gould Hall",
    KaufmanHall: "Kaufman Hall",
    FarzanehHall: "Farzaneh Hall",
    DavidLBorenHall: "David L. Boren Hall",
    OUFoodPantry: "OU Food Pantry",
    HaystackCoffee: "Haystack Coffee",
    DavidBurrPark: "David Burr Park",
    CarpenterHall: "Carpenter Hall",
    BurtonHall: "Burton Hall",
    Goddard: "Goddard Health Center",
    JimThorpeMulticulturalCenter: "Jim Thorpe Multicultural Center",
    ThurmanJWhiteForumBuilding: "Thurman J White, Forum Building",
    SouthOval: "South Oval",
    AumHouse: "Aum's House",
    GroupStudy: "Group Study",
}

const latitude = new Map();
latitude.set(places.DaleHall, 35.204335612633905);
latitude.set(places.NielsonHall, 35.2071511036927)
latitude.set(places.CouchCenter, 35.20020467875125)
latitude.set(places.Walkertower, 35.201638806947244)
latitude.set(places.Cross, 35.19946587519702)
latitude.set(places.HeadingtonHall, 35.203296748057205)
latitude.set(places.DunhamCollege, 35.20354655564377)
latitude.set(places.SarkysFitnessCenter, 35.20148887992214)
latitude.set(places.PriceCollege, 35.207954909754434)
latitude.set(places.GaylordHall, 35.20417368861974)
latitude.set(places.Catlett, 35.210371762233834)
latitude.set(places.DevonHall, 35.21075243791006)
latitude.set(places.GallogyHall, 35.21013069465332)
latitude.set(places.WagnerHall, 35.20834502795292)
latitude.set(places.PhysicalScienceCenter, 35.209344076806374)
latitude.set(places.FelgarHall, 35.21022169476235)
latitude.set(places.CarsonEngineeringCenter, 35.21078992057846)
latitude.set(places.SarkysEnergyCenter, 35.210549885692224)
latitude.set(places.Union, 35.209650482642296)
latitude.set(places.BizzellLibrary, 35.20804722870293)
latitude.set(places.ReynolsPerformingArtsCenter, 35.210193954647686)
latitude.set(places.GaylordStatium, 35.2059238037734)
latitude.set(places.CopelandHall, 35.20485177403975)
latitude.set(places.GouldHall, 35.20541456300017)
latitude.set(places.KaufmanHall, 35.20604804130767)
latitude.set(places.FarzanehHall, 35.2066244133482)
latitude.set(places.DavidLBorenHall, 35.20326873669045)
latitude.set(places.OUFoodPantry, 35.20305044804296)
latitude.set(places.HaystackCoffee,35.20070276586225)
latitude.set(places.DavidBurrPark, 35.20041540259818)
latitude.set(places.CarpenterHall, 35.21031865963186)
latitude.set(places.BurtonHall, 35.20900150194236)
latitude.set(places.Goddard, 35.208450407628845)
latitude.set(places.JimThorpeMulticulturalCenter,35.198609247755456 )
latitude.set(places.ThurmanJWhiteForumBuilding, 35.19806643009632)
latitude.set(places.SouthOval, 35.20730135598253)
latitude.set(places.AumHouse, 35.176997318747034)
latitude.set(places.GroupStudy, 35.2115822742608)


const longitude = new Map();
longitude.set(places.DaleHall, -97.44654550199276);
longitude.set(places.NielsonHall, -97.4466913268683)
longitude.set(places.CouchCenter, -97.44520044632148)
longitude.set(places.Walkertower, -97.44489423282806)
longitude.set(places.Cross, -97.44235850399258);
longitude.set(places.HeadingtonHall, -97.44104712476732);
longitude.set(places.DunhamCollege, -97.44378657974262);
longitude.set(places.SarkysFitnessCenter, -97.4428844306612)
longitude.set(places.PriceCollege, -97.44388057786237)
longitude.set(places.GaylordHall, -97.44491060071839)
longitude.set(places.Catlett, -97.44825158117717)
longitude.set(places.DevonHall, -97.44182023070236)
longitude.set(places.GallogyHall, -97.44194773238489)
longitude.set(places.WagnerHall,  -97.44298584632115)
longitude.set(places.PhysicalScienceCenter, -97.4472932539827)
longitude.set(places.FelgarHall, -97.44301721860079)
longitude.set(places.CarsonEngineeringCenter, -97.44280014352498)
longitude.set(places.SarkysEnergyCenter, -97.440358807814)
longitude.set(places.Union, -97.4442345556564)
longitude.set(places.BizzellLibrary, -97.44568307003928)
longitude.set(places.ReynolsPerformingArtsCenter,  -97.44658474751961)
longitude.set(places.GaylordStatium, -97.44232523282786)
longitude.set(places.CopelandHall, -97.44658427691834)
longitude.set(places.GouldHall,  -97.4448706200588)
longitude.set(places.KaufmanHall, -97.44662008943632)
longitude.set(places.FarzanehHall, -97.44709396800687)
longitude.set(places.DavidLBorenHall, -97.4450080577389)
longitude.set(places.OUFoodPantry, -97.44606073389289)
longitude.set(places.HaystackCoffee, -97.44775860391154)
longitude.set(places.DavidBurrPark, -97.44363893631169)
longitude.set(places.CarpenterHall, -97.44416939732132)
longitude.set(places.BurtonHall, -97.44859090612114)
latitude.set(places.Goddard, -97.44851970245702)
longitude.set(places.JimThorpeMulticulturalCenter, -97.44578362885716)
longitude.set(places.ThurmanJWhiteForumBuilding, -97.44538205716377)
longitude.set(places.SouthOval, -97.44570245712879)
longitude.set(places.AumHouse, -97.42009947106358)
longitude.set(places.GroupStudy, -97.44384544836966)






export {longitude, latitude, places};


