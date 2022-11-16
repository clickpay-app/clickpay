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

const leftbtnmover = document.getElementById("btn-left");
const rightbtnmover = document.getElementById("btn-right");
const scrollNext = () => {
  stepList.scrollTo(stepList.scrollLeft + 300, stepList.scrollTop);
};

const scrollPrevious = () => {
  stepList.scrollTo(stepList.scrollLeft - 300, stepList.scrollTop);
};


// payments

$(document).ready(function () {
  var language = "arabic";
 
  $("#navBtn_translate").click(function () {
    language = language === "arabic" ? "english" : "arabic";
    if (language === "arabic") {
      header.style.direction = "ltr";

      footer.style.direction = "rtl";



      
    } else {
      header.style.direction = "rtl";
      footer.style.direction = "ltr";


    }
    $.getJSON("languages/" + language + ".json", function (dictionary) {
      $.each(dictionary, function (id, text) {
        $("#" + id).html(text);
      });
    });
  });


});
