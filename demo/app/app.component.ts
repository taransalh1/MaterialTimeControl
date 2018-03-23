
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private stringexptime="11:05";
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };
}
