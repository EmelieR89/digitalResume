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

$(".infoAboutMe").click(function () {
    let p = document.createElement("p")
    p.innerHTML = cvData.myInfo.info
    projectToHTML(p);
})

$(".infoMyPortfolio").click(function () {
    let p = document.createElement("p")
    p.innerHTML = cvData.myPortfolio.textGame.titel
    projectToHTML(p);
})

$(".contact").click(function () {
    let p = document.createElement("p")
    p.innerHTML = cvData.myContactInfo.myEmail.info
    projectToHTML(p);
})

$(".infoMyEducations").click(function () {
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


})

//ser till att baren togglar
$(".fa-bars").click(function () {
    $("nav").slideToggle(1000)
})



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

