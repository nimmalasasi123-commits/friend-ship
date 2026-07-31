/* ==========================================
   FRIENDSHIP DAY WEBSITE
   PART 3A - JavaScript
========================================== */

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progress-bar");
const loadingText = document.getElementById("loading-text");

const main = document.getElementById("main");

const startBtn = document.getElementById("startBtn");

const nameSection = document.getElementById("nameSection");
const continueBtn = document.getElementById("continueBtn");
const friendName = document.getElementById("friendName");

const welcomeSection = document.getElementById("welcomeSection");
const welcomeMessage = document.getElementById("welcomeMessage");

const nextBtn = document.getElementById("nextBtn");
const heroSection = document.querySelector(".hero");

const heartsContainer = document.querySelector(".hearts");

const music = document.getElementById("bgMusic");

/* ==========================================
   Loading Screen
========================================== */

let progress = 0;

const loading = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";
    loadingText.innerHTML = progress + "%";

    if (progress >= 100) {

        clearInterval(loading);

        setTimeout(() => {

            loader.style.display = "none";

            main.classList.remove("hidden");

            if (heroSection) {
                fadeIn(heroSection);
            }

            document.body.style.overflow = "auto";

        }, 700);

    }

}, 35);

/* ==========================================
   Begin Journey
========================================== */

startBtn.onclick = () => {

    main.classList.add("hidden");

    nameSection.classList.remove("hidden");

    nameSection.scrollIntoView({
        behavior: "smooth"
    });

};

/* ==========================================
   Continue Button
========================================== */

continueBtn.onclick = () => {

    const name = friendName.value.trim();
    const normalized = name.toLowerCase();

    if (name === "") {

        alert("Please enter your name ❤️");

        return;

    }

    if (normalized !== "neelima") {

        alert("Sorry, this was made only foryou Kuttii 😊");

        return;

    }

    nameSection.classList.add("hidden");

    welcomeSection.classList.remove("hidden");

    welcomeMessage.innerHTML =
        `Welcome <span style="color:#ff4d6d">${name}</span> ❤️`;

    welcomeSection.scrollIntoView({
        behavior: "smooth"
    });

    music.play().catch(() => {});

};

/* ==========================================
   Next Button
========================================== */

nextBtn.onclick = () => {
    current = 0;
    welcomeSection.classList.add("hidden");
    gallery.classList.remove("hidden");
    gallery.style.opacity = "0";
    fadeIn(gallery);
    showSlide(current);
    gallery.scrollIntoView({
        behavior: "smooth"
    });
};

/* ==========================================
   Floating Hearts
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 350);

/* ==========================================
   Fade Animation
========================================== */

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transition = "1s";

});

function fadeIn(element) {

    element.style.opacity = "1";

}

/* ==========================================
   Apply Fade
========================================== */

startBtn.addEventListener("click", () => {

    setTimeout(() => {

        fadeIn(nameSection);

    }, 100);

});

continueBtn.addEventListener("click", () => {

    setTimeout(() => {

        fadeIn(welcomeSection);

    }, 100);

});

/* ==========================================
   Typing Effect (Preview)
========================================== */

const quotes = [

    "A real friend is one soul in two bodies ❤️",

    "Friends make every moment unforgettable 🌸",

    "Distance never breaks true friendship 💖",

    "Memories last forever with true friends ✨"

];

let quoteIndex = 0;

function changeTitle() {

    const currentQuote = quotes[quoteIndex];

    document.title = currentQuote;

    const quoteDisplay = document.getElementById("quoteDisplay");

    if (quoteDisplay) {
        quoteDisplay.textContent = currentQuote;
    }

    quoteIndex++;

    if (quoteIndex >= quotes.length)
        quoteIndex = 0;

}

changeTitle();
setInterval(changeTitle, 3000);

/* ==========================================
   PHOTO SLIDESHOW
========================================== */

const gallery = document.getElementById("gallery");
const slideImage = document.getElementById("slideImage");
const captionTitle = document.getElementById("captionTitle");
const captionText = document.getElementById("captionText");
const previousBtn = document.getElementById("previousBtn");
const nextSlideBtn = document.getElementById("nextSlideBtn");

function createPlaceholderImage(color, label) {
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
            <rect width="100%" height="100%" fill="${color}" />
            <circle cx="600" cy="320" r="220" fill="rgba(255,255,255,0.18)" />
            <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
                fill="white" font-size="44" font-family="Poppins, Arial, sans-serif">
                ${label}
            </text>
        </svg>
    `);
}

/* Images */

const images = [
    "./image 1.jpg",
    "./image 2.jpg",
    "./image 3.jpg",
    "./image 4.jpg",
    "./image 5.jpg",
    "./image 6.jpg"
];

/* Captions */

const titles = [
    "A Beautiful Friendship ❤️",
    "Different Places, Same Bond 🫶",
    "Smiles Forever 😊",
    "Beautiful Moments 🌸",
    "waiting for the Day we talk face to face... 🤝",
    "Forever Together ❤️"
];

const texts = [
    "A beautiful friendship is built on trust, laughter, kindness, and countless memories that stay in our hearts forever.",
    "Distance may separate us, but it can never change the bond we share.",
    "Happiness is having friends like you.",
    "Every picture captures a moment, but every memory captures a feeling that never fades.",
    "One day, we will meet and that day will be worth every moment I waited.",
    "Some friendships are too precious to fade. Ours is one that will always remain."
];

let current = 0;

function showSlide(index) {
    slideImage.style.opacity = "0";
    slideImage.style.transition = "opacity 0.5s ease";

    slideImage.onload = () => {
        slideImage.style.opacity = "1";
    };

    slideImage.onerror = () => {
        slideImage.src = createPlaceholderImage("#444", "Image not found");
        slideImage.style.opacity = "1";
    };

    slideImage.src = images[index];
    captionTitle.innerHTML = titles[index];
    captionText.innerHTML = texts[index];

    if (slideImage.complete && slideImage.naturalWidth !== 0) {
        slideImage.style.opacity = "1";
    }
}

/* Next */

function nextSlide() {
    current++;

    if (current >= images.length) {
        current = 0;
    }

    showSlide(current);
}

/* Previous */

function previousSlide() {
    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    showSlide(current);
}

nextSlideBtn.onclick = nextSlide;
previousBtn.onclick = previousSlide;

showSlide(0);

/* Auto Slide */

setInterval(nextSlide, 5000);

