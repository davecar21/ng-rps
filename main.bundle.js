webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: Lato;\n  display: inline-block;\n}\ni{\n  display: inline-block;\n}\nhtml,\nbody{\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n.formCont, .playCont {\n  height: 100px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  display: block;\n}\n.formBody, .playArea, .playerChoose, .result{\n    margin: 0 auto;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    display: block;\n  }\n.nameInput{\n    width: 85px;\n    margin-left: 10px;\n  }\n.btnMainMenu{\n    background: #400080;\n    top: 15px;\n    left: 15px;\n    position: absolute;\n    font-size: 18px;\n    color:white;\n    font-weight: bold;\n    padding: 5px 15px;\n    border-radius: 15px;\n    cursor:pointer;\n  }\n.player{\n    width: 45%;\n    float: left;\n    position: relative;\n    color: #000d33;\n  }\n.computer{\n    width: 45%;\n    float: left;\n    position: relative;\n    color:#630303;\n  }\n#playerScore, #enemyScore{\n    display: inline;\n    padding: 10px 20px;\n    margin-left:20px;\n    border-radius: 30px;\n    color: white;\n    position: absolute;\n    top: 0;\n  }\n#playerScore{\n    background: #002db3;\n  }\n#enemyScore{\n    background: #b30000;\n  }\n.playerChoose{\n  margin-top: 75px;\n}\n#enemyChoose{\n    color:#b30000;\n    font-size: 70px;\n  }\n#playerChoose{\n    color:#002db3;\n    font-size: 70px;\n  }\n.playerChoose i{\n    width: 30%;\n    margin: 0 auto;\n    font-size: 90px;\n    color: #262626;\n  }\n.playerChoose i:hover{\n    cursor: pointer;\n    font-size: 95px;\n    color: #a6a6a6;\n  }\n.playerChoose h2{\n    display: inline-block;\n    width: 100%;\n  }\n.result{\n    margin: 0 auto 0 auto;\n    display: inline-block;\n  }\n.result .draw,.playerWins,.enemyWins{\n    display: inline-block;\n  }\n.result .draw{\n    color:gray;\n  }\n.result .playerWins{\n    color:#002DB3;\n  }\n.result .enemyWins{\n    color:#B30000;\n  }\n.result .resetScore{\n    font-size: 15px;\n    color:green;\n    margin: 5px 0px;\n    padding: 0;\n  }\n.result .resetScore:hover{\n    cursor: pointer;\n    color: #024c00;\n    font-size: 17px;\n  }\n.rps-title{\n    font-size:1.2em;\n    display: block;\n  }\n.progLoader{\n    margin: 0 auto\n\n  }\n@media screen and (min-width: 1000px){\n    .playArea{\n      width: 50%;\n    }\n    .playerChoose i{\n      width: 10%;\n    }\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n\n<div *ngIf=\"!playerName\" class=\"formCont\">\n  <form [formGroup]=\"rpsForm\" (ngSubmit)=\"submit(rpsForm.value)\" class=\"formBody\">\n    <p>Hi, </p>\n    <mat-form-field class=\"nameInput\">\n    <input matInput formControlName=\"playerName\" placeholder=\"Your Name\" maxlength=\"8\" />\n  </mat-form-field>\n    <br/>\n    <p class=\"rps-title\">Let's Play, Rock Paper Scissor. </p>\n    <br/>\n    <button type=\"submit\" mat-raised-button color=\"primary\" \n    [disabled]=\"!rpsForm.valid\">Let's Play</button>\n  </form>\n  \n</div>\n\n<div *ngIf=\"playerName\" class=\"playCont\">\n  <div class=\"btnMainMenu\" (click)=\"mainMenu(); rpsForm.reset()\">\n    <i class=\"fa fa-arrow-circle-left\" aria-hidden=\"true\"> Main Menu</i>\n  </div>\n  <div class=\"playArea\">\n    <p class=\"rps-title\">Rock Paper Scissor</p>\n    <div class=\"player\">\n      <h3>{{playerName}} ss\n        <h1 id=\"playerScore\">{{playerScore}}</h1>\n      </h3>\n    <i *ngIf=\"!loaderStatus; else showLoader\" id=\"playerChoose\" [className]=\"playerChoose\" aria-hidden=\"true\"></i>\n    </div>\n    \n    <div class=\"computer\">\n      <h3>{{enemyName}}\n        <h1 id=\"enemyScore\">{{enemyScore}}</h1>\n      </h3>\n      <i *ngIf=\"!loaderStatus; else showLoader\" id=\"enemyChoose\" [className]=\"enemyChoose\"  aria-hidden=\"true\"></i>\n    </div>\n  </div>\n\n  <div class=\"result\" *ngIf=\"!loaderStatus\">\n    <h2 *ngIf=\"winResult==1\" class=\"playerWins\">You Win!\n      <h4 class=\"resetScore\" (click)=\"resetScore()\">Reset Score?</h4></h2>\n    <h2 *ngIf=\"winResult==2\" class=\"enemyWins\">You Lose!\n      <h4 class=\"resetScore\" (click)=\"resetScore()\">Reset Score?</h4></h2>\n    <h2 *ngIf=\"winResult==0\" class=\"draw\">Draw!\n      <h4 class=\"resetScore\" (click)=\"resetScore()\">Reset Score?</h4>\n    </h2>\n  </div>\n\n  <div class=\"playerChoose\" *ngIf=\"!loaderStatus\">\n    <h2>Choose Your Weapon</h2>\n    <i (click)=\"rpsSelect(0)\" class=\"fa fa-hand-rock-o\" aria-hidden=\"true\"></i>\n    <i (click)=\"rpsSelect(1)\" class=\"fa fa-hand-paper-o\" aria-hidden=\"true\"></i>\n    <i (click)=\"rpsSelect(2)\" class=\"fa fa-hand-scissors-o\" aria-hidden=\"true\"></i>\n  </div>\n</div>\n\n\n<ng-template #showLoader>\n      <mat-spinner [diameter]=\"70\" class=\"progLoader\"></mat-spinner>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.rpsOption = [0, 1, 2]; //0-rock 1-paper 2-scissor
        this.rpsCSS = ["fa fa-hand-rock-o", "fa fa-hand-paper-o", "fa fa-hand-scissors-o"];
        this.playerChoose = "fa fa-hand-rock-o";
        this.enemyChoose = "fa fa-hand-rock-o";
        this.playerResult = 0; //0-rock 1-paper 2-scissor
        this.enemyResult = 0; //0-rock 1-paper 2-scissor
        this.enemyName = "Enemy";
        this.playerScore = 0;
        this.enemyScore = 0;
        this.loaderStatus = false;
        this.rpsForm = fb.group({
            playerName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].maxLength(8)])]
        });
    }
    AppComponent.prototype.rpsSelect = function (rps) {
        var _this = this;
        this.enemyResult = this.rpsOption[Math.floor(Math.random() * this.rpsOption.length)];
        this.playerResult = this.rpsOption[rps];
        console.log("player" + this.playerResult + "enemy" + this.enemyResult);
        //Result Calculation
        if (this.enemyResult != this.playerResult) {
            //0-rock 1-paper 2-scissor
            if ((this.enemyResult == 0 && this.playerResult == 2) ||
                (this.enemyResult == 1 && this.playerResult == 0) ||
                (this.enemyResult == 2 && this.playerResult == 1)) {
                setTimeout(function () {
                    _this.winResult = 2;
                    _this.enemyScore += 1;
                }, 400);
            }
            else {
                setTimeout(function () {
                    _this.winResult = 1;
                    _this.playerScore += 1;
                }, 400);
            }
        }
        else {
            this.winResult = 0;
        }
        this.loaderStatus = true;
        this.enemyChoose = this.rpsCSS[this.enemyResult];
        this.playerChoose = this.rpsCSS[rps];
        //Result UI change
        setTimeout(function () {
            _this.loaderStatus = false;
        }, 400);
    };
    AppComponent.prototype.resetScore = function () {
        this.winResult = null;
        this.enemyScore = 0;
        this.playerScore = 0;
    };
    AppComponent.prototype.mainMenu = function () {
        this.resetScore();
        this.playerName = null;
    };
    AppComponent.prototype.submit = function (value) {
        this.playerName = value.playerName;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hello_component__ = __webpack_require__("./src/app/hello.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatProgressSpinnerModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__hello_component__["a" /* HelloComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hello.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], HelloComponent.prototype, "name", void 0);
    HelloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'hello',
            template: "<h1>Hello {{name}}!</h1>",
            styles: ["h1 { font-family: Lato; }"]
        })
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map