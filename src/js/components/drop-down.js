const itemDropDown = document.querySelectorAll('.menu__item.drop, .drop__item.drop__item--more');

itemDropDown.forEach((buttonItem) => {
  const itemList = buttonItem.querySelector('.drop__down');
  const dropDownLink = buttonItem.querySelector('.menu__link, .drop__link');

  dropDownLink.addEventListener('click', (e) => {
    e.preventDefault();
    itemList.classList.toggle('drop__down--active');
  });
});
