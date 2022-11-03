import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  credentials={
    email:'',
    password:''
  }

  //password
  hide = true;


  constructor(private router: Router) { }

  logIn(){
    if ((this.credentials.email!='' && this.credentials.password!='') && (this.credentials.email!=null && this.credentials.password!=null))
    {
    this.router.navigate(['./profile'])
    }
    else{
      console.log("Values are required !!");
    }

  }

  ngOnInit(): void {}
   
}


