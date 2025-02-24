import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  imports: [],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.css'
})
export class NavButtonComponent {
  constructor(private router: Router){}

  @Input() text: string = '';
  @Input() path: string = '';

  redirect(){
    this.router.navigate([this.path]);
  }
}
