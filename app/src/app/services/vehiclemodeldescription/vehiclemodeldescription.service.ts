/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tokenService } from '../../services/token/token.service';

@Injectable()
export class vehiclemodeldescriptionService {
    urlBmodellerModelDescription = 'http://127.0.0.1:24483/api/description';

    modelDescription: any = [];

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
    getHeader(token: any, year: any, make: any, model: any) {
        return ({
            "Authorization": 'Bearer ' + token,
            "CorrelationId": this.guid(),
            "Content-Type": "application/json",
            "envIdentity": "DEN0210",
            "envOperator": "BIBOSP",
            "userName": "BIBOSP",
            "year": year,
            "make": make,
            "model": model
        });
    }

    // Get Vehicles
    getModelDescription(token, year, make, model) {
        this.http.get(this.urlBmodellerModelDescription, { headers: this.getHeader(token, year, make, model) }).subscribe(res => {
            this.modelDescription = res;
            this.modelDescription = this.modelDescription.vehicleMakesList;
        }, err => {
            console.log(err, "modelDescription request Failed");
        });
    }
}
