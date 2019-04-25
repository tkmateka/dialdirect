/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tokenService } from '../../services/token/token.service';

@Injectable()
export class vehiclemakeService {
    urlBmodellerMake = 'http://127.0.0.1:24483/api/make';

    make: any = [];

    constructor(private http: HttpClient, private tokenService: tokenService) {
    }

    // Generate Correlation ID
    guid() {
        return this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4();
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    // Headers
    getHeader(token: any, year: any) {
        return ({
            "Authorization": 'Bearer ' + token,
            "CorrelationId": this.guid(),
            "Content-Type": "application/json",
            "envIdentity": "DEN0210",
            "envOperator": "BIBOSP",
            "userName": "BIBOSP",
            "year": year
        });
    }

    // Get Vehicles
    getMake(token, year) {
        this.http.get(this.urlBmodellerMake, { headers: this.getHeader(token, year) }).subscribe(res => {
            this.make = res;
            this.make = this.make.vehicleMakeList;
        }, err => {
            console.log(err, "Make request Failed");
        });
    }
}
