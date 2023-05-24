import {Component} from '@angular/core';


@Component({
  selector:'app-navbar',
  template: `<div>
             <main>
              <h1>Navbar Component</h1>
             </main>
            </div>`,
  styles:[`div {background-color:green}
           div {min-height:400px}
           main {background-color:yellow}
           h1{color:blue}
           `]

})
export class NavbarComponent {

}