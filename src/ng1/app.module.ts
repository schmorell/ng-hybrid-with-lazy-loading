import { Ng1TestComponent } from '../ng1/ng1-test/ng1-test.component';
import { Ng1HeavyComponent } from './ng1-heavy-stuff/ng1-heavy-stuff.component';

declare var require: any;

var jquery = require("jquery");

(<any>window).jQuery = jquery;

var angular = require("angular");

require("@progress/kendo-ui/js/kendo.angular.js");

export const PhonecatAppModule = angular.module('phonecatApp', ['kendo.directives']);

PhonecatAppModule.component('ng1Test', Ng1TestComponent);
PhonecatAppModule.component('ng1Heavy', Ng1HeavyComponent);

