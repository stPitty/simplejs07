const nav = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));

active = {
  tab: nav[0],
  content: content[0],
};

nav.forEach((tab) => {
  tab.addEventListener('click', () => {
    active.tab.classList.remove('tab_active');
    active.content.classList.remove('tab__content_active');

    const index = nav.indexOf(tab);
    tab.classList.add('tab_active');
    content[index].classList.add('tab__content_active');

    active.tab = tab;
    active.content = content[index]
  })
})