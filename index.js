const dynamicImage = document.querySelector('.dynamic-image');
const firstImage = document.querySelector('.first-image');
const secondImage = document.querySelector('.second-image');
const thirdImage = document.querySelector('.third-image');
const fourthImage = document.querySelector('.fourth-image');

firstImage.addEventListener('click', (e) => {
  e.preventDefault();
  dynamicImage.innerHTML = '';
  dynamicImage.innerHTML = `<img class='1' src='images/1.png' alt='' />`;
});

secondImage.addEventListener('click', (e) => {
  e.preventDefault();
  dynamicImage.innerHTML = '';
  dynamicImage.innerHTML = `<img class="second-image" src="images/2.png" alt="" />`;
});

thirdImage.addEventListener('click', (e) => {
  e.preventDefault();
  dynamicImage.innerHTML = '';
  dynamicImage.innerHTML = `<img class="third-image" src="images/3.png" alt="" />`;
});

fourthImage.addEventListener('click', (e) => {
  e.preventDefault();
  dynamicImage.innerHTML = '';
  dynamicImage.innerHTML = `<img class="fourth-image" src="images/4.png" alt="" />`;
});
