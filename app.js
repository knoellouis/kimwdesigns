const display = document.querySelectorAll('.sizes-addtocart');
const shopItem = document.querySelectorAll('.shop__item');
const shopItemImg = document.querySelectorAll('.shop__item--img');
const expand = document.querySelectorAll('.expand');
const size = document.querySelectorAll('.size');
const hearts = document.querySelectorAll('.heart');
const heartsFilled = document.querySelectorAll('.heart-filled');

// const sizes = [xs.textContent, s.textContent, m.textContent, l.textContent];

// shopItem.forEach((item, i) => {
//   item.addEventListener('mouseenter', () => {
//     display[i].style.display = 'flex';
//   });
//   item.addEventListener('mouseleave', () => {
//     display[i].style.display = 'none';
//   });
// });

hearts.forEach((h, i) => {
  h.addEventListener('click', () => {
    heartsFilled[i].classList.remove('heart-filled-hidden');
  });
});

heartsFilled.forEach((hf, i) => {
  hf.addEventListener('click', () => {
    heartsFilled[i].classList.add('heart-filled-hidden');
  });
});

shopItemImg.forEach((img, i) => {
  img.addEventListener('mouseenter', () => {
    expand[i].style.display = 'block';
  });

  img.addEventListener('mouseleave', () => {
    expand[i].style.display = 'none';
  });
});

size.forEach((s, i) => {
  s.addEventListener('click', () => {
    size[i].classList.toggle('size-active');
  });
});
