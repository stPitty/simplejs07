const button = document.querySelector('.dropdown__value');

button.addEventListener('click', () => {
  document.querySelector('.dropdown__list').classList.add('dropdown__list_active');
})

const links = Array.from(document.querySelectorAll('.dropdown__link'));

links.forEach((link) => {
  link.href = '#';
  link.addEventListener('click', () => {
    button.textContent = link.textContent;
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
  })
})

