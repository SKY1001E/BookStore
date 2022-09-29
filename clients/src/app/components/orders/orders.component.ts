import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book";
import {BookstoreService} from "../../services/bookstore.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Book[] = []
  columns = ['id', 'author', 'title', 'price']

  constructor(private bookStore: BookstoreService) { }

  ngOnInit(): void {
    this.bookStore.getOrders()
      .subscribe(res => {
        this.orders = res;
      })
  }

}
