import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  page_title = "User Lists";

  // try to comment the user data
  users = [
    {name: 'Alexa' , username: 'alexa90' , email: 'alexa90@email.com'},
    {name: 'Tony' , username: 'tony1090' , email: 'tony1000@email.com'},
    {name: 'Bob' , username: 'bob80' , email: 'bob780@email.com'},
    {name: 'Kavin' , username: 'kavin100' , email: 'kavinto@email.com'},
    {name: 'Amanda' , username: 'amanda540' , email: 'amanda890@email.com'}
  ];

  constructor() { }

  ngOnInit(): void {
}

}
