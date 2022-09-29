import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get isLoggedIn(): boolean {
    return this.auth.isAuthenticated();
  }

  constructor(private auth: AuthService) {
  }

  login(email:string, password: string) {
    this.auth.login(email, password).subscribe(res => {
    }, error => {
      alert('Wrong login or password')
    })
  }

  logout() {
    this.auth.logout()
  }
}
