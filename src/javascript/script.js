// CREATING A DARK THEME FOR WEBSITE
let icon = document.getElementById('icon');

// WHEN ICON CLICKED TOGGLE CLASS AND CHANGE ICON
icon.onclick = () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = '../src/img/moon.png';
  } else {
    icon.src = '../src/img/sun.png';
  }
};
