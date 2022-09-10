const navBar = document.querySelector('.left-side');
const navLink = document.querySelectorAll('.left-side-link');
const suggestionCard = document.querySelectorAll('.card');

navBar.addEventListener('click', (e) => {
  if (e.target.className == 'left-side-link') {
    navLink.forEach(el => {
      el.classList.remove('active');
    })
    e.target.classList.add('active');
  }
})

suggestionCard.forEach(el => {
  el.addEventListener('mouseover', () => {
    
  })
})