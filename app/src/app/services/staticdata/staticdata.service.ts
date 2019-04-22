/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tokenService } from '../../services/token/token.service';

@Injectable()
export class staticdataService {
    urlBmodeller = 'http://127.0.0.1:24483/api/';

    title: any = [];
    maritalStatus: any = [];
    additional: any = [];


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

    // Get Static Data Title
    getStaticData(token) {

        let d = new Date;
        let currTime = d.getHours() + ":" + d.getMinutes();
        let expires_in;
        let expiryTime;

        console.log(currTime >= expiryTime);

        if (currTime >= expiryTime) {
            this.tokenService.genToken();
            console.log("Your token has expired, please wait while it been refreshed and try again");
        } else {

            this.http.get(this.urlBmodeller + 'title', { headers: this.getHeader(token) }).subscribe(res => {
                this.title = res['generalB'] || [];
            }, err => {
                console.log(err, "Title request Failed");
            });

            this.http.get(this.urlBmodeller + 'ms', { headers: this.getHeader(token) }).subscribe(res => {
                this.maritalStatus = res['generalB'] || [];
            }, err => {
                console.log(err, "maritalStatus request Failed");
            });

            this.http.get(this.urlBmodeller + 'additional', { headers: this.getHeader(token) }).subscribe(res => {
                this.additional = res;
            }, err => {
                console.log(err, "additional request Failed");
            });
        }

    }

    getHeader(token: any) {
        return ({
            "Authorization": 'Bearer ' + token,
            "CorrelationId": this.guid(),
            "Content-Type": "application/json",
            "envIdentity": "DEN0210",
            "envOperator": "BIBOSP",
            "userName": "BIBOSP"
        });
    }
}
