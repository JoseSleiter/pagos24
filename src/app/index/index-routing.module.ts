import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children:[
      {
        path:'language',
        loadChildren:() =>import('../pages/index_pages/language/language.module').then(
          m => m.LanguagePageModule
        )
      },
      {
        path:'login',
        loadChildren:() =>import('../pages/index_pages/login/login.module').then(
          m => m.LoginPageModule
        )
      },
      {
        path:'signup',
        loadChildren:() =>import('../pages/index_pages/signup/signup.module').then(
          m => m.SignupPageModule
        )
      },
      {
        path: '',
        redirectTo: '/language',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
