import {Component} from 'angular2/core';
import {User} from './user';
import {Message} from './Message';

@Component({
    selector: 'auction-app',
    templateUrl: 'templates/product.html',
    styleUrls: ['templates/app.component.css']
})

export class AppComponent {
    showList: boolean;
    showChat: boolean;
    selectedGroup: string;
    users: User[];
    messages: Message[];

    price: number = 0.0;
    socket = null;
    bidValue = '';
    latest_message='';

    constructor(){

        this.socket = io('http://localhost:8000');
        this.socket.on('priceUpdate', function(data){
            this.price = data;
        }.bind(this));

          this.showList = false;
        this.showChat=false;
        this.users = [{id: 1,name: "Steve Jobs",source: "https://robohash.org/joe"},{id: 2,name: "Bill Gates",source: "https://robohash.org/nah"},{id: 3,name: "Mark Zuckerberg",source: "https://robohash.org/ok" },{id: 4,name: "Denzel Washington",source: "https://robohash.org/hi"}];
        
        this.messages = [{id: 1,text: "hey yo!",name: "Jaithrik",sender: true},{id: 2,text: "hi",name: "Visal",sender: false},{id: 3,text: "whats up?",name: "Jaithrik",sender: true}];


    }


      ShowList(){
        this.showList= !this.showList;
    
    }
    ShowChat(username: string){
        console.log(username);
        this.showChat = true;
        this.selectedGroup = username;
    }

    send(){
        this.socket.emit('message',this.latest_message);
        
        this.messages.push({id: 10,text: this.latest_message,name: "Jaithrik",sender: true,});
        this.latest_message='';
    }

}