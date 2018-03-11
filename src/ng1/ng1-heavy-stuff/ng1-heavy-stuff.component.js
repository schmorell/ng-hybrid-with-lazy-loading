'use strict';

angular.module('phonecatApp').component('ng1HeavyStuff', {
    bindings: {
        person: '<',
        onPersonSave: "&"
    },
    template: `
    <div class="ng1-border">
        <label>ng1-heavy-stuff.component</label>
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" ng-model="$ctrl.person.name">
        </div>
        <div class="form-group">
            <label>Nachname</label>
            <input type="text" class="form-control" ng-model="$ctrl.person.surname">
        </div>
        <button type="button" class="btn btn-primary" ng-click="$ctrl.onSave()">Save</button>
        <hr />
        <div>
            <div ng-repeat="number in $ctrl.arrayNumbers">
                <input type="text" class="form-control" placeholder="{{number}}">
            </div>
        </div>
    </div>'
    `,
    controller: ['Phone',
        function PhoneListController(Phone) {
            var vm = this;

            vm.arrayNumbers = [];
            vm.arrayItems = [];

            vm.$onInit = onInit;
            vm.$onDestroy = onDestroy;

            vm.onSave = onSave;

            function onInit() {
                for (var i = 0; i < 10000; i++) {
                    vm.arrayNumbers.push('_' + i);
                }

                vm.arrayItems.push(new Array(1000000).join('x'));
            }

            function onSave() {
                vm.person.id = -1;
                var dataModel = vm.person;
                vm.onPersonSave(dataModel);                
            }

            function onDestroy() {
                console.log('ng1 on destroy...');
            }
        }
    ]
});
