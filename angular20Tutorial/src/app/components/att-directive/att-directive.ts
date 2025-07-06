import { NgClass, NgStyle } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    divClassName = signal<string>("");

    isDiv2Blue: boolean = false;

    constructor()
    {
      console.log('constructor');
    }

    ngOnInit(): void {
      console.log('ngOnInit');
    }

    ngOnDestroy(): void {
      console.log('ngOnDestroy');
    }
    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
    }
    ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
    }
    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
    }
    ngAfterContentInit(): void {
      console.log('ngAfterContentInit');
    }

    setBgClass(className: string){
        this.divClassName.set(className);
    }

    toggleDiv2Color()
    {
      this.isDiv2Blue = ! this.isDiv2Blue;
    }
}
