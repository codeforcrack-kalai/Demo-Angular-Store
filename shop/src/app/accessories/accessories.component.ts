import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {

	id;
  val;
	tittle='first APP';


  constructor(
  private _Activatedroute:ActivatedRoute,
            private _router:Router  	
  	
  	) { }

  ngOnInit() {

  	this.id=this._Activatedroute.snapshot.params['id'];
  
  }

}
