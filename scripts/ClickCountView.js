var App = App || {};

App.ClickCountView = function (clickCounter, updateEl) {
  return {
    updateView() {
      updateEl.innerHTML = clickCounter.getValue();
    },
  };
};
