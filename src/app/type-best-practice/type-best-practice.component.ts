import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// --------------------------------------
export interface User1 {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  image: string;
}
// --------------------------------------

@Component({
  selector: 'app-type-best-practice',
  templateUrl: './type-best-practice.component.html',
  styleUrls: ['./type-best-practice.component.scss']
})
export class TypeBestPracticeComponent implements OnInit {
  url = '......';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // créer une charge utile pour un POST
    // la bonne pratique est d'utiliser le type principal : User1 et prendre ou omettre ce que l'on souhaite
    // (plutôt que de créer un nouveau type expret pour cela)
    // et il est possible aussi d'ajouter une propriété : password
    type UserRegisterPayload = Pick<User1, 'username' | 'email' | 'age'> & { password: string };

  }

  // on recupere le type directement sur le type principal : User1
  checkAge(age: User1['age']) {     // User1['age']  ->  number

    this.http.post(`${this.url}}/users/check-age`, {age})
  }
}
