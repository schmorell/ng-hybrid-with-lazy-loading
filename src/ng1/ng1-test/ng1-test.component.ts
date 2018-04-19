class Ng1TestController {
  arrayNumbers: Array<string> = [];
  arrayItems: Array<string> = [];

  constructor() {
    console.log('yey');

    for (var i = 0; i < 10000; i++) {
      this.arrayNumbers.push('_' + i);
    }

    this.arrayItems.push(new Array(1000000).join('x'));
  }
}

export const Ng1TestComponent = {
  template: `
  <div class="ng1-border">
    <label>ng1-test.component</label>
    <span>***ng1 test component***</span>
    <input kendo-color-picker k-palette="'websafe'" ng-model="color2" />
    <div ng-repeat="number in $ctrl.arrayNumbers">
        <input type="text" class="form-control" placeholder="{{number}}">
    </div>
  </div>
  `,
  controller: Ng1TestController
};
