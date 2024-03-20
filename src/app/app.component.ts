import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'shp-root',
  templateUrl: "app.component.html",
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
})
export class AppComponent implements OnInit {
  title = 'Online shopoing app';
  
  ngOnInit(): void {
    
  }
}
