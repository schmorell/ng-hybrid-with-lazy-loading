import { Ng1TestComponent } from '../ng1/ng1-test/ng1-test.component';

declare var angular: any;

export const PhonecatAppModule = angular.module('phonecatApp', []);

PhonecatAppModule.component('ng1Test', Ng1TestComponent);

