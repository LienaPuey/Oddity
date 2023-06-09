import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LaunchComponent } from './components/launch/launch.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    NavbarComponent,
    HomeComponent,
    LaunchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
