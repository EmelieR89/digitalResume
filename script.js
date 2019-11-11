// import cvData from "./cvData.js"

$(document).ready(function () {
    renderGreetingPhrase()
    // projectToHTML()


})

/**
 * 
 * @param {*} newElements 
 */
function projectToHTML(newElements) {
    const renderTarget = document.querySelector(".placeForCvData")
    $(".placeForCvData").empty()
    renderTarget.append(newElements)
}


/**
 * 
 */
function renderGreetingPhrase() {
    let p = document.createElement("p")
    p.innerHTML = cvData.greetingPhrase.phrase
    projectToHTML(p);
}

$(".aboutMe").click(function () {
    let p = document.createElement("p")
    p.innerHTML = cvData.myEmployments.lendahlsSkolan.info
    projectToHTML(p);
})

$(".myEducations").click(function () {
    // for (let i=0; i < cvData.myEducations.schools.length)
    let parentDivEducations = document.createElement("div")

    for (let education of cvData.myEducations) {
        let div = document.createElement("div")
        let h4 = document.createElement("h4")
        let p = document.createElement("p")
        h4.innerHTML = education.titel
        p.innerHTML = education.info
        div.appendChild(h4)
        div.appendChild(p)
        parentDivEducations.appendChild(div)
    }
    projectToHTML(parentDivEducations)


    // let lärarutbDiv = document.createElement("div")
    // let lärarh4 = document.createElement("h4")
    // let lärarp = document.createElement("p")
    // lärarh4.innerHTML = cvData.myEducations.lärarprogrammet.titel
    // lärarp.innerHTML = cvData.myEducations.lärarprogrammet.info
    // lärarutbDiv.appendChild(lärarh4)
    // lärarutbDiv.appendChild(lärarp)

    // let frontEndDiv = document.createElement("div")
    // let fronth4 = document.createElement("h4")
    // let frontp = document.createElement("p")
    // fronth4.innerHTML = cvData.myEducations.frontEndDeveloper.titel
    // frontp.innerHTML = cvData.myEducations.frontEndDeveloper.info
    // frontEndDiv.appendChild(fronth4)
    // frontEndDiv.appendChild(frontp)

    // parentDivEducations.appendChild div)
    // parentDivEducations.appendChild(lärarutbDiv)
    // parentDivEducations.appendChild(frontEndDiv)
    // projectToHTML(parentDivEducations)





})





$(".fa-bars").click(function () {
    $("nav").slideToggle(1000)
})




const cvData = {
    greetingPhrase: {
        phrase:
            "Hej och välkomna till mitt CV. Här kan ni läsa om vem jag är, "
            + "vad jag gjorde innan jag blev Front End utvecklare och även titta "
            + "på min portfolio som innehåller olika projekt som jag skapat. "
            + "Tveka inte att höra av er om det är något ni funderar kring, "
            + "all kontaktinformation ligger under fliken Kontakt."
    },

    myEducations: {
        rudebäcks: new educationAndWorkItem
            ("2005-2008, Sigrid Rudebecks gymnasium",
                "Samhällslinjen, inriktning språk (engelska, tyska, latin och spanska). "),

        lärarprogrammet: new educationAndWorkItem
            ("2011-2014, Lärarprogrammet, Göteborgs universitet, 210 p ",
                "”Matematik och natur i barnens värld”. Åldrar: förskola – åk 3. ",
                ["Matematik, 30 hp", "Naturvetenskap och teknik, 30 hp",
                    "Läs- och skrivinlärning, 30 hp", "Estetiska läroprocesser, 30 hp",
                    "Allmänt utbildningsområde, AUO, 90 hp"]),

        frontEndDeveloper: new educationAndWorkItem
            ("2019-2021, Front End Developer, Medieinstitutet, 400 Yh-p", "",
                ["HTML och CSS, 20 p", "Javascript 1, 65 p", "Dynamisk webbutveckling, 50 p",
                    "Grafiska verktyg  för gränssnittsdesign, 15 p", "UX och Usability, 15 p",
                    "Arbetsmetodik för utvecklare, 15 p", "Att arbeta i project med agila metoder, 15 p",
                    "LIA 1, 50 p", "LIA 2, 80 p", "Examensarbete, 30 p"])
    },

    myEmployments: {
        telia: new educationAndWorkItem
            ("2008, Telia kundtjänst ", "Arbetade som sommararbetare och fick sedan vidareanställning. "),

        barnOmsorgen: new educationAndWorkItem
            ("2009-2011, Barnomsorgen, Ale kommun", "Månadsanställd vikarie. Arbetade både i förskola och skola."),

        café: new educationAndWorkItem
            ("Sommaren 2012 och 2013, Café Björngårdsvillan i Slottskogen, Göteborg ", "Arbetade som servitris och kassörska. "),

        lendahlsSkolan: new educationAndWorkItem
            ("2014-2015, Lendahlsskolan, Alingsås", "Resurslärare i klass under dagen och på fritids på eftermiddagarna."),

        skogensFörskola: new educationAndWorkItem
            ("2015-2017, Skogens förskola, Alingsås", "Förskolelärare, ansvarig för det pedagogiska arbetet, förskolans hemsida och den digitala kontakten med vårdnadshavare över vår plattform, Pluttra. "),

        horsbySKolan: new educationAndWorkItem
            ("2017- 2019 Horsbyskolan, Herrljunga", "Klasslärare för en åk 1. Ansvarig för den pedagogiska planeringen och genomförandet. "),

    },

    myPortfolio: {
        textGame: new educationAndWorkItem
            ("Get out!", "Ett textbaserat spel som jag gjorde som ett projekt i skolan. Demo: https://emelier89.github.io/TextGame/"),

        stadsnäraLantgård: new educationAndWorkItem
            ("Stadsnära Lantgård", "En webbsida som jag och en kurskamrat gjorde som ett projekt i skolan. Demo: https://emelier89.github.io/homepageLantg-rden/"),
    },

    myContactInfo: {
        myEmail: new educationAndWorkItem
            ("Email: ", "rosenlowemelie@gmail.com")

    }


}

/**
 * 
 * @param {*} titel 
 * @param {*} info 
 * @param {*} descriptionItems 
 */
function educationAndWorkItem(titel, info, descriptionItems) {
    this.titel = titel;
    this.info = info;
    this.descriptionItems = descriptionItems;
}