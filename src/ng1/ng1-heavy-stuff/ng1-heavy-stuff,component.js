'use strict';

angular.module('phonecatApp').component('ng1HeavyStuff', {
    template: '<div class="ng1-border"><div ng-repeat="number in $ctrl.arrayNumbers"><input type="text" class="form-control" placeholder="{{number}}"></div></div>',
    controller: ['Phone',
        function PhoneListController(Phone) {
            var vm = this;

            vm.arrayNumbers = [];
            var arrayItems = [];

            vm.$onInit = onInit;

            function onInit() {
                for (var i = 0; i < 10000; i++) {
                    vm.arrayNumbers.push(i);
                }

                arrayItems.push(new Array(1000000).join('x'));
            }
        }
    ]
});
