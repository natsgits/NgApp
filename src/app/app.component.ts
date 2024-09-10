import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { InfoComponent } from './info/info.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalcComponent,InfoComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng1a';
}
