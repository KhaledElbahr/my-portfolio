import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'home', component: HomeComponent, children: [
          { path: '', component: ProjectsComponent },
          { path: '', component: ContactsComponent }
        ]
      },
      { path: 'project/:id', component: ProjectDetailsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },

    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
  useHash: true
};


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
