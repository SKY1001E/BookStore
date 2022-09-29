import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Token} from "src/app/models/token";
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../app-injections-tokens";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

export const ACCESS_TOKEN_KEY = 'bookstore_access_token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject(AUTH_API_URL) private apiUrl: string,
    private jwtHelp: JwtHelperService,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}api/auth/login`, {email, password})
      .pipe(tap(token => {
        localStorage.setItem(ACCESS_TOKEN_KEY, token['access_token']);
        this.router.navigate(['/orders'])
      }))
  }

  isAuthenticated(): boolean {
    let token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return !this.jwtHelp.isTokenExpired(token!);
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    this.router.navigate([''])
  }
}
