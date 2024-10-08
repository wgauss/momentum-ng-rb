import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,  HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
	constructor(private router: Router) { }

	title = 'momentum-ng';
	goHomeET(){
		this.router.navigate(['/']);
	}
	gotToCalendar(){
		this.router.navigate(['/calendar']);
	}
	goToGoals(){
		this.router.navigate(['/goals']);
	}
	goToFinCalc(){
		this.router.navigate(['/fincalc']);
	}
	goToJaxBrain(){
		this.router.navigate(['/jaxbrain']);
	}
}
