//----------COLLAPSIBLE SIDEBAR MENU TO JUMP TO SECTIONS OF A PROJECT-----------------
function openNav() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("openBtn").style.marginRight = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
  
  function closeNav() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("openBtn").style.marginRight = "0";
    document.getElementById("main").style.marginRight = "auto";
  }
  //toggle the nav menu to open/close if the arrow or the X button is clicked
  const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');
    }
    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
  }
//-----------------------------DARK TO LIGHT THEME TOGGLE-------------------------------
//icons
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

//theme variables
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
//icon toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

//initial theme check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};

//manual theme switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

//call theme switch on clicking buttons
sunIcon.addEventListener("click", themeSwitch);
moonIcon.addEventListener("click", themeSwitch);


document.addEventListener('DOMContentLoaded', () => {
  //invoke theme check on initial load
  themeCheck();
  //also wait until the full html page has loaded before calling the initApp function is loaded, because the buttons that will wait for user clicks might not be loaded yet
  initApp();
  });
//document.addEventListener('DOMContentLoaded', initApp);

