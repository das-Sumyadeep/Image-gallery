import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageItemComponent } from './image-item/image-item.component';
import { HighlightNumberDirective } from './highlight-number.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightNumberDirective, ImageItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'image-gallery';
}
