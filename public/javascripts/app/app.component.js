System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, User;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.price = 0.0;
                    this.socket = null;
                    this.bidValue = '';
                    this.latest_message = '';
                    this.notifyDiv = false;
                    this.emailDiv = false;
                    this.hourDiv = false;
                    this.socket = io('http://localhost:8000');
                    this.addUser = false;
                    this.socket.on('message', function (data) {
                        this.messages = data;
                    }.bind(this));
                    this.socket.on('groups', function (data) {
                        this.groups = data;
                    }.bind(this));
                    this.users = [{ id: 1, name: "Frieda" }, { id: 2, name: "John" }, { id: 3, name: "Heather" }, { id: 4, name: "Ferdinand" }, { id: 5, name: "Fei" }];
                    this.showList = false;
                    this.showChat = false;
                }
                AppComponent.prototype.notify = function () {
                    console.log("hello");
                    this.notifyDiv = !this.notifyDiv;
                };
                AppComponent.prototype.selectEmail = function () {
                    this.hourDiv = false;
                    this.emailDiv = true;
                };
                AppComponent.prototype.selectHour = function () {
                    this.hourDiv = true;
                    this.emailDiv = false;
                };
                AppComponent.prototype.ShowList = function () {
                    this.showList = !this.showList;
                };
                AppComponent.prototype.ShowChat = function (group) {
                    console.log(group);
                    this.showChat = true;
                    this.selectedGroup = group;
                };
                AppComponent.prototype.showAddUsers = function () {
                    this.addUser = true;
                };
                AppComponent.prototype.send = function () {
                    this.socket.emit('latest_message', { id: 10, group_id: this.selectedGroup.id, text: this.latest_message, name: "Jaithrik", sender: true });
                    this.latest_message = '';
                };
                AppComponent.prototype.addNewUser = function (user) {
                    for (var i = 0; i < this.users.length; i++) {
                        if (user.id == this.users[i].id) {
                            this.users.splice(i, 1);
                        }
                    }
                    this.messages.push({ id: 100, group_id: this.selectedGroup.id, text: user.name + " has been added", name: "none", sender: false });
                };
                AppComponent.prototype.addNewTopic = function () {
                    if (this.selectedGroup && this.selectedGroup.id != 100)
                        this.socket.emit('add_group', { id: 100, name: 'Ferdinand Frois added Task 2' });
                    this.socket.on('groups', function (data) {
                        this.groups = data;
                    }.bind(this));
                    this.showChat = true;
                    this.selectedGroup = { id: 100, name: 'Ferdinand Frois added Task 2' };
                };
                AppComponent.prototype.checkAdult = function (a) {
                    if (a.id == 100)
                        return a;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'auction-app',
                        templateUrl: 'templates/product.html',
                        styleUrls: ['templates/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            User = (function () {
                function User() {
                }
                return User;
            }());
        }
    }
});
//# sourceMappingURL=app.component.js.map