window.onload = function () {
  window.addEventListener("scroll", scrollEffect);
};

function scrollEffect() {
  console.log("scrollEffect");

  if (window.scrollY >= 50) {
    document.querySelector("#line1").classList.remove("hidden_img");

    document.querySelector("#line1").style.transition = "1s ease-in-out";
  } else {
    document.querySelector("#line1").classList.add("hidden_img");
  }

  if (window.scrollY >= 200) {
    document.querySelector("#line2").classList.remove("hidden_img");

    document.querySelector("#line2").style.transition = "1s ease-in-out";
  } else {
    document.querySelector("#line2").classList.add("hidden_img");
  }

  if (window.scrollY >= 600) {
    document.querySelector("#line3").classList.remove("hidden_img");

    document.querySelector("#line3").style.transition = "1s ease-in-out";
  } else {
    document.querySelector("#line3").classList.add("hidden_img");
  }

  if (window.scrollY >= 650) {
    document.querySelector("#line4").classList.remove("hidden_img");

    document.querySelector("#line4").style.transition = "1s ease-in-out";
  } else {
    document.querySelector("#line4").classList.add("hidden_img");
  }
}
