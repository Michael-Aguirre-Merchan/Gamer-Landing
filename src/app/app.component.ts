import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gamer-Landing';

  re() {

    window.location.href="https://get-gamers.com";

  }
}
