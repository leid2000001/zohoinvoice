!function(t){function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/static/frontend/onboarding/dist/",n(n.s=30)}([function(t,n){t.exports=angular},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";n.__esModule=!0;var o=e(35),i=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i.default)(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}()},function(t,n){t.exports="ngMaterial"},function(t,n,e){t.exports=!e(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){"use strict";function o(t,n,e){function o(){return t.get(a.teams())}var i={endpoint:"user/"},a={teams:function(){return i.endpoint+"getSharedTeams/"}};return{getTeams:o}}e.d(n,"a",function(){return u});var i=e(0),a=e.n(i),r=e(21),c=e(7),u=a.a.module("userApi",[r.a,c.a]).factory("UserApi",o).name;o.$inject=["ApiService","DjangoConstants","$q"]},function(t,n,e){"use strict";e.d(n,"a",function(){return a});var o=e(0),i=e.n(o),a=i.a.module("djangoConstants",[]).constant("DjangoConstants",window.djangoConstants||{}).name},function(t,n,e){"use strict";function o(t,n){function e(n){return t.put(c+"apiKey/",n)}function o(){return t.get(u.userAccounts())}function i(n){return t.get(u.userAccounts()+n+"/")}function a(n){return t.delete(u.userAccounts()+n+"/")}function r(n,e){return t.delete(u.userWebhooks(n)+e+"/")}var c=n.base_href,u={userAccounts:function(){return c+"user/"},userWebhooks:function(t){return u.userAccounts()+t+"/webhook/"}};return{getUserAccounts:o,getUserAccount:i,deleteUserAccount:a,deleteUserWebhook:r,submitForm:e}}e.d(n,"a",function(){return c});var i=e(0),a=e.n(i),r=e(7),c=a.a.module("appApi",[r.a]).factory("AppApi",o).name;o.$inject=["$http","DjangoConstants"]},function(t,n){var e=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var o=e(38),i=e(44),a=e(46),r=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(o(t),n=a(n,!0),o(e),i)try{return r(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){"use strict";e.d(n,"a",function(){return l});var o=e(0),i=e.n(o),a=e(3),r=e.n(a),c=e(22),u=e(26),s=e(6),l=i.a.module("appToolbar",[r.a,s.a,u.a]).component("appToolbar",c.a).name},function(t,n,e){"use strict";function o(t){var n=t.extendPalette("blue-grey",{50:"FFFFFF",800:"FFFFFF",contrastDefaultColor:"dark"});t.definePalette("white",n),t.theme("default").primaryPalette("blue-grey",{default:"800"}).accentPalette("red").backgroundPalette("white")}e.d(n,"a",function(){return u});var i=e(0),a=e.n(i),r=e(3),c=e.n(r),u=a.a.module("angularMaterialConfig",[c.a]).config(o).name;o.$inject=["$mdThemingProvider"]},function(t,n,e){"use strict";function o(t){t.defaults.xsrfCookieName="csrftoken",t.defaults.xsrfHeaderName="X-CSRFToken"}e.d(n,"a",function(){return r});var i=e(0),a=e.n(i),r=a.a.module("csrfConfig",[]).config(o).name;o.$inject=["$httpProvider"]},function(t,n,e){"use strict";e.d(n,"a",function(){return r});var o=e(0),i=e.n(o),a=e(28),r=i.a.module("github-app.fourOhFourScreen",[]).component("fourOhFourScreen",a.a).name},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(54),i=e.n(o),a=e(29),r=e(48);e.n(r);a.a.$inject=["$state"];var c={template:i.a,controller:a.a}},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(0),i=e.n(o),a=e(8),r=e(32),c=i.a.module("pipedrive-app.accountListScreen",[a.a]).component("accountListScreen",r.a).name},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(0),i=e.n(o),a=e(8),r=e(34),c=i.a.module("pipedrive-app.accountSettingsScreen",[a.a]).component("accountSettingsScreen",r.a).name},function(t,n){t.exports="ui.router"},function(t,n,e){"use strict";function o(t){function n(n){return t.get(a.endpoint+n)}function e(n,e){return t.post(a.endpoint+n,e)}function o(n,e){return t.patch(a.endpoint+n,e)}function i(n){return t.delete(a.endpoint+n)}var a={endpoint:"/api/"};return{get:n,post:e,patch:o,delete:i}}e.d(n,"a",function(){return r});var i=e(0),a=e.n(i),r=a.a.module("apiService",[]).factory("ApiService",o).name;o.$inject=["$http"]},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(51),i=e.n(o),a=e(23),r=e(57);e.n(r);a.a.$inject=["$location"];var c={template:i.a,controller:a.a,bindings:{toolbarClass:"@",appName:"@",isUserLoggedIn:"<",teams:"<",goHome:"&"}}},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(1),i=e.n(o),a=e(2),r=e.n(a),c=function(){function t(n){i()(this,t),this.$location=n}return r()(t,[{key:"$onInit",value:function(){var t=this.getAppIdFromUrl(),n=this.$location.protocol(),e=this.$location.host();this.appDocUrl=n+"://"+e+"/marketplace/application/"+t}},{key:"getAppIdFromUrl",value:function(){return/applications\/(\d+)\/(.*)/g.exec(this.$location.absUrl())[1]}}]),t}()},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(52),i=e.n(o),a=e(25),r=e(58);e.n(r);a.a.$inject=["UserApi","$window","$location"];var c={template:i.a,controller:a.a,bindings:{appendUrl:"@",currentTeamDomain:"="}}},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(1),i=e.n(o),a=e(2),r=e.n(a),c=function(){function t(n,e,o){i()(this,t),this.UserApi=n,this.$window=e,this.$location=o,this.isUserLoggedIn=!1,this.currentTeam={name:"Select Team"}}return r()(t,[{key:"$onInit",value:function(){var t=this;this.UserApi.getTeams().then(function(n){t.allTeams=n.data.teams,0!=t.allTeams.length&&(t.isUserLoggedIn=!0,n.data.current&&(t.currentTeam=n.data.current,t.currentTeamDomain=t.currentTeam.domain,t.allTeams=t.allTeams.filter(function(n){return n.id!=t.currentTeam.id})))})}},{key:"changeTeam",value:function(t){var n=/(.*\.)?(.+\..+)/g,e=n.exec(this.$location.host()),o=e[e.length-1];if(null==this.appendUrl||""==this.appendUrl)var i=new RegExp(".*"+o+"(.+)"),e=i.exec(this.$location.absUrl()),a=e[1];else var a=this.appendUrl;this.$window.location=this.$location.protocol()+"://"+t.domain+"."+o+a}}]),t}()},function(t,n,e){"use strict";e.d(n,"a",function(){return s});var o=e(0),i=e.n(o),a=e(3),r=e.n(a),c=e(24),u=e(6),s=i.a.module("teamSwitcher",[r.a,u.a]).component("teamSwitcher",c.a).name},function(t,n,e){"use strict";e.d(n,"a",function(){return a});var o=e(1),i=e.n(o),a=function t(){i()(this,t)}},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(53),i=e.n(o),a=e(27),r=e(59),c=(e.n(r),{template:i.a,controller:a.a})},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(1),i=e.n(o),a=e(2),r=e.n(a),c=function(){function t(n){i()(this,t),this.$state=n}return r()(t,[{key:"goHome",value:function(){this.$state.go("accountList")}}]),t}()},function(t,n,e){"use strict";function o(t,n,e,o){t.html5Mode(!0),e.otherwise("/404/"),o.strictMode(!1);var i={name:"accountList",url:"/",component:"accountListScreen"},a={name:"accountSettings",url:"/accounts/{accountId}",component:"accountSettingsScreen"},r={name:"fourOhFour",url:"/404/",component:"fourOhFourScreen"};n.state(i),n.state(a),n.state(r)}Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"pipedriveApp",function(){return g});var i=e(0),a=e.n(i),r=e(20),c=e.n(r),u=e(3),s=e.n(u),l=e(13),d=e(14),m=e(15),f=e(17),p=e(18),h=e(19),v=e(16),g=a.a.module("pipedrive-app",[s.a,c.a,l.a,d.a,m.a,p.a,h.a,v.a]).config(o).component("yellowantPipedriveApp",f.a).name;o.$inject=["$locationProvider","$stateProvider","$urlRouterProvider","$urlMatcherFactoryProvider"]},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(1),i=e.n(o),a=e(2),r=e.n(a),c=function(){function t(n,e,o,a,r){i()(this,t),this.AppApi=n,this.$stateParams=e,this.$mdDialog=o,this.$mdToast=a,this.$state=r}return r()(t,[{key:"$onInit",value:function(){var t=this;this.AppApi.getUserAccounts().then(function(n){t.userAccounts=n.data},function(n){t.userAccounts=null})}},{key:"stateDetails",value:function(t){var n=this;this.AppApi.getStateDetails(t).then(function(t){n.userStates=t.data},function(t){n.userStates=null})}},{key:"deleteAccount",value:function(t){var n=this;this.AppApi.deleteUserAccount(t).then(function(e){n.userAccounts=n.userAccounts.filter(function(n){return n.id!==t}),n.$mdToast.show(n.$mdToast.simple().textContent("Your integration has been successfully removed"))},function(t){console.log("Error is:"),console.log(t),n.$mdToast.show(n.$mdToast.simple().textContent("Unable to remove your account at the moment"))})}},{key:"onDeleteAccount",value:function(t){var n=this;console.log(t);var e=this.$mdDialog.prompt().title("Would you like to remove this pipedrive integration with Yellowant?").textContent("Please type in your victorops handle to confirm: "+t.user_invoke_name).placeholder("victorops-handle").ariaLabel("victorops Handle").clickOutsideToClose(!0).ok("Delete Integration").cancel("Cancel");this.$mdDialog.show(e).then(function(e){e==t.user_invoke_name?n.deleteAccount(t.id):n.onDeleteAccount(t)},function(){})}}]),t}()},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(55),i=e.n(o),a=e(31),r=e(49);e.n(r);a.a.$inject=["AppApi","$stateParams","$mdDialog","$mdToast","$state"];var c={template:i.a,controller:a.a}},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(1),i=e.n(o),a=e(2),r=e.n(a),c=function(){function t(n,e,o,a,r){i()(this,t),this.goBack=function(){this.$state.go("accountList")},this.submitForm=function(){this.AppApi.submitForm({pipedrive_api_token:this.accountDetails.api_token,user_integration:this.$stateParams.accountId}).then(function(t){console.log("success"),this.$mdToast.show(this.$mdToast.simple().textContent(t.data))}.bind(this),function(t){console.log("fail"),this.$mdToast.show(this.$mdToast.simple().textContent("Invalid credentials"))}.bind(this))},this.AppApi=n,this.$stateParams=e,this.$mdDialog=o,this.$mdToast=a,this.$state=r,this.userAccount={}}return r()(t,[{key:"$onInit",value:function(){var t=this;this.$stateParams.accountId?this.AppApi.getUserAccount(this.$stateParams.accountId).then(function(n){t.userAccount=n.data},function(n){t.userAccount=null}):this.userAccount=null}},{key:"deleteAccount",value:function(){var t=this;console.log("deleting"),this.AppApi.deleteUserAccount(this.$stateParams.accountId).then(function(n){t.$state.go("accountList"),t.$mdToast.show(t.$mdToast.simple().textContent("Your integration has been successfully removed"))},function(n){t.$mdToast.show(t.$mdToast.simple().textContent("Unable to remove your account at the moment"))})}},{key:"onDeleteAccount",value:function(){var t=this,n=this.$mdDialog.confirm().title("Would you like to remove this Pipedrive integration with Yellowant?").ariaLabel("pipedrive Handle").clickOutsideToClose(!0).ok("Delete Integration").cancel("Cancel");this.$mdDialog.show(n).then(function(){t.deleteAccount()},function(){})}},{key:"onDeleteWebhook",value:function(t){var n=this,e=this.$mdDialog.confirm().title("Would you like to remove your webhook "+t.id+' for "'+t.repo_full_name+'"?').clickOutsideToClose(!0).ok("Delete Webhook").cancel("Cancel");this.$mdDialog.show(e).then(function(){n.deleteWebhook(t)},function(){})}},{key:"deleteWebhook",value:function(t){var n=this;this.AppApi.deleteUserWebhook(this.$stateParams.accountId,t.id).then(function(e){n.$mdToast.show(n.$mdToast.simple().textContent("Deleted webhook successfully!")),t.is_deleted=!0},function(t){n.$mdToast.show(n.$mdToast.simple().textContent("Unable to delete the webhook at the moment"))})}}]),t}()},function(t,n,e){"use strict";e.d(n,"a",function(){return c});var o=e(56),i=e.n(o),a=e(33),r=e(50);e.n(r);a.a.$inject=["AppApi","$stateParams","$mdDialog","$mdToast","$state"];var c={template:i.a,controller:a.a}},function(t,n,e){t.exports={default:e(36),__esModule:!0}},function(t,n,e){e(47);var o=e(9).Object;t.exports=function(t,n,e){return o.defineProperty(t,n,e)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var o=e(5);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var o=e(37);t.exports=function(t,n,e){if(o(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,i){return t.call(n,e,o,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var o=e(5),i=e(11).document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,n,e){var o=e(11),i=e(9),a=e(39),r=e(43),c=e(42),u=function(t,n,e){var s,l,d,m=t&u.F,f=t&u.G,p=t&u.S,h=t&u.P,v=t&u.B,g=t&u.W,b=f?i:i[n]||(i[n]={}),y=b.prototype,$=f?o:p?o[n]:(o[n]||{}).prototype;f&&(e=n);for(s in e)(l=!m&&$&&void 0!==$[s])&&c(b,s)||(d=l?$[s]:e[s],b[s]=f&&"function"!=typeof $[s]?e[s]:v&&l?a(d,o):g&&$[s]==d?function(t){var n=function(n,e,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,o)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(d):h&&"function"==typeof d?a(Function.call,d):d,h&&((b.virtual||(b.virtual={}))[s]=d,t&u.R&&y&&!y[s]&&r(y,s,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var o=e(12),i=e(45);t.exports=e(4)?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(4)&&!e(10)(function(){return 7!=Object.defineProperty(e(40)("div"),"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var o=e(5);t.exports=function(t,n){if(!o(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!o(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!o(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!o(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var o=e(41);o(o.S+o.F*!e(4),"Object",{defineProperty:e(12).f})},function(t,n){},function(t,n){},function(t,n){},function(t,n){t.exports='<md-toolbar md-colors="::{ background: \'white\', color: \'blue-grey-800\'}"> <div class=md-toolbar-tools ng-class=::$ctrl.toolbarClass> <h2 flex layout=row layout-align="start center"> <img ng-click=$ctrl.goHome() class="header-logo pointer" src=https://yellowant.s3.amazonaws.com/static/yellowanticons/logo3.png> <span class="logo-divider b">|</span> <span ng-click=$ctrl.goHome() class="b logo-divider pointer">{{$ctrl.appName}}</span> </h2> <md-button ng-click=$ctrl.goHome()> Home </md-button> <md-button class=md-accent ng-href={{$ctrl.appDocUrl}} target=_blank> Docs </md-button> <team-switcher></team-switcher> </div> </md-toolbar>'},function(t,n){t.exports='<md-menu md-offset="0 47" ng-if=$ctrl.isUserLoggedIn> <md-button class="md-primary md-raised" ng-click=$mdMenu.open($event)>{{$ctrl.currentTeam.name}}</md-button> <md-menu-content md-colors="::{ background: \'white\', color: \'blue-grey-800\'}"> <md-menu-item ng-repeat="team in $ctrl.allTeams track by team.id"> <md-button md-colors="::{ background: \'white\', color: \'blue-grey-800\'}" ng-click=$ctrl.changeTeam(team)>{{team.name}}</md-button> </md-menu-item> <md-menu-item style=margin-top:.5rem> <md-button class="md-accent md-raised" ng-href=https://www.yellowant.com/login>Use Another Team</md-button> </md-menu-item> </md-menu-content> </md-menu> <md-button class="md-primary md-raised" ng-if=!$ctrl.isUserLoggedIn ng-href=/login> Sign In </md-button>'},function(t,n){t.exports='<div class=layout-container> <section class=mb4 layout=column layout-align="start center"> <h1 class="f1 tc">404</h1> <div> Seems like you\'ve reached a part of the universe that does not exist. </div> </section> </div>'},function(t,n){t.exports="<div layout=column layout-fill> <app-toolbar toolbar-class=layout-container app-name=Pipedrive go-home=$ctrl.goHome()></app-toolbar> <md-content> <ui-view></ui-view> </md-content> </div> "},function(t,n){t.exports='<div class=layout-container> <section class=mb4 layout=column layout-align="start center"> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel=stylesheet> <img class=app-logo src=https://www.pipedriveassets.com/images/logo/inverted-logo.svg /> <md-button target=_blank ng-if=$ctrl.userAccounts ng-href=create-new-integration/ class="md-accent md-raised" layout=row> <md-icon>add</md-icon> Add Account</md-button> </section> <section layout=column layout-align="start center"> <md-list class="mw7 w-100" ng-if=$ctrl.userAccounts> <md-list-item ng-repeat="account in $ctrl.userAccounts track by $index"> <md-card class="w-100 has-hidden-action-buttons"> <md-content class=pa3 layout=row layout-align="space-between center" ng-if=account.app_authenticated> <a class=mb0 ui-sref="accountSettings({ accountId: account.id })"> <h3 class="f3 mb2">{{ ::account.handle }}</h3> <div><b>YellowAnt Invoke Name:</b> {{ ::account.user_invoke_name }}</div> <div ng-if=!account.is_valid class="mw7 w-100"> <div md-colors="::{ color: \'accent\'}"><b>INTEGRATE</b> this account with Pipedrive </div> </div> <div>Click to update your API token</div> </a> <a ng-if=account.app_authenticated md-button class="md-primary md-raised hidden-action-buttons" ui-sref="accountSettings({ accountId: account.id })">View</a> </md-content> <md-content class=pa3 layout=row layout-align="space-between center" ng-if=!account.app_authenticated> <div class=mb0> <h3 class="f3 mb2" md-colors="::{ color: \'accent\'}">Pipedrive Account Not Integrated</h3> <div><b>YellowAnt Invoke Name:</b> {{ ::account.user_invoke_name }}</div> </div> <a md-button class="md-accent md-raised hidden-action-buttons" target=_blank ng-href=create-new-integration/ >Integrate</a> </md-content> </md-card> </md-list-item> </md-list> <div ng-if=!$ctrl.userAccounts class="mw7 w-100"> <div class=mb3><i> Pipedrive is a sales CRM and Pipeline Management software . </i></div> <div layout=row layout-align=center class=mb4> <img class=app-logo src=https://www.pipedriveassets.com/images/logo/inverted-logo.svg /> </div> <div> The Pipedrive integration for YellowAnt allows you to manage your account in the following ways: <ul> <li>Create pipelines</li> <li>Add users,deals and activities</li> <li>Get information about users,pipelines,activities and deals</li> <li>Search for a particular user</li> </ul> </div> </div> </section> </div>'},function(t,n){t.exports=' <div class=layout-container> <form name=$ctrl.form ng-submit=$ctrl.submitForm() novalidate> <div class="form-group pa4 mb4" md-whiteframe=1> <div ng-if=!$ctrl.userAccount.is_valid md-whiteframe=2 class="br2 pa3 mb4"> <h3 class="f3 mb2" md-colors="::{ color: \'accent\'}">Please submit pipedrive API token </h3></div> <h3>Access</h3> <div layout=row layout-wrap> <label class=input-container layout=column flex=noshrink> <span>Pipedrive API Token:</span> <md-input-container md-no-float> <input type=text autocomplete=off class=text-input ng-model=$ctrl.accountDetails.api_token name=api_id minlength=2 maxlength=100 md-maxlength=100 required aria-label="Application Name" placeholder="Pipedrive API Token"> <span class=hint>Your Pipedrive API Token. This can be found in the settings page</span> </md-input-container> </label> </div> <div layout=row layout-align="end center"> <md-button class="md-raised md-primary" ng-disabled=$ctrl.isDisabled type=submit> Submit </md-button> </div> </div> </form> <div class="dialog-demo-content layout-container" layout=row layout-wrap layout-margin layout-align=" space-between center"> <md-button class="md-raised md-primary" ng-click=$ctrl.goBack()> Back </md-button> <md-button class="md-accent md-raised" ng-click=$ctrl.onDeleteAccount()> Delete This Account</md-button> </div> </div>'},function(t,n){},function(t,n){},function(t,n){}]);