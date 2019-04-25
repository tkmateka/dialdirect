/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tokenService } from '../../services/token/token.service';

@Injectable()
export class vehiclemodelService {
    urlBmodellerModel = 'http://127.0.0.1:24483/api/model';

    model: any = [];

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
    getHeader(token: any, year: any, make: any) {
        return ({
            "Authorization": 'Bearer ' + token,
            "CorrelationId": this.guid(),
            "Content-Type": "application/json",
            "envIdentity": "DEN0210",
            "envOperator": "BIBOSP",
            "userName": "BIBOSP",
            "year": year,
            "make": make
        });
    }

    // Get Vehicles
    getModel(token, year, make) {
        this.http.get(this.urlBmodellerModel, { headers: this.getHeader(token, year, make) }).subscribe(res => {
            this.model = res;
            this.model = this.model.vehicleModelList;
        }, err => {
            console.log(err, "Model request Failed");
        });
    }
}
