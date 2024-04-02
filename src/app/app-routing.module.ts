import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PostdashboardComponent } from './postdashboard/postdashboard.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [

  { path: '', component: AuthComponent },
  {
    path: 'post', component: PostdashboardComponent,
    canActivate: [ AuthGuard ]
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
