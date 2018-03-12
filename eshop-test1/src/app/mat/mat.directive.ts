import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mat]'
})
export class MatDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setAttribute(this.elRef.nativeElement, 'mat-raised-button', '');
  }

  // ngOnInit(){
  //   this.renderer.setAttribute(this.elRef.nativeElement, 'mat-raised-button','');
  // }

  // @HostListener('mouseover')
  // onMouseOver() {
  //   this.renderer.setAttribute(this.elRef.nativeElement, 'mat-raised-button', '');
  // }
  ngAfterViewInit() {
    // this.renderer.setAttribute(this.elRef.nativeElement, 'mat-raised-button', '');
  }
}
