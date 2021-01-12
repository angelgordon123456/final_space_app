import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'character/:id',
    loadChildren: () => import('./api/character/character.module').then( m => m.CharacterPageModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./episodes/episodes.module').then( m => m.EpisodesPageModule)
  },
  {
    path: 'location/:id',
    loadChildren: () => import('./api/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'episode/:id',
    loadChildren: () => import('./api/episode/episode.module').then( m => m.EpisodePageModule)
  },
  {
    path: 'cita',
    loadChildren: () => import('./cita/cita.module').then( m => m.CitaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
