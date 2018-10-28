import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the CancerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CancerServiceProvider {
     public data: any;

  constructor(public http: HttpClient) {
    console.log('Hello CancerServiceProvider Provider');
  }

  load(sizeOfCancer) {
  if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }

  /*var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      const requestOptions = new RequestOptions({ headers: headers }); */

   // TODO: Encode the values using encodeURIComponent().

  /* let postData = {
            "C": "0.30"
    };*/

  //  body.append('password', password);

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    //https://reqres.in/api/users?page=2
    this.http.post('http://10.171.246.82:8081/api/train',
    {
      C : "0.30"
    },
    {
    headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
              }
    })
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
      });
  });
}

}
