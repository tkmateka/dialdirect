/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tokenService } from '../../services/token/token.service';

@Injectable()
export class createvehicleService {
    vehicleUrl = "http://127.0.0.1:24483/api/createvehicle";
    vehicleRes:any;

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
    getHeader(token: any, refNumber: any) {
        return ({
            "Authorization": 'Bearer ' + token,
            "CorrelationId": this.guid(),
            "Content-Type": "application/json",
            "envIdentity": "DEN0210",
            "envOperator": "BIBOSP",
            "userName": "BIBOSP",
            "refNumber": refNumber
        });
    }

    // Create Vehicles
    createVehicle(token, vehicleDetails, refNumber) {
            console.log(refNumber, "refNumber");
        this.http.post(this.vehicleUrl, vehicleDetails, { headers: this.getHeader(token, refNumber) }).subscribe(res => {
            this.vehicleRes = res;
            console.log(refNumber, "Ref Number Service");
            console.log(res, "Create Vehicle");
        }, err => {
            console.log(err, "Create Vehicles request Failed");
        });
    }
}
