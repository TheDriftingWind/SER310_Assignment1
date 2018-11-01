import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'U.A. Academy';
  public isCollapsed  = true;
  currentUrl : string = '';

  constructor(private router: Router){
    this.router.events.subscribe((event:Event) => {
		if(event instanceof NavigationEnd ){

			this.currentUrl = event.url;

			console.log(this.currentUrl);
			console.log(this.currentUrl == '/');
		}
	});
  }





}
