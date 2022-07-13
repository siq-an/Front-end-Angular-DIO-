import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from 'src/app/components/frontend-app/product-list/model/book';
import { booksservice } from 'src/app/components/frontend-app/product-list/product-list.components.service';
import { API_PATH } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class bookservice {
  getbooks() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  
  obterTodos(){
    return this.httpClient.get<book[]>(`${API_PATH}bookservice`);
  }
  
}
