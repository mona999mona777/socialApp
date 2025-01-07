import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';
import { blankGuard } from './core/guard/blank.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            },
            {
                path: 'login',
                loadComponent: () =>
                    import('./component/login/login.component').then(
                        (m) => m.LoginComponent
                    ),
                title: 'Login',
            },
            {
                path: 'register',
                loadComponent: () =>
                    import('./component/register/register.component').then(
                        (m) => m.RegisterComponent
                    ),
                title: 'Register',
            },
        ],
    },
    {
        path: '',
        canActivate: [blankGuard],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'Timeline',
                loadComponent: () =>
                    import('./component/timeline/timeline.component').then(
                        (m) => m.TimelineComponent
                    ),
                title: 'Timeline',
            },
            {
                path: 'ProfileImage',
                loadComponent: () =>
                    import('./component/upload-image/upload-image.component').then(
                        (m) => m.UploadImageComponent
                    ),
                title: 'ProfileImage',
            },
            {
                path: 'ChangePassword',
                loadComponent: () =>
                    import('./component/forgetpassword/forgetpassword.component').then(
                        (m) => m.ForgetpasswordComponent
                    ),
                title: 'ChangePassword',
            },
            {
                path: 'user',
                loadComponent: () =>
                    import('./component/user-data/user-data.component').then(
                        (m) => m.UserDataComponent
                    ),
                title: 'User',
            },
            {
                path: 'commnet',
                loadComponent: () =>
                    import('./shared/ui/comments/comments.component').then(
                        (m) => m.CommentsComponent
                    ),
                title: 'Comment',
            },
        ],
    },
    {
        path: '**',
        loadComponent: () =>
            import('./component/notfoundpage/notfoundpage.component').then(
                (m) => m.NotfoundpageComponent
            ),
        title: '404',
    },
];
