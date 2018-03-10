import { Component, OnInit } from '@angular/core';
import { trigger,style, transition, animate , keyframes , query , stagger} from '@angular/animations';
import {DataService} from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('somethings', [
      //aray for triggers
      //* => * any state goes to any state 
       transition('* => *', [
         //array , enter: when something enter the DOM
         //sometimes animation fail when u dont have {optional:true}
          query(':enter',style({opacity: 0}), {optional:true}),
          //another query
          //stagger fonction that allows u to a number ofelement of the dom 
          // like a list ,the delai we set up {300ms} will place a delay on when
          // each subsequence DOM will start to animate 
          query(':enter', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
            ]))]), {optional: true}),
            //to animate backword we need another query
            query(':leave', stagger('300ms', [
              animate('.6s ease-in', keyframes([
                style({opacity: 1, transform: 'translateY(0)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)',  offset: .3}),
                style({opacity: 0, transform: 'translateY(-75%)',     offset: 1}),
              ]))]), {optional: true})
       ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number ;
  somethingText: string = "my first something ";
  btnText: string = 'Add something';
  //array
  somethings = []; 

  constructor(private _data: DataService
) { }

  ngOnInit() {
    this._data.something.subscribe(res => this.somethings = res);
    this.itemCount = this.somethings.length;
    this._data.changeSomething(this.somethings);
  }
  addSomething(){
   this.somethings.push(this.somethingText);
   this.somethingText = '';
   this.itemCount = this.somethings.length;
   this._data.changeSomething(this.somethings);

  }

  removeSomething(i){
    this.somethings.splice(i , 1);
    this._data.changeSomething(this.somethings);
  
  }

}
