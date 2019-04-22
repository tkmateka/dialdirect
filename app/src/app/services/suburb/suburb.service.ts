/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tokenService } from '../../services/token/token.service';

@Injectable()
export class suburbService {
    urlBmodeller = 'http://127.0.0.1:24483/api/';

    suburbs: string = "";
    suburbsName: any = [];

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

    // Get Suburbs
    getSuburbs(token) {
        // Get suburbs
        this.http.get(this.urlBmodeller + 'suburb', { headers: this.getHeader(token) }).subscribe(res => {
            this.suburbs = res;
            console.log(this.suburbs, "Response Suburb");
            console.log(this.suburbsName, "Suburb Name");
            return this.suburbs;
        }, err => {
            console.log(err, "additional request Failed");
        });
    }

    getHeader(token: any) {
        return ({
            "Authorization": 'Bearer ' + token,
            "CorrelationId": this.guid(),
            "Content-Type": "application/json",
            "envIdentity": "DEN0210",
            "envOperator": "BIBOSP",
            "userName": "BIBOSP",
            "suburb": this.suburbsName,
        });
    }
}
