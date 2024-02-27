const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
const box = document.querySelector(".gallery");
const image = document.querySelectorAll(".gallery a");
let contador = 0;

function slider() {
  contador ++;

  if (contador > image.length - 1) {
    contador = 0;
  }

  box.style.transform = `translateX(-${contador * 1200}px)`

}

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

<<<<<<< HEAD
setInterval(slider, 5000);
=======
setInterval(slider, 7000);
>>>>>>> paulo
