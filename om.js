window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document
    .querySelector("#se_mere")
    .addEventListener("mouseover", hoverKnapHandler);
}

function hoverKnapHandler() {
  console.log("hoverKnapHandler");

  document.querySelector("#se_mere").classList.remove("hop");
  document.querySelector("#se_mere").offsetLeft;
  document.querySelector("#se_mere").classList.add("hop");
}
