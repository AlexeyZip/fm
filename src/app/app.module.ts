import { SearchPipe } from './shared/search.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenrePageComponent } from './genre-page/genre-page.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RockPageComponent } from './rock-page/rock-page.component';
import { ElectroPageComponent } from './electro-page/electro-page.component';
import { HipHopPageComponent } from './hip-hop-page/hip-hop-page.component';
import { PopPageComponent } from './pop-page/pop-page.component';
import { RbPageComponent } from './rb-page/rb-page.component';
import { IndiePageComponent } from './indie-page/indie-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GenrePageComponent,
    MainLayoutComponent,
    SearchPipe,
    RockPageComponent,
    ElectroPageComponent,
    HipHopPageComponent,
    PopPageComponent,
    RbPageComponent,
    IndiePageComponent,
    MusicPageComponent,
  ],
  imports: [CommonModule, BrowserModule, HttpClientModule, AppRoutingModule, MatIconModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
