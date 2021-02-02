import { IndiePageComponent } from './indie-page/indie-page.component';
import { RbPageComponent } from './rb-page/rb-page.component';
import { ElectroPageComponent } from './electro-page/electro-page.component';
import { RockPageComponent } from './rock-page/rock-page.component';
import { PopPageComponent } from './pop-page/pop-page.component';
import { HipHopPageComponent } from './hip-hop-page/hip-hop-page.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { GenrePageComponent } from './genre-page/genre-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'genre', component: GenrePageComponent},
  {
    path: '', component: MainLayoutComponent,
  children: [
    // {path: '', redirectTo: 'genre', pathMatch: 'full'},
    // {path: 'genre', component: GenrePageComponent},
    {path: 'hip-hop', component: HipHopPageComponent},
    {path: 'pop', component: PopPageComponent},
    {path: 'rock', component: RockPageComponent},
    {path: 'electro', component: ElectroPageComponent},
    {path: 'rb', component: RbPageComponent},
    {path: 'indie', component: IndiePageComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
