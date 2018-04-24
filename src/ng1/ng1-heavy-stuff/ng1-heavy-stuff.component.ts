declare var require: any;

require("@progress/kendo-ui/js/kendo.numerictextbox.js");
require("@progress/kendo-ui/js/kendo.slider.js");

class Ng1HeavyController {
    arrayNumbers: Array<string> = [];
    arrayItems: Array<string> = [];
  
    constructor() {
      console.log('yey heavy');
  
      for (var i = 0; i < 10000; i++) {
        this.arrayNumbers.push('_' + i);
      }
  
      this.arrayItems.push(new Array(1000000).join('x'));
    }
  }
  
  export const Ng1HeavyComponent = {
    template: `
    <div class="ng1-border">
      <label>ng1-heavy.component</label>
      <span>***ng1 heavy component***</span>
      <input kendo-numeric-text-box k-min="0" k-max="100" k-ng-model="value" style="width: 100%;" />
      <div kendo-slider k-min="0" k-max="100" k-ng-model="value"></div>
      <div ng-repeat="number in $ctrl.arrayNumbers">
          <input type="text" class="form-control" placeholder="{{number}}">
      </div>
    </div>
    `,
    controller: Ng1HeavyController
  };
  