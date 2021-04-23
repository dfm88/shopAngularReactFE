import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente = ''

  constructor(private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.utente = this.actRoute.snapshot.params['username']
  }

}
