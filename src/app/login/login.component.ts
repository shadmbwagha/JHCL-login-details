import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginCredentialService } from 'src/login-credential.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'JHCL-login';
  reactiveForm : FormGroup;

  public getjsonValues: any;
  public postjsonValues: any;
  constructor(public result: LoginCredentialService, private route: Router ){

  }

  ngOnInit(): void{
    this.getmethod();
    this.reactiveForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, Validators.required)
    });

    this.authenticate();
  }
  getmethod(){
    this.result.readInfo().subscribe((data) => {
      console.log(data);
      this.getjsonValues= data;
    })
  }

  authenticate(){
    const email = this.reactiveForm.get('email').value;
    const paswd = this.reactiveForm.get('password').value;

    if(email === "a@b.com" && paswd == "123shad"){
      console.log("value matched");
      this.route.navigate(['/details'])
    }
    else{
      console.log("credentials mismatch");
    }
  }
  // getMethod(){

  //   this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data)=> {

  //     this.getjsonValues = data;
  //   })
  // }
  // postMethod(){
  //   let body = {
  //     title : 'foo',
  //     body:  'bar',
  //     userId: 1

  //   };
  //   this.http.post('https://jsonplaceholder.typicode.com/todos', {body}).subscribe((data)=> {
  //     this.postjsonValues = data;
  //   })
  // }


}

