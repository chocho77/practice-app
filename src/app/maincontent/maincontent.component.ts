import { Component } from "@angular/core";

@Component({
  selector:'app-maincontent',
  template:`<div>
           <h1>Title</h1>
           <main>Main Content
            <h2>Header 2</h2>
           </main>
           </div>`,
  styles:[`h1 {color:red}
           div {background-color:green}
           div{min-height:600px} 
           
           `]
})
export class MaincontentComponent {
  
}
