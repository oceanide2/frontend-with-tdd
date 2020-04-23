describe('App.ClickCountView', () => {
  let clickCounter, updateEl, view;
  beforeEach(() => {
    clickCounter = App.ClickCounter();
    updateEl = document.createElement('span');
    view = App.ClickCountView(clickCounter, updateEl);
  });

  describe('네거티브 테스트', () => {
    it('clickCounter를 주입하지 않으면 에러를 던진다', () => {
      const actual = () => App.ClickCountView(null, updateEl);
      expect(actual).toThrowError(App.ClickCountView.messages.noClickCounter);
    });

    it('updateEl를 주입하지 않으면 에러를 던진다', () => {
      const actual = () => App.ClickCountView(clickCounter, null);
      expect(actual).toThrowError(App.ClickCountView.messages.noUpdateEl);
    });
  });
  describe('updateView()', () => {
    it('ClickCount의 getValue() 값을 출력한다', () => {
      const counterValue = clickCounter.getValue();
      view.updateView();
      expect(updateEl.innerHTML).toBe(counterValue.toString());
    });
  });

  describe('increaseAndUpdateView()', () => {
    it('ClickCounter의 increase를 실행한다', () => {
      spyOn(clickCounter, 'increase');
      view.increaseAndUpdateView();
      expect(clickCounter.increase).toHaveBeenCalled();
    });
    it('updateView를 실행한다', () => {
      spyOn(view, 'updateView');
      view.increaseAndUpdateView();
      expect(view.updateView).toHaveBeenCalled();
    });
  });
});
