import {Routes} from "@angular/router";
/**
 * Created by jmccommas on 7/9/17.
 */
import {SigninComponent} from "./signin.component";
import {SignupComponent} from "./signup.component";
import {LogoutComponent} from "./logout.component";


export const AUTH_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'signup' },

    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'logout', component: LogoutComponent},


];
