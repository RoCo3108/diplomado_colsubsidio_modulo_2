import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonesComponent } from './digimones/digimones.component';
import { DigimonesService } from './services/digimones.service';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { TableDigimonesComponent } from './table-digimones/table-digimones.component';


@NgModule({
  declarations: [
    AppComponent,
    DigimonesComponent,
    SliderComponent,
    FooterComponent,
    TableDigimonesComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    DigimonesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
