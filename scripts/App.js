(function () {
  const clickCounter = App.ClickCounter();
  const updateEl = document.querySelector('#counter-display');
  const triggerEl = document.querySelector('#btn-increase');
  const view = App.ClickCountView(clickCounter, { updateEl, triggerEl });
  view.updateView();
})();
