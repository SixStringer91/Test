const burger = document.getElementById('menu-toogle');
const sidebar = document.querySelector('.header-tabs-wrapper')

const headerButtons = [].filter.call(document.querySelectorAll('a'), (el) => el.closest('.header-tabs-item'))
headerButtons.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.classList.contains('tabs-active')) {
      const tabItem = e.target.closest('.header-tabs-item');
      headerButtons.forEach((item) => {
        const tabItemToRemove = item.closest('.header-tabs-item');
        if (tabItemToRemove.classList.contains('tabs-active')) {
          tabItemToRemove.classList.remove('tabs-active');
        }
      });
      tabItem.classList.add('tabs-active');
    }
  });
});

burger.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(sidebar.classList.contains('visible'))
  if (sidebar.classList.contains('visible')) {
    sidebar.classList.remove('visible');
    burger.classList.remove('chosen');
    return
  };
  sidebar.classList.add('visible');
  burger.classList.add('chosen');
})