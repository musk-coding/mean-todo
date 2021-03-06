import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/display/tasks.component';
import { LoginComponent } from './authentication/login/login.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { RegisterComponent } from './authentication/register/register.component';
import { IndexComponent } from './authentication/index/index.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'tasks', component: TasksComponent },
    { path: 'taskslist', component: TasksListComponent},
    { path: 'login', component: LoginComponent },
    { path: 'index', component: IndexComponent },
    { path: 'register', component: RegisterComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
