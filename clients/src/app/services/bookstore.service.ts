import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {STORE_API_URL} from "../app-injections-tokens";
import {Observable} from "rxjs";
import {Book} from "../models/book";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {
  private baseApiUrl = `${this.apiUrl}api/`

  constructor(private http: HttpClient, @Inject(STORE_API_URL) private apiUrl: string) { }

  getCatalog(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseApiUrl}books`)
  }

  getOrders(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseApiUrl}orders?`)
  }
}
