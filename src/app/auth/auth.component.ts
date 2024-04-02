import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../snackbar.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [ './auth.component.scss' ]
})
export class AuthComponent implements OnInit {



  alreadyHaveAc: boolean = false
  hide: boolean = true

  constructor(
    private _route: ActivatedRoute,

    private router: Router,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    // this._route.params
    //   .subscribe(res => {
    //     console.log(res);

    //   })


    if (localStorage.getItem('userid')) {
      this.router.navigate([ '/post' ])
    }

  }

  onSignUpFormSubmit(signupForm: NgForm) {

    if (signupForm.valid) {
      console.log(signupForm.value);
      this.router.navigate([ '/post' ])
    }

  }



  Onlogin(lemail: HTMLInputElement, lpassword: HTMLInputElement) {

    localStorage.setItem('userid', "abc")
    this.router.navigate([ '/post' ])
    this.snackbar.openSnackbar('login successfull....!!!')

  }



  Onsignup(email: HTMLInputElement, password: HTMLInputElement) {

    this.snackbar.openSnackbar('signup successfull....!!!')
  }

}
