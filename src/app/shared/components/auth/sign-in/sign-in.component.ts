import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient }    from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  submitted = false;
  isAutheticated = false; 
  accessToken: any;
  errorMsg = "";


  constructor(private formBuilder: FormBuilder,private http:HttpClient) { 
    this.signInForm = this.formBuilder.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  f(){
    return this.signInForm.controls;
  }

  ngOnInit() {

  }


  onSubmit() {
    let putEmailId = this.signInForm.controls.emailId.value;
    let putPassword = this.signInForm.controls.password.value;

    this.http.post("http://dev.resulend.com:8002/authentication", {
      email:putEmailId,
      password: putPassword,
      strategy: 'local'
    }).subscribe((receiveResponse:any) => {
      if(receiveResponse.accessToken){
        this.accessToken = receiveResponse.accessToken;
        this.isAutheticated = true;
      }       

    },(errorResponce: any) => {
      if(errorResponce.error.code ===401){
        this.errorMsg = errorResponce.error.message;
        }
    });

  }

  onKeyup(event:any) {
   this. errorMsg = "";
  }

}
