// global

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const herotext = document.querySelector(".hero-text");
const heroimg = document.querySelector(".hero-image");
const firstSection = document.querySelector(".first-section");
const servicesText = document.querySelector(".services-text");
const processSection = document.querySelector("#section-3");
const processList = document.querySelector(".process-list");
const featuresSection = document.querySelector("#section-5");
const specialTitle = document.querySelector("#special_title");
const steplist = document.querySelector("#step-list");
const stepline = document.querySelector(".stepline");
const footer = document.querySelector(".footer-links");


// header

const navigation = document.getElementById("navigation");
const dropdown = document.getElementById("dropdown");

const toggleNavbar = () => {
  if (navigation.classList.contains("navigation-hide")) {
    navigation.classList.remove("navigation-hide");
    navigation.classList.add("navigation-show");
    dropdown.src = "images/close.png";
  } else {
    navigation.classList.remove("navigation-show");
    navigation.classList.add("navigation-hide");
    dropdown.src = "images/menu.png";
  }
};

let sections = document.querySelectorAll(".section");
let lists = document.querySelectorAll(".navigation-item");
function activeLink(li) {
  lists.forEach((item) => item.classList.remove("navigation-item-active"));
  li.classList.add("navigation-item-active");
}
function inactiveLink() {
  lists.forEach((item) => item.classList.remove("navigation-item-active"));
}
lists.forEach((item) =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset - 150 && top < offset + height) {
      const target = document.querySelector(
        `[href='index.html#${id}']`
      ).parentElement;
      activeLink(target);
    }
    if (top < 570) {
      inactiveLink();
    }
  });
};


// steps

const stepList = document.getElementById("step-list");
      stepList.scrollTo(1000, stepList.scrollTop);

const leftbtnmover = document.getElementById("btn-left");
const rightbtnmover = document.getElementById("btn-right");
const scrollNext = () => {
  stepList.scrollTo(stepList.scrollLeft + 300, stepList.scrollTop);
};

const scrollPrevious = () => {
  stepList.scrollTo(stepList.scrollLeft - 300, stepList.scrollTop);
};

// processes

let i = 0;
const slideImage = document.getElementById("process-image");

const changeSelectedProcess = (j) => {
  for (let i = 1; i <= 3; ++i) {
    if (i == j)
      document.getElementById(`process-${i}`).classList.add("selected-process");
    else
      document
        .getElementById(`process-${i}`)
        .classList.remove("selected-process");
  }
};

setInterval(() => {
  const j = ((i + 1) % 3) + 1;
  slideImage.children[0].src = `images/slide-${j}.jpg`;
  changeSelectedProcess(j);
  ++i;
}, 5000);

const changeSlideImage = (j) => {
  slideImage.children[0].src = `images/slide-${j}.jpg`;
  changeSelectedProcess(j);
  i = j + 1;
};

// payments

$(document).ready(function () {
  var language = "arabic";
  $(".payment-list").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    prevArrow:
      "<i class='fa-solid fa-less-than a-left control-c prev slick-prev'></i>",
    nextArrow:
      "<i class='fa-solid fa-more-than a-right control-c next slick-next'></i>",
    responsive: [
      {
        breakpoint: 1068,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("#navBtn_translate").click(function () {
    language = language === "arabic" ? "english" : "arabic";
    if (language === "arabic") {
      header.style.direction = "ltr";
      hero.style.direction = "ltr";
      herotext.style.textAlign = "right";
      heroimg.style.transform = "rotate(0deg)";
      firstSection.style.direction = "ltr";
      servicesText.style.textAlign = "right";
      processSection.style.direction = "ltr";
      processList.style.textAlign = "right";
      featuresSection.style.direction = "ltr";
      specialTitle.style.direction = "ltr";
      specialTitle.style.textAlign = "right";
      stepList.scrollTo(1000, stepList.scrollTop);
      steplist.style.direction = "ltr";
      document.getElementById("gateway_4").style.direction = "rtl";
      footer.style.direction = "rtl";


    } else {
      header.style.direction = "rtl";
      hero.style.direction = "rtl";
      herotext.style.textAlign = "left";
      heroimg.style.transform = "rotate(180deg)";
      heroimg.style.dataAos = "right";
      heroimg.style.transitionProperty = "none";
      firstSection.style.direction = "rtl";
      servicesText.style.textAlign = "left";
      processSection.style.direction = "rtl";
      processList.style.textAlign = "left";
      featuresSection.style.direction = "rtl";
      specialTitle.style.direction = "initial";
      specialTitle.style.textAlign = "left";
      steplist.style.direction = "rtl";
      stepline.style.right = "130px";
      stepList.scrollTo(-1000, stepList.scrollTop);
      document.getElementById("gateway_4").style.direction = "ltr";
      footer.style.direction = "ltr";


    }
    $.getJSON("languages/" + language + ".json", function (dictionary) {
      $.each(dictionary, function (id, text) {
        $("#" + id).html(text);
      });
    });
  });


});
