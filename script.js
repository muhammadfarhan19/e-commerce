const sideBar = document.querySelector(".left-side");
const content = document.querySelector(".content");
const display = document.querySelector(".display");
const navLink = document.querySelectorAll(".left-side-link");
const profile = document.querySelector('.display-profile');
const setting = document.querySelector('.display-setting');
const suggestionCard = document.querySelectorAll(".card");
const navBarTitle = document.querySelector(".navbar-title");
const closeDisplay = document.querySelector(".fa-close");


sideBar.addEventListener('click', (e) => {
  if (e.target.className == 'left-side-link') {
    navLink.forEach(el => {
      el.classList.remove('active');
    })
    e.target.classList.add('active');
  }
})

navLink.forEach((el) => {
  el.addEventListener('click', (e) => {

    function fadeIn() {
      display.classList.add('fade');
      setTimeout(() => {
        display.classList.remove('fade');
      }, 500);
    }

    if (e.target.textContent == 'Setting') {
      navBarTitle.innerHTML = 'Setting';
      profile.classList.add('d-none');
      setting.classList.remove('d-none');
      fadeIn()
    }
    if (e.target.textContent == 'Profile') {
      navBarTitle.innerHTML = 'Profile';
      profile.classList.remove('d-none');
      setting.classList.add('d-none');
      fadeIn()
    }
  })
});
