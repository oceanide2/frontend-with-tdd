describe('App.ClickCountView', () => {
  let clickCounter, updateEl, view;
  beforeEach(() => {
    clickCounter = App.ClickCounter();
    updateEl = document.createElement('span');
    view = App.ClickCountView(clickCounter, updateEl);
  });
  describe('updateView()', () => {
    it('ClickCount의 getValue() 값을 출력한다', () => {
      const counterValue = clickCounter.getValue();
      view.updateView();
      expect(updateEl.innerHTML).toBe(counterValue.toString());
    });
  });
});
