import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() a!: number;
  @Input() b!: number;
  @Output() result = new EventEmitter<number>();

  calculate(operation: string) {
    if (operation === 'add') {
      this.result.emit(this.a + this.b);
    } else if (operation === 'subtract') {
      this.result.emit(this.a - this.b);
    }
  }
}
