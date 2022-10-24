import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  a:string = 'Home Components' ;
  b='no datatype' ;
  status = false;
  d= 123 ;

  name1='Ram';
  name2='Prudhvi';

  money = 98487;

  perfomance = 2;

  todaydate = new Date();

  document:any;

  mobiles=['redmi' , 'iphone' , 'oppo'];
  
  user: User[] = [];

  constructor(@Inject(DOCUMENT) document:Document, private testserv : TestService){
    this.document = document;
  }

  name:undefined;

  ngOnInit(): void {
    // alert('hello this page is loading')
    alert(this.testserv.gettodaydate());
  }

  printdata(event:any){
    alert(this.name);
    alert(this.document.getElementById('doctest').value);
  }
  matter(){
    alert(this.testserv.printdata());
  }

  getalluserinformstion(){
    this.testserv.getallusers().subscribe(user=>{
      this.user=user;
    });
  }
}
