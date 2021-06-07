import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menu.swipeGesture(false);
  }

  ionViewDidLeave() {
    this.menu.swipeGesture(true);
  }

  login() {
    this.router.navigateByUrl('/categorias');
  }

}
