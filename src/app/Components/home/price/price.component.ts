import { Component } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {

  supscrption_1:boolean=true
  supscrption_2:boolean=false
  
  
  showSupScrptiononeTwo(){
    this.supscrption_2=true
    this.supscrption_1=false
  }
  
  showSupScrptiononeOne(){
    this.supscrption_2=false
    this.supscrption_1=true
  }




  
}
