$(document).ready(function () {
    renderGreetingPhrase()
    setUpListeners()
})


/**
 * Tömmer tidigare data från div och ersätter den med ny data från argument. 
 * @param {HTMLElement} newElements nyskapade element som skickas in i HTML.
 */
function projectToHTML(newElements) {
    const renderTarget = document.querySelector(".placeForCvData")
    $(".placeForCvData").empty()
    renderTarget.append(newElements)
}


/**
 * Renderar hälsningsfrasen. 
 */
function renderGreetingPhrase() {
    let p = document.createElement("p")
    p.innerHTML = cvData.greetingPhrase.phrase
    p.className = "greetingPhrase"
    projectToHTML(p);
}


/**
 * Byter bild när man klickar på "om mig" och buter sedan tillbaka när man klickar på någon av de andra titlarna i menyn. 
 * @param {MouseEvent} clickEvent 
 */
function otherPicture(clickEvent) {
    if (clickEvent.target.className === "infoAboutMe") {
        let newPhoto = document.querySelector(".photo")
        newPhoto.src = "./pictures/skridskorHornborgarsjön.jpg"

    } else {
        document.querySelector(".photo").src = "./pictures/jag2.jpg"

    }
}


//ser till att baren togglar
$(".fa-bars").click(function () {
    if ($(window).width() < 1024)
        $("nav").slideToggle(1000)
})

$("li").click(function () {
    if ($(window).width() < 1024)
        $("nav").slideUp(1000)
})

