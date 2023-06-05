import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginCredentialService } from 'src/login-credential.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JHCL-login';
  reactiveForm : FormGroup;

  public getjsonValues: any;
  public postjsonValues: any;
  constructor(public result: LoginCredentialService ){

  }

  ngOnInit(): void{
    this.getmethod();
    this.reactiveForm = new FormGroup({
      email : new FormControl("a@b.com"),
      password : new FormControl(null)
    });

    this.authenticate();
  }
  getmethod(){
    this.result.readInfo().subscribe((data) => {
      this.getjsonValues= data;
    })
  }

  authenticate(){
    console.warn(this.reactiveForm.value)
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
