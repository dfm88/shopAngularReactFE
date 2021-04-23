import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password = '';
  username = '';

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  validazioneLogin() {
    if(this.username === 'diego' && this.password==='777')
    {
      console.log('utente ok')
      this.route.navigate(['welcome', this.username])
    } else {
      console.log('credenziali errate')
    }
  }
}
