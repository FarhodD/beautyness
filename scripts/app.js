// burgerMenu

const menuBtn = document.querySelector(".burger__menu"),
  submenu = document.querySelector(".submenu");

function toggleMenu() {
  menuBtn.classList.toggle("active");
  submenu.classList.toggle("vis__submenu");
}

// modalWindow

// const btn = document.querySelector('.header__top--btn');
const modalOverlay = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");
const cancelBtn = document.querySelectorAll(".cancel");
const headerBtn = document.querySelector(".header__btn");

const modalBtns = document.querySelectorAll(".modalBtn");

modalBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target='${path}']`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

cancelBtn.forEach(canc => {
  canc.addEventListener("click", () => {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  });
})


// ourBlog

const blogBtn = document.querySelector(".our__blog-btn");
const blogCardsEl = document.querySelector(".our__blog-cards");

blogBtn.addEventListener("click", () => {
  blogCardsEl.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="our__blog-card">
  <img src="./images/card-img1.jpg" alt="">
  <div class="our__blog-card-about">
    <div class="our__blog-card-title">
      <p class="card__title-date">September 30, 2021</p>
      <div class="card__title-defice"></div>
      <p class="card__title-name">Peter Bergson</p>
    </div>
    <h3 class="card-name">How to make the make-up stay last</h3>
    <p class="card-text">Therapeutic aromatherapy can help bring balance both mentally, physically, and
      different blends.</p>
  </div>
</div>

<div class="our__blog-card">
  <img src="./images/card-img2.jpg" alt="">
  <div class="our__blog-card-about">
    <div class="our__blog-card-title">
      <p class="card__title-date">September 30, 2021</p>
      <div class="card__title-defice"></div>
      <p class="card__title-name">John Walker</p>
    </div>
    <h3 class="card-name">Tips to improve your body via cleansing</h3>
    <p class="card-text">Whether you’re looking to stress, boost energy, improve sleep, clear sinuses, or
      relieve a headache.</p>
  </div>
</div>

<div class="our__blog-card">
  <img src="./images/card-img3.jpg" alt="">
  <div class="our__blog-card-about">
    <div class="our__blog-card-title">
      <p class="card__title-date">September 30, 2021</p>
      <div class="card__title-defice"></div>
      <p class="card__title-name">Christina John</p>
    </div>
    <h3 class="card-name">Experience the beauty at our beauty spa</h3>
    <p class="card-text">We’ve created a range of proprietary aromatherapy blends to enhance your massage or
      skin therapy.</p>
  </div>
</div>
  `
  );
});
