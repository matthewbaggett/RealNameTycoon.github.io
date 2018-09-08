(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\">\r\n<mat-toolbar color=\"primary\" fxLayout=\"row\" fxShow.xs=\"false\" fxShow.gt-sx=\"true\">\r\n    <span fxFlex=\"80\" class=\"toolBarTitle\">Real Name Tycoon</span>\r\n    <button fxFlex=\"20\" mat-button ><b class=\"toolBarText\">Updated 09/08/2018</b></button>\r\n</mat-toolbar>\r\n\r\n<mat-toolbar color=\"primary\" fxLayout=\"row\"  fxShow.xs=\"true\" fxShow.gt-xs=\"false\">\r\n    <span fxFlex=\"50\" class=\"toolBarTitle\">Real Name Tycoon</span>\r\n    <button fxFlex=\"50\" mat-button ><b class=\"toolBarText\">09/08/2018</b></button>\r\n</mat-toolbar>\r\n\r\n\r\n<div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n    <div fxFlex=\"100\">\r\n        <mat-card>\r\n            <form class=\"calculatorForm\">\r\n                <mat-form-field>\r\n                    <input autocomplete=\"off\"  required matInput type=\"number\" placeholder=\"Current Level\" min=\"1\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input autocomplete=\"off\"  matInput type=\"number\" placeholder=\"Current Level Exp\" min=\"10\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input autocomplete=\"off\" required matInput type=\"number\" placeholder=\"Target Level\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input autocomplete=\"off\"  matInput type=\"number\" placeholder=\"Vouchers Per Run\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input autocomplete=\"off\"  matInput type=\"number\" placeholder=\"Exp Per Run\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <mat-select placeholder=\"Voucher Type\" [(value)]=\"defaultVoucherSelected\">\r\n                        <mat-option *ngFor=\"let voucher of mainVoucherTypes\" [value]=\"voucher.value\">\r\n                            {{voucher.viewValue}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n                <div class=\"premiumDiscordCheckboxes\">\r\n                    <mat-checkbox>Premium</mat-checkbox>\r\n                    <mat-checkbox style=\"margin-left: 20px\">Discord Link</mat-checkbox>\r\n                </div>\r\n\r\n            </form>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\">\r\n        <mat-accordion>\r\n\r\n            <mat-expansion-panel [expanded]=\"true\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Result\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <form class=\"calculatorForm\">\r\n                    <mat-form-field>\r\n                        <input disabled matInput type=\"number\" placeholder=\"Vouchers Needed\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <input disabled matInput type=\"number\" placeholder=\"Exp Needed\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <input disabled matInput type=\"number\" placeholder=\"Number of Runs\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <input disabled matInput type=\"number\" placeholder=\"Voucher Worth\">\r\n                    </mat-form-field>\r\n\r\n\r\n                </form>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        How to use\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n\r\n                <mat-tab-group style=\"display: flex;\">\r\n                    <mat-tab label=\"Simple Use\">\r\n                        <mat-list style=\"overflow: hidden\">\r\n                            <mat-list-item>\r\n                                <h4 style=\"flex: 25\">Current Level</h4>\r\n                                <h3 style=\"flex: 90\" matSubheader>Current job level.</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <h4 style=\"flex: 25\">Current Level</h4>\r\n                                <h3 style=\"flex: 90\" matSubheader>The level you want to achieve.</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <h4 style=\"flex: 25\">Voucher Type</h4>\r\n                                <h3 style=\"flex: 90\" matSubheader>Some vouchers like Train have \"sub-voucher\" categories.</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <h4 style=\"flex: 25\">Premium</h4>\r\n                                <h3 style=\"flex: 90\" matSubheader>Toggle this if you're premium.</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <h4 style=\"flex: 25\">Discord Link</h4>\r\n                                <h3 style=\"flex: 90\" matSubheader>Toggle this if you have your discord linked with the server.</h3>\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                    </mat-tab>\r\n\r\n\r\n                    <mat-tab label=\"Advanced Use\">\r\n\r\n\r\n                        <h4>Current Level Exp</h4>\r\n                        <p>Exact current job level. This number can be found in the skills menu inside the blue bar of the desired category.</p>\r\n\r\n\r\n                        <h4>Vouchers per Run</h4>\r\n                        <p>Filling this will enable you to see how many runs it will take you to get the necessary vouchers for leveling up to the target Level.</p>\r\n\r\n\r\n                        <h4>Exp per Run</h4>\r\n                        <p>With this option filled it will calculate, together with Vouchers per Run, how many runs it take to get to the target level, assuming you'll end up consuming the vouchers.</p>\r\n\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n\r\n\r\n\r\n            </mat-expansion-panel>\r\n\r\n\r\n\r\n        </mat-accordion>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.mainVoucherTypes = [
            { value: '0.2', viewValue: 'Airline' },
            { value: '0.3', viewValue: 'Casino' },
            { value: 'garbage', viewValue: 'Garbage' },
            { value: '0.8', viewValue: 'Gym' },
            { value: '0.1', viewValue: 'Heli Pilot' },
            { value: '0.6', viewValue: 'Mail' },
            { value: '2.5', viewValue: 'Medic' },
            { value: 'police', viewValue: 'Police' },
            { value: 'train', viewValue: 'Train' },
        ];
        this.defaultVoucherSelected = '0.2';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tiago\Documents\GitHub\RealNameTycoon.github.io\angularDev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map