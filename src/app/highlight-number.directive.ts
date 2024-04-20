import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightNumber]',
  standalone: true
})
export class HighlightNumberDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.highlightNumbers();
  }

  highlightNumbers(): void {
    const text = this.el.nativeElement.innerText;
    const words = text.split(' ');

    words.forEach((word: any) => {
      if (!isNaN(Number(word))) {
        // Highlight only if the whole word is a number
        const span = this.renderer.createElement('span');
        this.renderer.setStyle(span, 'color', 'red');
        this.renderer.appendChild(span, this.renderer.createText(word));
        const parent = this.el.nativeElement;
        const regex = new RegExp(word, 'g');
        parent.innerHTML = parent.innerHTML.replace(regex, span.outerHTML);
      }
    });
  }
}
