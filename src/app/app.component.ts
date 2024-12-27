import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsModule } from './gifs/gifs.module';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { HomePageComponent } from './gifs/pages/home/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    GifsModule,
    SidebarComponent,
    HomePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifs-app';
}
