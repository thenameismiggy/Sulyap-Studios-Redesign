const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
const imageUrls = ["./images/carousel-1.jfif", "./images/carousel-2.jpg", "./images/carousel-3.jfif", "./images/carousel-4.jpg", "./images/carousel-5.jpg", "./images/carousel-6.jfif", "./images/carousel-7.jfif", "./images/carousel-8.jpg", "./images/carousel-9.jfif"];
let index = 0;
let currentPosition = 0;

for (let i = 0; i < imageUrls.length; i++) {
  let image = new Image();
  image.src = imageUrls[i];
  image.setAttribute("class", "img-fluid mx-auto d-block");
  let child = document.createElement("div");
  child.setAttribute("class", "item m-0 p-0 col-4");
  track.appendChild(child);
  child.appendChild(image);
};

prev.addEventListener("click", function() {
  currentPosition += 33.33;
  track.style.transform = "translateX(" + currentPosition + "%)";
});

next.addEventListener("click", function() {
  currentPosition -= 33.33;
  track.style.transform = "translateX(" + currentPosition + "%)";
});

//need to convert to vanilla JS

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
var totalItems = $('.carousel-item').length;
var currentIndex = $('div.active').index() + 1;

$(window).on('load resize', function() {
  $('.pager-total').html(totalItems);
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});