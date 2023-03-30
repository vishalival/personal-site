
// Get all the buttons
const buttons = document.querySelectorAll('.button');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle the clicked class on the button
    button.classList.toggle('clicked');
  });
});

const experiences = document.querySelectorAll('.experience');
const colors = ['color1', 'color2', 'color3', 'color4'];

experiences.forEach((experience, index) => {
  experience.classList.add(colors[index]);
});