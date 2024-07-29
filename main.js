// Features section
const controls = document.querySelectorAll('.control');
const image = document.getElementById('image');
const heading = document.getElementById('heading');
const paragraph = document.getElementById('paragraph');

const featuresContent = [
  {
    src: "images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
  },
  {
    src: "images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
  },
  {
    src: "images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
  }
];

controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    controls.forEach(c => c.classList.remove('active'));
    control.classList.add('active');
    updateFeatures(index);
  });
});

function updateFeatures(index) {
  const { src, title, text } = featuresContent[index];
  image.src = src;
  heading.textContent = title;
  paragraph.textContent = text;
}

// Smooth toggle function
function toggleVisibilitySmooth(element, duration = 300) {
  if (element.style.maxHeight) {
    element.style.transition = `max-height ${duration}ms ease-out`;
    element.style.maxHeight = null;
  } else {
    element.style.transition = `max-height ${duration}ms ease-in`;
    element.style.maxHeight = element.scrollHeight + "px";
  }
}

// FAQ section
const faqItems = document.querySelectorAll('.text');
const dropMenus = document.querySelectorAll('.drop-down-text');

faqItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove a classe 'active' de todos os itens
    faqItems.forEach((el, i) => {
      if (i !== index) {
        dropMenus[i].style.maxHeight = null;
        faqItems[i].classList.remove('active');
      }
    });
    // Alterna a classe 'active' no item clicado e ajusta a altura
    if (dropMenus[index].style.maxHeight) {
      dropMenus[index].style.maxHeight = null;
      item.classList.remove('active');
    } else {
      toggleVisibilitySmooth(dropMenus[index]);
      item.classList.add('active');
    }
  });
});


// Form validation
function validateForm() {
  const email = document.getElementById("email");
  const alert = document.getElementById("alert");
  const form = document.getElementById("formbox");
  const error = document.getElementById("img");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    email.style.border = "2px solid hsl(231, 69%, 60%)";
    email.style.borderBottom = "25px solid hsl(231, 69%, 60%)";
    alert.textContent = "";
    error.style.opacity = "0";
    form.reset();
    return true;
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    email.style.border = "2px solid hsl(0, 94%, 66%)";
    email.style.borderBottom = "25px solid hsl(0, 94%, 66%)";
    alert.textContent = "Whoops, make sure it's an email";
    error.style.opacity = "1";
    return false;
  }
}

// Mobile Navigation
const mobileNav = document.getElementById("mobileNav");
const mobileMenu = document.getElementById("mobileMenu");
const logo = document.getElementById("logo");

mobileMenu.addEventListener('click', () => {
  const isMenuOpen = mobileNav.style.display === "block";
  mobileNav.style.display = isMenuOpen ? "none" : "block";
  mobileMenu.src = isMenuOpen ? "images/icon-hamburger.svg" : "images/icon-close.svg";
  logo.style.filter = isMenuOpen ? "invert(0)" : "invert(1) brightness(100%)";
  mobileMenu.style.filter = isMenuOpen ? "invert(0)" : "invert(0)";
});
