import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventListComponent } from './event-list/event-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserListComponent } from './people/user-list/user-list.component';
import { UserDetailComponent } from './people/user-detail/user-detail.component';
import { UserDetailResolver } from './resolvers/user-detail.resolver';
import { UserListResolver } from './resolvers/user-list.resolver';
import { UserEditComponent } from './people/user-edit/user-edit.component';
import { UserEditResolver } from './resolvers/user-edit.resolver';
import { PreventUnsavedChangesGuard } from 'src/guards/prevent-unsaved-changes.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'events',
        component: EventListComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'people',
        component: UserListComponent,
        resolve: { users: UserListResolver }
      },
      {
        path: 'people/edit',
        component: UserEditComponent,
        resolve: { user: UserEditResolver },
        canDeactivate : [PreventUnsavedChangesGuard]
      },
      {
        path: 'people/:id',
        component: UserDetailComponent,
        resolve: { user: UserDetailResolver }
      }



    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
