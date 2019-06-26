import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // values: any;
  regiserMode = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getValues();
    console.log();

  }



  registerToggle() {
    this.regiserMode = true;



  }

//   getValues() {
//     this.http.get('http://localhost:5000/api/values').subscribe(response => {
//       this.values = response;

//     }, error => {
//       console.log(error);
//     });
// }

cancelReisterMode(regiserMode: boolean) {
  this.regiserMode = regiserMode;


}


}
