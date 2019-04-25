/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class tokenService {
    tokenUrl = "http://127.0.0.1:24483/api/token";
    date;
    access_token;
    expires_in;
    expiryTime;

    constructor(private http: HttpClient) {
    }

    // Generate Token
    genToken() {
        let headers = {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Accept": "application/x-www-form-urlencoded; charset=UTF-8"
        }

        return this.http.get(this.tokenUrl, { headers: headers }).subscribe((res: any) => {
            this.access_token = res;
            console.log(this.access_token, "Response");
            this.access_token = this.access_token.access_token;

            // store token
            localStorage.setItem('token', this.access_token);

            if (this.access_token) {
                console.log(this.access_token, " got token");
                this.expiryTime = Date.now() + 3600000;
                this.date = Date.now();
                console.log(this.expiryTime);
                console.log(this.date);

                // Store
                localStorage.setItem("expiryTime", this.expiryTime);
                // Reload Page
                window.location.reload(true);
            }
        }, err => {
            console.log(err, " json Failed");
        })
    }
}
