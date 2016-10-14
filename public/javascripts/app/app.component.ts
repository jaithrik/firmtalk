import {Component} from 'angular2/core';
import {Group} from './group';
import {Message} from './Message';

@Component({
    selector: 'auction-app',
    templateUrl: 'templates/product.html',
    styleUrls: ['templates/app.component.css']
})


export class AppComponent {
    showList: boolean;
    showChat: boolean;
    selectedGroup: Group;
    addUser: boolean;
    groups: Group[];
    messages: Message[];
    users: User[];
    notifyDiv: boolean;
    emailDiv: boolean;
    hourDiv: boolean;

    price: number = 0.0;
    socket = null;
    bidValue = '';
    latest_message='';


    notify(){
        console.log("hello");
        this.notifyDiv = !this.notifyDiv;
    }
    selectEmail(){
        this.hourDiv = false;
        this.emailDiv = true;
    }


    selectHour(){
        this.hourDiv = true;
        this.emailDiv = false;
    }


    constructor(){
        this.notifyDiv = false;
        this.emailDiv = false;
        this.hourDiv = false;
        this.socket = io('http://localhost:8000');
        this.addUser = false;
        this.socket.on('message',function(data){
            this.messages = data;   
        }.bind(this));

        this.socket.on('groups',function(data){
            this.groups = data;
        }.bind(this));
        this.users = [{id: 1,name: "Frieda"},{id: 2,name: "John"},{id: 3, name: "Heather"},{id: 4,name: "Ferdinand"},{id: 5,name: "Fei"}];
        this.showList = false;
        this.showChat=false;
    }
      ShowList(){
        this.showList= !this.showList;
    
    }
    ShowChat(group: Group){
        console.log(group);
        this.showChat = true;
        this.selectedGroup = group;
    }
    showAddUsers(){
        this.addUser = true;
    }

    send(){
        this.socket.emit('latest_message',{id:10,group_id: this.selectedGroup.id, text: this.latest_message,name: "Jaithrik",sender: true});
        this.latest_message='';
    }

    addNewUser(user: User){
        for(var i =0;i<this.users.length;i++){
            if(user.id==this.users[i].id){
                this.users.splice(i,1);
            }
        }

        this.messages.push({id: 100,group_id: this.selectedGroup.id, text: user.name+" has been added",name: "none",sender: false});
    }

    addNewTopic(){
        if(this.selectedGroup&&this.selectedGroup.id!=100)
        this.socket.emit('add_group',{id: 100,name: 'Ferdinand Frois added Task 2'});
        this.socket.on('groups',function(data){
            this.groups = data;
        }.bind(this));
        this.showChat=true;
        
        this.selectedGroup = {id: 100,name: 'Ferdinand Frois added Task 2'};
    }

     checkAdult(a: Group) {
    if(a.id==100) return a;
}

}

class User { 

id: number;
name: string;
}