import { AuthService } from './../../core/services/auth.service';

import { Component, OnInit } from '@angular/core';
import { action, HttpResponse } from '@nativescript/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }


  login() {
    console.log(`Haciendo consulta`)
    console.log("🚀 ~ file: login.component.ts ~ line 26 ~ LoginComponent ~ login ~ this.user, this.password", this.user, this.password)
    this.auth.login(this.user, this.password).then(
      (response: HttpResponse) => {
        console.log(response);

        const result = response.content.toJSON();
        console.log(`Http POST Result: ${result}`)

        let options = {
          title: "Respuesta",
          message: result.token,
          okButtonText: "Ok",
        };

        action(options).then((result) => {
          console.log(result);
        });
      }).catch((e) => { console.log(e) });
  }
}
