import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  name='Details Page';

  constructor(private testserv : TestService) { }

  ngOnInit(): void {
    alert(this.testserv.gettodaydate());
  }

}
