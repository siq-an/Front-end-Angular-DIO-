import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {book} from "./model/book";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


export const books: book[] = [
    { id: '1', name: 'book1' , price: 10, quantity: 1, category: "Filosofia", img:"book1"},
    { id: '2', name: 'book2' , price: 10, quantity: 1, category: "Administracao", img:"book2"},
    { id: '3', name: 'book3' , price: 10, quantity: 1, category: "Romance de aventura", img:"book3"},

  ];

@Injectable()


export class booksservice {

  private url = 'https://localhost:3000/API/book';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

   constructor( private http: HttpClient){}


    // getbooks(){
    //     return book;
    // }

    getbooks() {
      return this.http.get(this.url)


    }

}