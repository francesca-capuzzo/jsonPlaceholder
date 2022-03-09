import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: User[] = []     
  //users?: User[]                                                  //sono due modi per scrivere la stessa cosa -> o inizializzo come array vuoto o metto array? con il ?

  constructor() { }

  ngOnInit(): void {
    this.fetchUsers();                                               //chiamo la fetch in OnInit per farla partire!!
  }

  fetchUsers(): void{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    //.then(jsonArray => this.users = jsonArray);                    //una volta arriva qui ho un array che posso tranquillamente infilare dentro ai miei users che sono un array.
    .then(jsonArray => this.initUsers(jsonArray))                    //oppure faccio la funzione initUsers e la passo alla fetch --> uguale ma più lungo
  }

  initUsers(jsonArray: any){
    console.log('json array',jsonArray);                              //stesso array che si vede nel log di 'this.users'
    this.users = jsonArray;
    console.log('users',this.users);                                  //stesso array che si vede nel log di 'json Array'
    //this.users[0].address.city                                      //scrivendo this.users[0]. mi autocompleta gli altri campi con i nomi delle varie interfacce --> eviti di fare errori di typo 
  }

}
