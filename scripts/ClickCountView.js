var App = App || {};

App.ClickCountView = function (clickCounter, updateEl) {
  if (!clickCounter)
    throw new Error(App.ClickCountView.messages.noClickCounter);
  if (!updateEl) throw new Error(App.ClickCountView.messages.noUpdateEl);

  return {
    updateView() {
      updateEl.innerHTML = clickCounter.getValue();
    },
  };
};

App.ClickCountView.messages = {
  noClickCounter: 'clickCounter를 주입해야 합니다',
  noUpdateEl: 'updateEl를 주입해야 합니다.',
};
