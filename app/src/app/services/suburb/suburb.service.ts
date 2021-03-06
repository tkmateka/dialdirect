/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tokenService } from '../../services/token/token.service';

@Injectable()
export class suburbService {
    urlBmodeller = 'http://127.0.0.1:24483/api/';

    suburbsName: string = "";
    suburbs: any = [];
    postCode: any = [];

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

    // Get Suburbs
    getSuburbs(token) {
        this.http.get(this.urlBmodeller + 'suburb', { headers: this.getHeader(token) }).subscribe(res => {
            this.suburbs = res;
            this.suburbs = this.suburbs.suburbsList;
        }, err => {
            console.log(err, "suburb request Failed");
        });
    }
}
