import { Component } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agenda';
  user=faUserPlus
  filtro:string;

  constructor(){}

}
