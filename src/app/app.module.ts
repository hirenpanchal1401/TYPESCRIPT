import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FunComponent } from './fun/fun.component';


@NgModule({
  declarations: [
    AppComponent,
    FunComponent,
    
  
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
