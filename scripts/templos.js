
"use strict";

// WDD 131 - S02: Álbum de Templos
// Lirionor Nascimento Guimarães

// Elementos do menu responsivo
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

// Abrir e fechar o menu hambúrguer
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu" : "Abrir menu"
  );

  menuButton.textContent = isOpen ? "✕" : "☰";
});

// Fechar o menu após selecionar um link
const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    menuButton.textContent = "☰";
  });
});

// Preencher o ano atual
const currentYear = document.querySelector("#anoatual");
currentYear.textContent = new Date().getFullYear();

// Preencher a última modificação da página
const lastModified = document.querySelector("#ultimaModificacao");
lastModified.textContent =
  `Última modificação: ${document.lastModified}`;
