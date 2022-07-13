import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { book } from './model/book';
import { bookservice } from '/Users/sique/DIOBootcampSantander/angular/Frontend/API/book.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookservice: bookservice;

  constructor(  bookservice: bookservice) {

    this.bookservice = bookservice;

    // this.booksService = new BooksService();
   }

  ngOnInit(): void {

    this.livros = this.bookservice.getbooks().subscribe(((data: any) => {
      this.livros = data;
      console.log(this.livros);
    }))

  }


}
