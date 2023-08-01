import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentlyReadingComponent } from './currently-reading/currently-reading.component';
import { WantToReadComponent } from './want-to-read/want-to-read.component';
import { ReadComponent } from './read/read.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/currently-reading', pathMatch: 'full' },
  {
    path: 'currently-reading',
    component: CurrentlyReadingComponent,
  },
  {
    path: 'want-to-read',
    component: WantToReadComponent,
  },
  {
    path: 'read',
    component: ReadComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
