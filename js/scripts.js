/*-- START DARK MODE --*/
function setActive(element) {
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.remove("active", "show");
    const dd = item.querySelector(".dropdown");
    if (dd) dd.classList.remove("up", "down");
  });
  element.classList.add("active");
}

function toggleDropdown(element) {
  const dropdown = element.querySelector(".dropdown");

  document.querySelectorAll(".menu-item").forEach((item) => {
    if (item !== element) {
      item.classList.remove("show");
      const dd = item.querySelector(".dropdown");
      if (dd) dd.classList.remove("up", "down");
    }
  });

  element.classList.toggle("show");

  if (element.classList.contains("show")) {
    const rect = element.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    dropdown.classList.remove("up", "down");
    if (spaceBelow >= 150 || spaceBelow >= spaceAbove) {
      dropdown.classList.add("down");
    } else {
      dropdown.classList.add("up");
    }
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

window.addEventListener("click", function (e) {
  if (!e.target.closest(".menu-item")) {
    document.querySelectorAll(".menu-item").forEach((item) => {
      item.classList.remove("show");
      const dd = item.querySelector(".dropdown");
      if (dd) dd.classList.remove("up", "down");
    });
  }
}); /*-- END DARK MODE --*/

/*-- START MODAL CONTACT --*/
function showContactInfo() {
  alert(
    "📧 Email: vhariola@gmail.com\n" +
      "📞 Contact: +63 928 823 6562\n" +
      "📍 Address: San Jose, Batangas City, Philippines\n" +
      "🌐 Portfolio: https://www.behance.net/venzonariola1"
  );
} /*-- END MODAL CONTACT --*/

/*-- START BURGER MENU TOGGLE --*/
function toggleMenu() {
  const header = document.querySelector(".header-bar");
  header.classList.toggle("active");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

/*-- END BURGER MENU TOGGLE --*/

/*-- DOWNLOAD PDF FILE --*/
function openPDF() {
  window.open("pdf/PROFESSIONAL SUMMARY.pdf", "_blank");
}

/*--CAROUSEL and MODAL--*/
const track = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".slide img");
const totalSlides = slides.length;
const visibleSlides = 3;
let index = 0;
let currentModalIndex = 0;

function autoSlide() {
  index++;
  if (index > totalSlides - visibleSlides) {
    index = 0;
  }
  const slideWidth = slides[0].offsetWidth + 20; // 20 = gap
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

setInterval(autoSlide, 3000); // auto-slide every 3 seconds

// Modal functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

slides.forEach((img, i) => {
  img.addEventListener("click", () => {
    currentModalIndex = i;
    showModalImage();
  });
});

function showModalImage() {
  modalImg.src = slides[currentModalIndex].src;
  modal.classList.add("show");
}

prevArrow.addEventListener("click", (e) => {
  e.stopPropagation();
  currentModalIndex = (currentModalIndex - 1 + totalSlides) % totalSlides;
  showModalImage();
});

nextArrow.addEventListener("click", (e) => {
  e.stopPropagation();
  currentModalIndex = (currentModalIndex + 1) % totalSlides;
  showModalImage();
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// Keyboard arrow navigation when modal is open
document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("show")) return;

  if (e.key === "ArrowLeft") {
    currentModalIndex = (currentModalIndex - 1 + totalSlides) % totalSlides;
    showModalImage();
  } else if (e.key === "ArrowRight") {
    currentModalIndex = (currentModalIndex + 1) % totalSlides;
    showModalImage();
  } else if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});

/*-- START PDF and MODAL TAB 1 TECHNICAL--*/
const pdfnav1_thumbnails = document.querySelectorAll(".pdfnav1-thumbnail");
const pdfnav1_popup = document.getElementById("pdfnav1-popupOverlay");
const pdfnav1_iframe = document.getElementById("pdfnav1-pdfFrame");
const pdfnav1_closeBtn = document.getElementById("pdfnav1-closeBtn");
const pdfnav1_prevBtn = document.getElementById("pdfnav1-prevBtn");
const pdfnav1_nextBtn = document.getElementById("pdfnav1-nextBtn");

const pdfnav1_thumbsArray = Array.from(pdfnav1_thumbnails).slice(0, 8);
let pdfnav1_currentIndex = 0;

function pdfnav1_openPopup(index) {
  pdfnav1_currentIndex = index;
  const pdfURL =
    pdfnav1_thumbsArray[pdfnav1_currentIndex].getAttribute("data-pdf");
  pdfnav1_iframe.src = pdfURL;
  pdfnav1_popup.style.display = "flex";
}

pdfnav1_thumbnails.forEach((thumb, index) => {
  if (index < 8) {
    thumb.addEventListener("click", () => {
      pdfnav1_openPopup(index);
    });
  }
});

pdfnav1_closeBtn.addEventListener("click", () => {
  pdfnav1_popup.style.display = "none";
  pdfnav1_iframe.src = "";
});

pdfnav1_popup.addEventListener("click", (e) => {
  if (e.target === pdfnav1_popup) {
    pdfnav1_popup.style.display = "none";
    pdfnav1_iframe.src = "";
  }
});

pdfnav1_prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  pdfnav1_currentIndex =
    (pdfnav1_currentIndex - 1 + pdfnav1_thumbsArray.length) %
    pdfnav1_thumbsArray.length;
  pdfnav1_iframe.src =
    pdfnav1_thumbsArray[pdfnav1_currentIndex].getAttribute("data-pdf");
});

pdfnav1_nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  pdfnav1_currentIndex =
    (pdfnav1_currentIndex + 1) % pdfnav1_thumbsArray.length;
  pdfnav1_iframe.src =
    pdfnav1_thumbsArray[pdfnav1_currentIndex].getAttribute("data-pdf");
});
/*--END PDF and MODAL TAB 1 TECHNICAL--*/

/*-- START PDF and MODAL TAB 2 GRAPHIC--*/
const pdfnav2_thumbnails = document.querySelectorAll(".pdfnav2-thumbnail");
const pdfnav2_popup = document.getElementById("pdfnav2-popupOverlay");
const pdfnav2_iframe = document.getElementById("pdfnav2-pdfFrame");
const pdfnav2_closeBtn = document.getElementById("pdfnav2-closeBtn");
const pdfnav2_prevBtn = document.getElementById("pdfnav2-prevBtn");
const pdfnav2_nextBtn = document.getElementById("pdfnav2-nextBtn");

const pdfnav2_thumbsArray = Array.from(pdfnav2_thumbnails).slice(0, 8);
let pdfnav2_currentIndex = 0;

function pdfnav2_openPopup(index) {
  pdfnav2_currentIndex = index;
  const pdfURL =
    pdfnav2_thumbsArray[pdfnav2_currentIndex].getAttribute("data-pdf");
  pdfnav2_iframe.src = pdfURL;
  pdfnav2_popup.style.display = "flex";
}

pdfnav2_thumbnails.forEach((thumb, index) => {
  if (index < 8) {
    thumb.addEventListener("click", () => {
      pdfnav2_openPopup(index);
    });
  }
});

pdfnav2_closeBtn.addEventListener("click", () => {
  pdfnav2_popup.style.display = "none";
  pdfnav2_iframe.src = "";
});

pdfnav2_popup.addEventListener("click", (e) => {
  if (e.target === pdfnav2_popup) {
    pdfnav2_popup.style.display = "none";
    pdfnav2_iframe.src = "";
  }
});

pdfnav2_prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  pdfnav2_currentIndex =
    (pdfnav2_currentIndex - 1 + pdfnav2_thumbsArray.length) %
    pdfnav2_thumbsArray.length;
  pdfnav2_iframe.src =
    pdfnav2_thumbsArray[pdfnav2_currentIndex].getAttribute("data-pdf");
});

pdfnav2_nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  pdfnav2_currentIndex =
    (pdfnav2_currentIndex + 1) % pdfnav2_thumbsArray.length;
  pdfnav2_iframe.src =
    pdfnav2_thumbsArray[pdfnav2_currentIndex].getAttribute("data-pdf");
});
/*-- END PDF and MODAL TAB 2 GRAPHIC--*/

/*-- START PDF and MODAL TAB 3 WEB DEV--*/
const pdfnav3_thumbnails = document.querySelectorAll(".pdfnav3-thumbnail");
const pdfnav3_popup = document.getElementById("pdfnav3-popupOverlay");
const pdfnav3_iframe = document.getElementById("pdfnav3-pdfFrame");
const pdfnav3_closeBtn = document.getElementById("pdfnav3-closeBtn");
const pdfnav3_prevBtn = document.getElementById("pdfnav3-prevBtn");
const pdfnav3_nextBtn = document.getElementById("pdfnav3-nextBtn");

const pdfnav3_thumbsArray = Array.from(pdfnav3_thumbnails).slice(0, 10);
let pdfnav3_currentIndex = 0;

function pdfnav3_openPopup(index) {
  pdfnav3_currentIndex = index;
  const pdfURL =
    pdfnav3_thumbsArray[pdfnav3_currentIndex].getAttribute("data-pdf");
  pdfnav3_iframe.src = pdfURL;
  pdfnav3_popup.style.display = "flex";
}

pdfnav3_thumbnails.forEach((thumb, index) => {
  if (index < 12) {
    thumb.addEventListener("click", () => {
      pdfnav3_openPopup(index);
    });
  }
});

pdfnav3_closeBtn.addEventListener("click", () => {
  pdfnav3_popup.style.display = "none";
  pdfnav3_iframe.src = "";
});

pdfnav3_popup.addEventListener("click", (e) => {
  if (e.target === pdfnav3_popup) {
    pdfnav3_popup.style.display = "none";
    pdfnav3_iframe.src = "";
  }
});

pdfnav3_prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  pdfnav3_currentIndex =
    (pdfnav3_currentIndex - 1 + pdfnav3_thumbsArray.length) %
    pdfnav3_thumbsArray.length;
  pdfnav3_iframe.src =
    pdfnav3_thumbsArray[pdfnav3_currentIndex].getAttribute("data-pdf");
});

pdfnav3_nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  pdfnav3_currentIndex =
    (pdfnav3_currentIndex + 1) % pdfnav3_thumbsArray.length;
  pdfnav3_iframe.src =
    pdfnav3_thumbsArray[pdfnav3_currentIndex].getAttribute("data-pdf");
});
/*-- END PDF and MODAL TAB 3 WEB DEV--*/
