/**
 * Created by jmccommas on 7/8/17.
 */
import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from './messages/messages.component'
import {AuthenticationComponent} from './auth/authentication.component'
import {AUTH_ROUTES} from './auth/auth.routes'

export const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/messages' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent,children:AUTH_ROUTES },


];
export const routing = RouterModule.forRoot(APP_ROUTES);
