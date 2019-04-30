/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class createleadService {

    createleadURL = "http://127.0.0.1:24483/api/createlead";

    refNumber: any = '';

    constructor(private http: HttpClient) {
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
            "userName": "BIBOSP"
        });
    }

    createlead(token, lead) {
         return this.http.post(this.createleadURL, lead, { headers: this.getHeader(token) }).subscribe((res: any) => {
            this.refNumber = res;
            console.log(this.refNumber, "Ref Number");
            this.refNumber = this.refNumber.referenceNumber;
            console.log(lead, "Lead Object");
         }, err => {
             console.log(err, "Create Lead Error");
         });
    }
}