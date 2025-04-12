document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.toggle-button');
  const navUl = document.querySelector('.navbar-links');

  menuToggle.addEventListener('click', function() {
      navUl.classList.toggle('active');
  });

  // Counter 1
  let counter1 = 0;
  const counter1Element = document.getElementById('counter1');
  const interval1 = setInterval(() => {
      if (counter1 < 59) {
          counter1++;
          counter1Element.textContent = counter1 + "+";
      } else {
          clearInterval(interval1);
      }
  }, 50); // Adjust the interval as needed

  // Counter 2
  let counter2 = 0;
  const counter2Element = document.getElementById('counter2');
  const interval2 = setInterval(() => {
      if (counter2 < 49) {
          counter2++;
          counter2Element.textContent = counter2 + "+";
      } else {
          clearInterval(interval2);
      }
  }, 50); // Adjust the interval as needed
});