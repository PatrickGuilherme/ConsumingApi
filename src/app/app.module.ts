import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgProgressModule.withConfig({
      color: "green"
    }),
    NgProgressHttpModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
