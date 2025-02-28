import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {ChairLayoutComponent, DefaultLayoutComponent, StudentLayoutComponent} from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {LectureLoginComponent} from './views/lecture-login/lecture-login.component';
import {LectureRegisterComponent} from './views/lecture-register/lecture-register.component';
import {AuthGuard} from './auth/auth.guard';
import {Role} from './@business/enum/role-type';
import {AuthenticationService} from './auth/authentication.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'lecture_register',
    component: LectureRegisterComponent,
    data: {
      title: 'Lecture Register Page'
    }
  },
  {
    path: 'lecture_login',
    component: LectureLoginComponent,
    data: {
      title: 'Lecture Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    // children: [
    //   {
    //     path: 'base',
    //     loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
    //   },
    //   {
    //     path: 'buttons',
    //     loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
    //   },
    //   {
    //     path: 'charts',
    //     loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
    //   },
    //   {
    //     path: 'dashboard',
    //     loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
    //   },
    //   {
    //     path: 'icons',
    //     loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    //   },
/*      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },*/
    //   {
    //     path: 'theme',
    //     loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
    //   },
    //   {
    //     path: 'widgets',
    //     loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
    //   }
    // ]
  },
  {
    path: 'student',
    // canActivate: [AuthGuard],
    component: StudentLayoutComponent,
    data: {
      title: 'Student'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/student/student.module').then(m => m.StudentModule)
      }
    ]
  },

  {
    path: 'chair',
    // canActivate: [AuthGuard],
    component: ChairLayoutComponent,
    data: {
      // roles: [Role.Admin],
      title: 'Chair'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/lecture/lecture.module').then(m => m.LectureModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
