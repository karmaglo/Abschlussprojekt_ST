import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RolesComponent } from './components/roles/roles.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, FormsModule, RolesComponent]
})
export class AppComponent {
  title = 'SalesTime - Zeiterfassung';
}
