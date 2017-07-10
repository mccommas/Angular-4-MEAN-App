/**
 * Created by jmccommas on 7/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup,Validators} from "@angular/forms";
import {} from "@angular/forms/";

@Component({
    selector: 'app-signin',
    templateUrl: 'signin.component.html'
})

export class SigninComponent implements OnInit {
    SigninForm: FormGroup;

    onSubmit() {
        console.log(this.SigninForm);
        this.SigninForm.reset();
    }

    ngOnInit() {
        this.SigninForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}
