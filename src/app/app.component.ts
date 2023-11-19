import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from "./Components/side-nav/side-nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, SideNavComponent]
})
export class AppComponent {
  title = 'ecommerce_admin_dashboard';
}
