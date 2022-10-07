import { Component } from '@angular/core';

export class Car{
Model:string='';
CompanyName:string='';
PriceRange:any;
Location:string='';
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formValidation';

  backgroundColour:string='red';

  hi:boolean=false;

  hello:boolean=false;

  who:boolean=false;

  car:Car = new Car();

  likes:number=0;
  dislikes:number=0;

  like(){
this.likes++;
  }

  dislike(){
this.dislikes++;
  }



Bus:any[]=[
  {
    id:1,
    name:"pallevelugu",
    model:"ordinary",
    price:100000
  },
  {
    id:2,
    name:"express",
    model:"speed",
    price:300000
  },
  {
    id:3,
    name:"deluxe",
    model:"overSpeed",
    price:500000
  },
  {
    id:4,
    name:"superLuxury",
    model:"overDoubleSpeed",
    price:700000
  },
  {
    id:5,
    name:"rajadhani",
    model:"overTripleSpeed",
    price:700000
  },
  {
    id:6,
    name:"garuda-PLUS",
    model:"highSpedd",
    price:1000000
  },
];

three(){
this.hi=true;
}
five(){
  this.hello=true;
}
seven(){
  this.who=true;
}

}
