import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogModule } from './blog/blog.module';
import { IndexComponent as HomeComponent } from './home/components/index/index.component';
import { HomeModule } from './home/home.module';
import { IndexComponent as PageNotFoundComponent } from './not-found/components/index/index.component';
import { NotFoundModule } from './not-found/not-found.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(module => module.BlogModule)
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    BlogModule,
    HomeModule,
    NotFoundModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
