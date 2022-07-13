import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FrontendAppComponent } from './components/frontend-app/frontend-app.component';
import { FiltersComponent } from './components/frontend-app/filters/filters.component';
import { ProductListComponent } from './components/frontend-app/product-list/product-list.component';
import { ProductItemComponent } from './components/frontend-app/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { bookservice } from '/Users/sique/DIOBootcampSantander/angular/Frontend/API/book.service'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FrontendAppComponent,
    FiltersComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [bookservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
