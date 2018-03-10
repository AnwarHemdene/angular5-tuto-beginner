import { Component, OnInit } from '@angular/core';
//recupere :id , ActivatedRoute give us access to route parameters
import {ActivatedRoute} from '@angular/router';
//component based router navigation
import {Router} from '@angular/router';
//access to data 
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  somethings:any;
  //dependencies ijnection happen in the constructor
  constructor(private route: ActivatedRoute,
  private router: Router,
  private _data: DataService) { 
    //called when the component is loaded 
    //res.id is the router parameter for about :id
    // we did fetch our parameter in a component class 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.something.subscribe(res => this.somethings = res)
  }

  sendMeHome(){
    //(['']) corrspond to the path of homeComponent
    this.router.navigate(['']);
  }

}
