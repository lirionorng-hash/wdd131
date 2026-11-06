// Preenche automaticamente o ano atual no rodapé
const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// Preenche a data da última modificação do documento no rodapé
const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Última modificação: ${document.lastModified}`;
