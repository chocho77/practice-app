import { Component,OnInit } from "@angular/core";

@Component({
  selector:'app-subcontent',
  template:`<div>
            <h1>Subcontent Component</h1>
            </div>`,
  styles:['h1{color:#333}']
})

export class SubcontentComponent implements OnInit{
 
  constructor() {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}