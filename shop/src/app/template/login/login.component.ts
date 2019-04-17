import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from  '../../api.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


	coins=[];
	Business=[];
	product:any;

  constructor(private  rest:  ApiService) { 

  	//this.coins=apiservice.getMyItems();






  }

  ngOnInit() {

  this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.product = data;
});
  }



}
