import { Component, OnInit } from '@angular/core';
import { JSONserviceService } from 'src/app/services/jsonservice.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  address: Array<any>

  title = 'Json Placeholder';

  constructor(private JSONservice: JSONserviceService){
    this.address = new Array<any>()
  }

  ngOnInit(): void {
  }

  getAddressFromAPI(){
    this.JSONservice.getData().subscribe((data) => {
      // for (const add of data) {
      //   console.log(add.address);
      //   this.address = (add.address).data;
      // }
      // console.log(this.address);
      this.address = data;
      console.log(this.address);
      
    });
  }
}
