import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showScroll: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.showScroll = window.scrollY > 100;
  }

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

scrollToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
