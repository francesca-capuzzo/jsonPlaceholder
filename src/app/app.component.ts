import { Component } from '@angular/core';
import { JSONserviceService } from './services/jsonservice.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  
  title = 'JSON Placeholder';


  // showAddress(){
  //   this.JSONservice.getData().subscribe((data) => {
  //     this.address = data.address;
  //   })
  // }
}


