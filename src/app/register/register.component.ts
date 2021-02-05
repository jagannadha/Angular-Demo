import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { State } from '../state.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  selectedValue : string = null;

  studentState:State[] = [
    { id: 1, name: 'Andhra Pradesh' },
    { id: 2, name: 'Telangana' },
    { id: 3, name: 'Chennai' },
    
  ];
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }
  selectName(data):void{
   this.registerUserData = this.selectedValue;
  }
  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/register'])
      },
      err => console.log(err)
    )      
  }


}
