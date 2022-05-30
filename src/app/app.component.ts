import { Component } from '@angular/core';
import { User } from './user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  team=['Engineering','SFL','HR','Buisness'];

  userModel = new User('','',0,0,'','',true);
}
