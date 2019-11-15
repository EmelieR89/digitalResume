function setUpListeners() {

    //När användaren trycker på namnet kommer de till "hälsningsfras"
    $(".rootMenu").click(function () {
        renderGreetingPhrase()
        otherPicture(event)
    })


    //När man trycker på de olika "knapparna" i menyn så sätts en funktion igång som skapar element och skickar in den info som ska finnas under varje. 
    $(".infoAboutMe").click(function () {
        let p = document.createElement("p")
        p.innerHTML = cvData.myInfo.info
        p.className = "aboutMe"

        otherPicture(event)

        projectToHTML(p)
    })

    $(".infoMyEducations").click(function () {
        let parentDivEducations = document.createElement("div")

        for (let education of cvData.myEducations) {
            let div = document.createElement("div")
            let h4 = document.createElement("h4")
            let p = document.createElement("p")
            let ul = document.createElement("ul")

            //Om det finns descriptionItems, lägg dem i lista. 
            if (education.descriptionItems) {
                for (let item of education.descriptionItems) {
                    let li = document.createElement("li")
                    li.innerHTML = item
                    ul.appendChild(li)
                }
            }

            h4.innerHTML = education.titel
            p.innerHTML = education.info

            parentDivEducations.className = "parentDivEducations"
            p.className = "educationInfo"
            ul.className = "educationDescriptionItems"

            div.appendChild(h4)
            div.appendChild(p)
            div.appendChild(ul)

            parentDivEducations.appendChild(div)
        }
        otherPicture(event)
        projectToHTML(parentDivEducations)
    })

    $(".infoMyEmployments").click(function () {
        let parentDivEmployments = document.createElement("div")

        for (let employment of cvData.myEmployments) {
            let div = document.createElement("div")
            let h4 = document.createElement("h4")
            let p = document.createElement("p")


            h4.innerHTML = employment.titel
            p.innerHTML = employment.info

            parentDivEmployments.className = "parentDivEmployments"
            h4.className = "employmentsTitel"
            p.className = "employmentsInfo"

            div.appendChild(h4)
            div.appendChild(p)

            parentDivEmployments.appendChild(div)
        }

        otherPicture(event)

        projectToHTML(parentDivEmployments)

    })

    $(".infoMyPortfolio").click(function () {
        let parentDivPortfolio = document.createElement("div")

        for (let item of cvData.myPortfolio) {
            let div = document.createElement("div")
            let h4 = document.createElement("h4")
            let p = document.createElement("p")


            //skapar demo-länk
            let a = document.createElement("a")
            let demo = document.createTextNode("Demo")
            a.appendChild(demo)
            a.title = "Demo"
            a.href = item.descriptionItems

            h4.className = "portfolioTitel"
            p.className = "portfolioInfo"
            a.className = "portfolioLinks"


            h4.innerHTML = item.titel
            p.innerHTML = item.info


            div.appendChild(h4)
            div.appendChild(p)
            div.appendChild(a)

            parentDivPortfolio.appendChild(div)
        }
        otherPicture(event)


        projectToHTML(parentDivPortfolio);
    })

    $(".contact").click(function () {
        let parentDivContact = document.createElement("div")
        let h2 = document.createElement("h2")
        let p = document.createElement("p")

        h2.innerHTML = cvData.myContactInfo.myEmail.titel
        p.innerHTML = cvData.myContactInfo.myEmail.info

        p.className = "contactInfo"

        parentDivContact.appendChild(h2)
        parentDivContact.appendChild(p)

        otherPicture(event)


        projectToHTML(parentDivContact)

    })
}