import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book";
import {BookstoreService} from "../../services/bookstore.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: Book[] = []
  columns = ['id', 'author', 'title', 'price']

  constructor(private bookStore: BookstoreService) { }

  ngOnInit(): void {
    this.bookStore.getCatalog()
      .subscribe(res => {
        this.books = res;
      })
  }

}
