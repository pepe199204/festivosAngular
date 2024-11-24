import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ReferenciasMaterialModule } from './shared/modulos/referencias-material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReferenciasMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'festivos';
  constructor(private router:Router){}

  redirectTo(route:string):void {
    this.router.navigate([route]);
  }
}
