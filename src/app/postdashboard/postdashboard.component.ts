import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from '../module/validations';
import { SnackbarService } from '../snackbar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-postdashboard',
  templateUrl: './postdashboard.component.html',
  styleUrls: [ './postdashboard.component.scss' ]
})
export class PostdashboardComponent implements OnInit {

  postForm!: FormGroup;


  constructor(
    private _snackbarservice: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({

      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required),
      email: new FormControl(null, [ Validators.required, Validators.pattern(CustomRegex.email) ]),
      Password: new FormControl(null, [ Validators.required, Validators.pattern(CustomRegex.password) ]),
      confirmPassword: new FormControl({ value: null, disabled: true }),


    })
    this.postForm.get('Password')?.valueChanges
      .subscribe(res => {
        if (this.postForm.get('Password')?.valid) {
          this.postForm.get('confirmPassword')?.enable()
        } else {
          this.postForm.get('confirmPassword')?.disable()
        }
      })
  }


  Onpostformsubmit() {
    if (this.postForm.valid) {
      console.log(this.postForm.value)
    }
  }


  Onlogout() {

    localStorage.removeItem('userid')
    this.router.navigate([ '/' ])
    this._snackbarservice.openSnackbar('logout successfully....!!!')

  }

}


