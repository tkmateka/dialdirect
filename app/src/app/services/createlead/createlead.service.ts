/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class createleadService {

    createleadURL = "http://127.0.0.1:24483/api/createlead";

    constructor(private http: HttpClient) {
    }

    // createlead() {
    //      return this.http.post(this.createleadURL, ).subscribe((res: any) => {
    //         console.log(res, "Create Lead Response")
    //      }, err => {
    //          console.log(res, "Create Lead Error")
    //      });
    // }
}
