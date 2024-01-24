import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showMenu = false;
  showMenuButton = false;

  toggleClass() {
    this.showMenu = !this.showMenu;

    setTimeout(() => {
      this.showMenuButton = !this.showMenuButton;
    }, 500);
  }

}
