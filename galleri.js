window.onload = function () {
  window.addEventListener("scroll", scrollEffect);

  function scrollEffect() {
    if (window.scrollY >= 50) {
      document.querySelector("#line1").classList.remove("hidden_img");

      document.querySelector("#line1").style.transition = "1s ease-in-out";
    } else {
      document.querySelector("#line1").classList.add("hidden_img");
    }

    if (window.scrollY >= 300) {
      document.querySelector("#line2").classList.remove("hidden_img");

      document.querySelector("#line2").style.transition = "1s ease-in-out";
    } else {
      document.querySelector("#line2").classList.add("hidden_img");
    }

    if (window.scrollY >= 850) {
      document.querySelector("#line3").classList.remove("hidden_img");

      document.querySelector("#line3").style.transition = "1s ease-in-out";
    } else {
      document.querySelector("#line3").classList.add("hidden_img");
    }

    if (window.scrollY >= 1200) {
      document.querySelector("#line4").classList.remove("hidden_img");

      document.querySelector("#line4").style.transition = "1s ease-in-out";
    } else {
      document.querySelector("#line4").classList.add("hidden_img");
    }
  }
};
