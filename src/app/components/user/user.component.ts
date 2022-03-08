import { Component, OnInit } from '@angular/core';
import { JSONserviceService } from 'src/app/services/jsonservice.service';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  data: Array<any>

  title = 'Json Placeholder';

  constructor(private JSONservice: JSONserviceService){
    this.data = new Array<any>()
  }

  ngOnInit(): void {
  }


  getDataFromAPI(){
    this.JSONservice.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

  

}
