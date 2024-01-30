function revealindex() {
    const sectionindex = document.querySelector("#sectionhome");
    sectionindex.classList.add("active");
   

};

function revealcontact() {
    const sectioncontact = document.querySelector("#sectioncontact");
    sectioncontact.classList.add("active");

};

function revealmenu() {
    const sectionmenu = document.querySelector("#sectionmenu");
    sectionmenu.classList.add("active");

};

function revealbooking() {
    const sectionmenu = document.querySelector("#sectionbooking");
    sectionmenu.classList.add("active");

};



window.addEventListener("load", revealindex);
window.addEventListener("load", revealcontact);
window.addEventListener("load", revealmenu);
window.addEventListener("load", revealbooking);