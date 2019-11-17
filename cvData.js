/**
 * All data som ska renderas till hemsidan.
 */
const cvData = {
    greetingPhrase: {
        phrase:
            "Hej och välkomna till mitt CV. Här kan ni läsa om vem jag är, "
            + "vad jag gjorde innan jag blev Front End utvecklare och även titta "
            + "på min portfolio som innehåller olika projekt som jag skapat. "
            + "Tveka inte att höra av er om det är något ni funderar kring, "
            + "all kontaktinformation ligger under fliken"
            + "<strong>" + " Kontakt." + "<strong>"
    },

    myInfo: {
        info:
            "Jag är på god väg att bli Front End Developer. Innan jag kom in på denna "
            + "bana så utbildade jag mig till lärare och arbetade under flera år i utbildningsväsendet. "
            + "Någonstans på vägen insåg jag att det inte var detta jag ville göra, utan började "
            + "fundera på att skola om mig. Jag har alltid haft ett teknikintresse och en förkärlek "
            + "till språk och matematik. I min umgängeskrets är det flera som arbetar inom"
            + "system- och webbutveckling som rekommenderade mig att testa programmering, "
            + "och jag fastnade för det på en gång! Blandningen av olika språkliga syntaxer, "
            + "problemlösning och matematik tilltalade mig oerhört! Och på den vägen är det. "
            + "<br><br>"
            + "Jag bor i Alingsås med min sambo. På min lediga tid gillar jag att vara fysiskt aktiv, "
            + "vare sig det är på gymmet eller ute i naturen. Jag gillar att vandra, åka skridskor och cykla."
            + "Dessutom har jag stort intresse för djur och natur. Bland annat är jag volontär på en lantgård, "
            + "som ligger utanför Lidköping, där jag vissa helger har ansvar för gården och dess djur. "
            + "Jag har även ett musikintresse, och har tidigare spelat trummor i diverse band. "

    },

    myEducations: [
        rudebäcks = new educationAndWorkItem
            ("2005-2008, Sigrid Rudebecks gymnasium",
                "Samhällslinjen, inriktning språk (engelska, tyska, latin och spanska). "),

        lärarprogrammet = new educationAndWorkItem
            ("2011-2014, Lärarprogrammet, Göteborgs universitet, 210 p ",
                "”Matematik och natur i barnens värld”. Åldrar: förskola – åk 3. ",
                ["Matematik, 30 hp", "Naturvetenskap och teknik, 30 hp",
                    "Läs- och skrivinlärning, 30 hp", "Estetiska läroprocesser, 30 hp",
                    "Allmänt utbildningsområde, AUO, 90 hp"]),

        frontEndDeveloper = new educationAndWorkItem
            ("2019-2021, Front End Developer, Medieinstitutet, 400 Yh-p", "",
                ["HTML och CSS, 20 p", "Javascript 1, 65 p", "Dynamisk webbutveckling, 50 p",
                    "Grafiska verktyg  för gränssnittsdesign, 15 p", "UX och Usability, 15 p",
                    "Arbetsmetodik för utvecklare, 15 p", "Att arbeta i project med agila metoder, 15 p",
                    "LIA 1, 50 p", "LIA 2, 80 p", "Examensarbete, 30 p"])

    ],

    myEmployments: [
        telia = new educationAndWorkItem
            ("2008, Telia kundtjänst ", "Arbetade som sommararbetare och fick sedan vidareanställning. "),

        barnOmsorgen = new educationAndWorkItem
            ("2009-2011, Barnomsorgen, Ale kommun", "Månadsanställd vikarie. Arbetade både i förskola och skola."),

        café = new educationAndWorkItem
            ("Sommaren 2012 och 2013, Café Björngårdsvillan, Göteborg ", "Arbetade som servitris och kassörska. "),

        lendahlsSkolan = new educationAndWorkItem
            ("2014-2015, Lendahlsskolan, Alingsås", "Resurslärare i klass under dagen och på fritids på eftermiddagarna."),

        skogensFörskola = new educationAndWorkItem
            ("2015-2017, Skogens förskola, Alingsås", "Förskolelärare, ansvarig för det pedagogiska arbetet, förskolans hemsida och den digitala kontakten med vårdnadshavare över vår plattform, Pluttra. "),

        horsbySKolan = new educationAndWorkItem
            ("2017- 2019 Horsbyskolan, Herrljunga", "Klasslärare för en åk 1. Ansvarig för den pedagogiska planeringen och genomförandet. "),

    ],

    myPortfolio: [
        textGame = new educationAndWorkItem
            ("Get out!", "Ett textbaserat spel som jag gjorde som ett projekt i skolan.", "https://emelier89.github.io/TextGame/"),

        stadsnäraLantgård = new educationAndWorkItem
            ("Stadsnära Lantgård", "En webbsida som jag och en kurskamrat gjorde som ett projekt i skolan.", "https://emelier89.github.io/homepageLantg-rden/"),
    ],

    myContactInfo: {
        myEmail: new educationAndWorkItem
            ("Email: ", "rosenlowemelie@gmail.com")

    }
}

/**
 * 
 * @param {String} titel titel på objektet
 * @param {String} info huvudsakliga infon om objektet
 * @param {String} descriptionItems specifik info om objektet
 */
function educationAndWorkItem(titel, info, descriptionItems = null) {
    this.titel = titel;
    this.info = info;
    this.descriptionItems = descriptionItems;
}