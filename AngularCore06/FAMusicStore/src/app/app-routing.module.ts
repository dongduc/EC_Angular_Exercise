import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './components/artists/artist.component';

const routes: Routes = [
  { path: '', component: ArtistComponent},
  { path: '**', component: ArtistComponent},
  { path: 'artist/:id', component: ArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
