import { Http, HttpResponse } from '@nativescript/core'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor() { }


  login(user: string, password: string): Promise<HttpResponse> {
    console.log(user, password);

    return Http.request({
      url: 'http://192.168.0.172:3000/api/auth/login',
      // url: 'http://localhost:3000/api/auth/login',
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({ username: user, password: password }),
    })
    // return this.http.post<{ token: string }>(, credentials);
  }
}
