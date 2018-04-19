import { Ng1TestComponent } from '../ng1/ng1-test/ng1-test.component';

// import jQuery from "jquery";
// (<any>window).jQuery = jQuery;

// import * as jQuery from "jquery";
// (<any>window).jQuery = jQuery;

import 'angular';

import "@progress/kendo-ui/js/kendo.angular.js";
import '@progress/kendo-ui/js/kendo.datepicker.js';
import "@progress/kendo-ui/css/web/kendo.bootstrap-v4.min.css";

declare const angular: any;

export const PhonecatAppModule = angular.module('phonecatApp', ['kendo.directives']);

PhonecatAppModule.component('ng1Test', Ng1TestComponent);

