const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => { 
    // Para visualziar o menu em resoluções menores
 document.body.classList.toggle("show-mobile-menu");
});
   // Para fechar o menu em reosuluções menores
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Funcionalidade da barra de menu
navLinks.forEach(link => {
   link.addEventListener("click", () => menuOpenButton.click());
})