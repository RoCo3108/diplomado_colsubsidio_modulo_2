import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoctelesComponent } from './cocteles/cocteles.component';
import { CardCoctelesComponent } from './card-cocteles/card-cocteles.component';

@NgModule({
  declarations: [
    AppComponent,
    CoctelesComponent,
    CardCoctelesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
