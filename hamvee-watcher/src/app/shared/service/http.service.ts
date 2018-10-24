import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) {
    }

    get(url: URL, headers: HttpHeaders, withCredentials: boolean): Observable<Object> {
       return this.httpClient.get(url.href, { headers: headers, withCredentials : withCredentials});
    }

}