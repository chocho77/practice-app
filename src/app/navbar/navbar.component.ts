import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector:'app-navbar',
  template: `<div>
             <main>
              <h1>Navbar Component</h1>
              <h2>{{title}}</h2>
              <h2>{{fromParent}}</h2>
             </main>
            </div>`,
  styles:[`div {background-color:green}
           div {min-height:400px}
           main {background-color:yellow}
           h1{color:blue}
           `]

})
export class NavbarComponent implements OnInit{
  title:string = "hello, there !";

  @Input() fromParent='';

  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}