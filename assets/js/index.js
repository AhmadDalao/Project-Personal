

let mega_menu_trigger = document.querySelector("#mega_menu_trigger");
let mega_menu = document.querySelector(".mega-menu");

mega_menu_trigger.addEventListener("click", triggerMegaMenu);


function triggerMegaMenu() {
    mega_menu_trigger.classList.toggle("menu-trigger");
    mega_menu.classList.toggle("show-menu");
}