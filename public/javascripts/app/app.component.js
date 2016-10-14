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
    var AppComponent;
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
                    this.socket = io('http://localhost:8000');
                    this.socket.on('priceUpdate', function (data) {
                        this.price = data;
                    }.bind(this));
                    this.showList = false;
                    this.showChat = false;
                    this.users = [{ id: 1, name: "Steve Jobs", source: "https://robohash.org/joe" }, { id: 2, name: "Bill Gates", source: "https://robohash.org/nah" }, { id: 3, name: "Mark Zuckerberg", source: "https://robohash.org/ok" }, { id: 4, name: "Denzel Washington", source: "https://robohash.org/hi" }];
                    this.messages = [{ id: 1, text: "hey yo!", name: "Jaithrik", sender: true }, { id: 2, text: "hi", name: "Visal", sender: false }, { id: 3, text: "whats up?", name: "Jaithrik", sender: true }];
                }
                AppComponent.prototype.ShowList = function () {
                    this.showList = !this.showList;
                };
                AppComponent.prototype.ShowChat = function (username) {
                    console.log(username);
                    this.showChat = true;
                    this.selectedGroup = username;
                };
                AppComponent.prototype.send = function () {
                    this.socket.emit('message', this.latest_message);
                    this.messages.push({ id: 10, text: this.latest_message, name: "Jaithrik", sender: true, });
                    this.latest_message = '';
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
        }
    }
});
//# sourceMappingURL=app.component.js.map