const display = document.querySelectorAll('.favourites-addtocart');
const shopItem = document.querySelectorAll('.shop__item');

// const changeDisplayVisibile = function () {
//   display.style.display = 'flex';
//   console.log('display visible');
// };

// const changeDisplayHidden = function () {
//   display.style.display = 'none';
//   console.log('display hidden');
// };

shopItem.forEach((item, i) => {
  item.addEventListener('mouseenter', () => {
    display[i].style.display = 'flex';
  });
  item.addEventListener('mouseleave', () => {
    display[i].style.display = 'none';
  });
});
