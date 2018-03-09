'use strict';

angular.module('phonecatApp').component('ng1HeavyStuff', {
    template: '<div class="ng1-border"><div ng-repeat="number in $ctrl.arrayNumbers"><input type="text" class="form-control" placeholder="{{number}}"></div></div>',
    controller: ['Phone',
        function PhoneListController(Phone) {
            var vm = this;

            vm.arrayNumbers = [];
            vm.arrayItems = [];

            vm.$onInit = onInit;
            vm.$onDestroy = onDestroy;

            function onInit() {
                for (var i = 0; i < 1000; i++) {
                    vm.arrayNumbers.push('_' + i);
                }

                vm.arrayItems.push(new Array(1000000).join('x'));
            }

            function onDestroy() {
                console.log('ng1 on destroy...');
            }
        }
    ]
});
