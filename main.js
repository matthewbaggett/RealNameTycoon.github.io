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

module.exports = "<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-125357957-1\"></script>\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<mat-toolbar color=\"primary\" fxLayout=\"row\" fxShow.xs=\"false\" fxShow.sm=\"false\" fxShow.md=\"true\" fxShow.lg=\"true\" fxShow.xl=\"true\">\r\n    <span fxFlex=\"50\" class=\"toolBarTitle\">Real Name Tycoon</span>\r\n    <div fxLayoutAlign=\"end stretch\"  fxFlex=\"50\" ><button mat-button (click)=\"openUpdateDialog()\"><b class=\"toolBarText\">Updated 09/08/2018</b></button></div>\r\n\r\n</mat-toolbar>\r\n\r\n<mat-toolbar color=\"primary\" fxLayout=\"row\"  fxShow.xs=\"true\" fxShow.sm=\"true\" fxShow.md=\"false\" fxShow.lg=\"false\" fxShow.xl=\"false\">\r\n    <span fxFlex=\"50\"  class=\"toolBarTitle\">Real Name Tycoon</span>\r\n    <div fxFlex=\"50\" fxLayoutAlign=\"end stretch\"><button  mat-button (click)=\"openUpdateDialog()\"><b class=\"toolBarText\">Updates</b></button></div>\r\n\r\n</mat-toolbar>\r\n\r\n\r\n<div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n    <div fxFlex=\"100\">\r\n        <mat-card>\r\n            <form class=\"calculatorForm\">\r\n                <mat-form-field>\r\n                    <input (input)=\"currentLevelValueOnInput($event)\" id=\"currentLevel\" [(value)]=\"currentLevel\" autocomplete=\"off\" required matInput type=\"number\" placeholder=\"Current Level\" min=\"1\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input (input)=\"currentLevelExpOnInput($event)\" id=\"currentLevelExp\" [(value)]=\"currentLevelExp\" autocomplete=\"off\"  matInput type=\"number\" placeholder=\"Current Level Exp\" min=\"10\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input (input)=\"targetLevelOnInput($event)\" id=\"targetLevel\" [(value)]=\"targetLevel\" autocomplete=\"off\" required matInput type=\"number\" placeholder=\"Target Level\" min=\"2\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input (input)=\"vouchersPerRunOnInput($event)\" id=\"vouchersPerRun\" [(value)]=\"vouchersPerRun\" autocomplete=\"off\"  matInput type=\"number\" placeholder=\"Vouchers Per Run\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input (input)=\"expPerRunOnInput($event)\" id=\"expPerRun\" [(value)]=\"expPerRun\" autocomplete=\"off\"  matInput type=\"number\" placeholder=\"Exp Per Run\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <mat-select required (valueChange)=\"runCalculator($event)\" placeholder=\"Voucher Type\" [(value)]=\"defaultVoucherSelected\">\r\n                        <mat-optgroup *ngFor=\"let group of voucherGroups\" [label]=\"group.name\"\r\n                                      [disabled]=\"group.disabled\">\r\n                            <mat-option *ngFor=\"let voucher of group.vouchers\" [value]=\"voucher.value\">\r\n                                {{voucher.viewValue}}\r\n                            </mat-option>\r\n                        </mat-optgroup>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n\r\n                <div class=\"premiumDiscordCheckboxes\">\r\n                    <mat-checkbox [(value)]=\"premiumValue\" (change)=\"onPremiumChange($event)\" fxFlex=\"50\">Premium</mat-checkbox>\r\n                    <mat-checkbox [(value)]=\"discordValue\" (change)=\"onDiscordChange($event)\" fxFlex=\"50\">Discord Link</mat-checkbox>\r\n                </div>\r\n\r\n            </form>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"100\">\r\n        <mat-accordion>\r\n\r\n            <mat-expansion-panel [expanded]=\"true\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        Result\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <form class=\"calculatorForm\">\r\n                    <mat-form-field>\r\n                        <div matTooltip=\"Copy to clipboard\" matTooltipPosition=\"left\" (click)=\"copyToClipboardVouchersNeeded()\">\r\n                            <input matTooltip=\"Click to copy to clipboard\" class=\"copyToClipboardMouseOnHove\" disabled matInput type=\"text\" placeholder=\"Vouchers Needed\" value=\"{{(vouchersNeeded)}}\">\r\n                        </div>\r\n\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <input disabled matInput type=\"text\" placeholder=\"Exp Needed\" value=\"{{expNeeded}}\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <input disabled matInput type=\"text\" placeholder=\"Number of Runs\" value=\"{{numberOfRuns}}\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <input disabled matInput type=\"text\" placeholder=\"Voucher Worth\" value=\"{{defaultVoucherSelected * premiumValue * discordValue | number}}\">\r\n                    </mat-form-field>\r\n\r\n\r\n                </form>\r\n            </mat-expansion-panel>\r\n\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                        How to use\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n\r\n                <div>\r\n                <mat-tab-group style=\"display: flex;\">\r\n                    <mat-tab label=\"Simple Use\">\r\n                        <mat-list style=\"overflow: hidden\">\r\n                            <mat-list-item>\r\n                                <h4 style=\"flex: 25\">Current Level</h4>\r\n                                <h3 style=\"flex: 90\" matSubheader>Current job level. (min: 1)</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <h4 style=\"flex: 25\">Target Level</h4>\r\n                                <h3 style=\"flex: 90\" matSubheader>The level you want to achieve. (min:2)</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <h4 style=\"flex: 25\">Voucher Type</h4>\r\n                                <h3 style=\"flex: 90\" matSubheader>Some vouchers like Train have \"sub-voucher\" categories.</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <h4 style=\"flex: 25\">Premium</h4>\r\n                                <h3 style=\"flex: 90\" matSubheader>Toggle this if you're premium.</h3>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <h4 style=\"flex: 25\">Discord Link</h4>\r\n                                <h3 style=\"flex: 90\" matSubheader>Toggle this if you have your discord linked with the server.</h3>\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                    </mat-tab>\r\n\r\n\r\n                    <mat-tab label=\"Advanced Use\">\r\n\r\n\r\n                        <h4>Current Level Exp</h4>\r\n                        <p>Min: 5</p>\r\n                        <p>Exact current job level. This number can be found in the skills menu inside the blue bar of the desired category.</p>\r\n\r\n\r\n                        <h4>Vouchers per Run</h4>\r\n                        <p>Filling this will enable you to see how many runs it will take you to get the necessary vouchers for leveling up to the target Level.</p>\r\n\r\n\r\n                        <h4>Exp per Run</h4>\r\n                        <p>All fields required for it to work.</p>\r\n                        <p>With this option filled it will calculate, together with Vouchers per Run, how many runs it take to get to the target level, <b>assuming you'll end up consuming the vouchers.</b></p>\r\n\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n                </div>\r\n\r\n\r\n            </mat-expansion-panel>\r\n\r\n\r\n\r\n        </mat-accordion>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _updates_dialog_updates_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updates-dialog/updates-dialog.component */ "./src/app/updates-dialog/updates-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.voucherGroups = [
            {
                name: 'Unique',
                vouchers: [
                    { value: 0.2, viewValue: 'Airline' },
                    { value: 0.3, viewValue: 'Casino' },
                    { value: 0.8, viewValue: 'Gym' },
                    { value: 0.2, viewValue: 'Heli Pilot' },
                    { value: 0.6, viewValue: 'Mail' },
                    { value: 2.5, viewValue: 'Medic' }
                ]
            },
            {
                name: 'Garbage',
                vouchers: [
                    { value: 0.15, viewValue: 'Garbage: Garbage' },
                    { value: 0.15, viewValue: 'Garbage: Player' },
                    { value: 0.15, viewValue: 'Garbage: Trucking' }
                ]
            },
            {
                name: 'Police',
                vouchers: [
                    { value: 0.15, viewValue: 'Police: Police' },
                    { value: 0.15, viewValue: 'Police: Player' }
                ]
            },
            {
                name: 'Train',
                vouchers: [
                    { value: 1.2, viewValue: 'Train: Train Conductor' },
                    { value: 0.2, viewValue: 'Train: Strength' },
                    { value: 0.2, viewValue: 'Train: Player' }
                ]
            }
        ];
        this.defaultVoucherSelected = 0.2;
        this.premiumValue = 1;
        this.discordValue = 1;
        this.currentLevel = null;
        this.currentLevelExp = null;
        this.targetLevel = null;
        this.vouchersPerRun = null;
        this.expPerRun = null;
        this.expNeeded = null;
        this.vouchersNeeded = null;
        this.numberOfRuns = null;
    }
    AppComponent.prototype.openUpdateDialog = function () {
        var dialogRef = this.dialog.open(_updates_dialog_updates_dialog_component__WEBPACK_IMPORTED_MODULE_2__["UpdatesDialogComponent"], {
            width: '80%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AppComponent.prototype.currentLevelValueOnInput = function (event) {
        if (isNaN(event.target.valueAsNumber)) {
            this.currentLevel = null;
        }
        else {
            this.currentLevel = event.target.valueAsNumber;
            if (this.currentLevel >= this.targetLevel) {
                this.targetLevel = this.currentLevel + 1;
            }
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    };
    AppComponent.prototype.currentLevelExpOnInput = function (event) {
        if (isNaN(event.target.valueAsNumber)) {
            this.currentLevelExp = null;
        }
        else {
            this.currentLevelExp = event.target.valueAsNumber;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    };
    AppComponent.prototype.targetLevelOnInput = function (event) {
        if (isNaN(event.target.valueAsNumber)) {
            this.targetLevel = null;
        }
        else {
            this.targetLevel = event.target.valueAsNumber;
            if (this.targetLevel <= 2) {
                this.currentLevel = 1;
            }
            else if (this.targetLevel <= this.currentLevel) {
                this.currentLevel = this.targetLevel - 1;
            }
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    };
    AppComponent.prototype.vouchersPerRunOnInput = function (event) {
        if (isNaN(event.target.valueAsNumber)) {
            this.vouchersPerRun = null;
        }
        else {
            this.vouchersPerRun = event.target.valueAsNumber;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    };
    AppComponent.prototype.expPerRunOnInput = function (event) {
        if (isNaN(event.target.valueAsNumber)) {
            this.expPerRun = null;
        }
        else {
            this.expPerRun = event.target.valueAsNumber;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    };
    AppComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    AppComponent.prototype.onPremiumChange = function (event) {
        if (event.checked) {
            this.premiumValue = 1.5;
        }
        else {
            this.premiumValue = 1;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    };
    AppComponent.prototype.onDiscordChange = function (event) {
        if (event.checked) {
            this.discordValue = 1.05;
        }
        else {
            this.discordValue = 1;
        }
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    };
    AppComponent.prototype.calculateFinal = function (from, fromExp, to, voucherRun, expRun) {
        this.expNeeded = null;
        this.vouchersNeeded = null;
        this.numberOfRuns = null;
        if (expRun > 0 && (from == null || from < 1 || fromExp == null || fromExp < 10 || to == null
            || to < 2 || voucherRun == null || voucherRun < 0)) {
            this.expNeeded = "All field required when using Exp per Run";
            this.vouchersNeeded = "All field required when using Exp per Run";
            this.numberOfRuns = "All field required when using Exp per Run";
        }
        else if (from < 1 || from == null || from > to || to < 2 || to == null) {
            this.expNeeded = "Something's wrong. Read how to use guide.";
            this.vouchersNeeded = "Something's wrong. Read how to use guide.";
            this.numberOfRuns = "Something's wrong. Read how to use guide.";
        }
        else {
            var expTotal = 0;
            if (fromExp > 0) {
                for (var i = from; i <= to; i++) {
                    expTotal += i * 5;
                }
            }
            else {
                for (var i = from; i <= to; i++) {
                    expTotal += i * 5;
                }
                expTotal -= 10;
            }
            expTotal = expTotal - fromExp;
            this.expNeeded = expTotal;
            var voucherWorth = this.defaultVoucherSelected * this.premiumValue * this.discordValue;
            if (expRun > 0 && expRun != null) {
                var expRunVouchersNeeded = 0;
                var expRunNumberOfRuns = 0;
                while (expTotal > 0) {
                    expRunVouchersNeeded += voucherRun;
                    expRunNumberOfRuns++;
                    expTotal = expTotal - (voucherRun * voucherWorth + expRun);
                }
                this.vouchersNeeded = Math.ceil(expRunVouchersNeeded);
                this.numberOfRuns = Math.ceil(expRunNumberOfRuns);
            }
            else if (voucherRun > 0 && voucherRun != null) {
                this.vouchersNeeded = Math.ceil(expTotal / voucherWorth);
                this.numberOfRuns = Math.ceil((expTotal / voucherWorth) / voucherRun);
            }
            else {
                this.vouchersNeeded = Math.ceil(expTotal / voucherWorth);
                this.numberOfRuns = "Vouchers Per Run not specified";
            }
            if (from < 1 || to < 2) {
                this.expNeeded = null;
            }
        }
    };
    AppComponent.prototype.copyToClipboardVouchersNeeded = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.vouchersNeeded;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.openSnackBar("Copied to clipboard", "");
    };
    AppComponent.prototype.runCalculator = function (event) {
        this.defaultVoucherSelected = event;
        this.calculateFinal(this.currentLevel, this.currentLevelExp, this.targetLevel, this.vouchersPerRun, this.expPerRun);
    };
    AppComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 1000,
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _updates_dialog_updates_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./updates-dialog/updates-dialog.component */ "./src/app/updates-dialog/updates-dialog.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_19__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                _updates_dialog_updates_dialog_component__WEBPACK_IMPORTED_MODULE_21__["UpdatesDialogComponent"]
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
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"]
            ],
            entryComponents: [
                _updates_dialog_updates_dialog_component__WEBPACK_IMPORTED_MODULE_21__["UpdatesDialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/updates-dialog/updates-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/updates-dialog/updates-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/updates-dialog/updates-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/updates-dialog/updates-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mat-h2\"><b>Changelog</b></h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <mat-tab-group>\r\n    <mat-tab label=\"09/10/2018\">\r\n      <br>\r\n      <p>Updated UI for a much cleaner look</p>\r\n      <p>Reworked the code for faster performance</p>\r\n      <p>Now calculations are instantly made without the need of a button.</p>\r\n    </mat-tab>\r\n    <mat-tab label=\"09/04/2018\">\r\n      <br>\r\n      <p>Added Exp per run. Now you should be able to precisely Calculate how many exact routes you need combining exp gain during the route + route vouchers.</p>\r\n      <p>Added Discord Link bonus.</p>\r\n      <p>Added sub-vouchers categories to Garbage/Police/Train.</p>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n\r\n\r\n\r\n\r\n\r\n  <mat-divider></mat-divider>\r\n  <p></p>\r\n  <div fxLayout=\"row\">\r\n  <div mat-card-avatar class=\"discordImage\"></div>\r\n  <span fxFlexAlign=\"center\">For feedback on errors or suggestions reach me @Real Name#1251</span>\r\n  </div>\r\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/updates-dialog/updates-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/updates-dialog/updates-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: UpdatesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatesDialogComponent", function() { return UpdatesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdatesDialogComponent = /** @class */ (function () {
    function UpdatesDialogComponent() {
    }
    UpdatesDialogComponent.prototype.ngOnInit = function () {
    };
    UpdatesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updates-dialog',
            template: __webpack_require__(/*! ./updates-dialog.component.html */ "./src/app/updates-dialog/updates-dialog.component.html"),
            styles: [__webpack_require__(/*! ./updates-dialog.component.css */ "./src/app/updates-dialog/updates-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdatesDialogComponent);
    return UpdatesDialogComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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