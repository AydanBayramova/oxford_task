//NAVBARIN SCRROLL ZAMANI OLCUSUNU DEYISMESI VE CSS FUNKSIYALARININDA DEYISMESI UCUN YAZILAN FUNKSIYA VE KODLAR

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    document.querySelector("#navbar").style.height = "100px";
    document.querySelector("#dows_button").style.display =
      "none"; /* Scroll yapıldığında navbari 100px et */
    document.querySelector("#staff").style.marginTop = "-40px";
    document.querySelector(".li_div").style.marginTop = "-21px";
    document.querySelector(".nav_img").style.display = "none";
  } else {
    document.querySelector("#navbar").style.height = "160px";
    document.querySelector("#dows_button").style.display = "flex";
    document.querySelector("#staff").style.marginTop = "-56px";
    document.querySelector(".li_div").style.marginTop = "2px";
    document.querySelector(".nav_img").style.display = "inline";
  }
}
//1-CI SLAYT UCUN YAZILAN KOD
var swiper = new Swiper(".swipers", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//2-CI SLAY UCUN YAZILAN KOD
var swiper = new Swiper(".m_Swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
