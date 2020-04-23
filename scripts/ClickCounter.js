var App = App || {};

App.ClickCounter = function () {
  let value = 0;
  return {
    getValue() {
      return value;
    },
  };
};
