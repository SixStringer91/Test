const HEADER = 'header';
const FOOTER = 'footer';
const burger = document.getElementById('menu-toogle');
const sidebar = document.querySelector('.header-tabs-wrapper');
const footerButtons = [].filter.call(document.querySelectorAll('a'), (el) => el.closest('.footer-tabs-item'));
const headerButtons = [].filter.call(document.querySelectorAll('a'), (el) => el.closest('.header-tabs-item'));

const itemHandler = ({ e, arr, otherArr, type }) => {
  if (!e.classList.contains('tabs-active')) {
    const tabItem = e.closest(`.${type}-tabs-item`);
    arr.forEach((item) => {
      const tabItemToRemove = item.closest(`.${type}-tabs-item`);
      if (tabItemToRemove.classList.contains('tabs-active')) {
        tabItemToRemove.classList.remove('tabs-active');
      };
    });
    tabItem.classList.add('tabs-active');
    if (otherArr) {
      const otherElement = otherArr.find((el) => el.innerHTML === e.innerHTML);
      itemHandler({
        e: otherElement,
        arr: otherArr,
        type: type === HEADER
          ? FOOTER
          : HEADER
      });
    }
  }
}

const listenersHandler = (otherArr, type) => {
  return (el, _, arr) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const obj = {
        e: e.target,
        arr,
        otherArr,
        type
      };
      itemHandler(obj)
    });
  }
}

const burgerHandler = (e) => {
  e.preventDefault();
  if (sidebar.classList.contains('visible')) {
    sidebar.classList.remove('visible');
    burger.classList.remove('chosen');
    return
  };
  sidebar.classList.add('visible');
  burger.classList.add('chosen');
};

const init = () => {
  headerButtons.forEach(listenersHandler(footerButtons, HEADER));
  footerButtons.forEach(listenersHandler(headerButtons, FOOTER));
  burger.addEventListener('click', burgerHandler);
};

document.addEventListener('DOMContentLoaded', init)
