import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  buscarHeroe(filter: string) {
    this.router.navigate(['heroes', filter]);
  }
}
