import { Observable } from 'rxjs';
import { URL } from 'url';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

export class HttpService {

    constructor(protected httpClient: HttpClient) {
    }

    get(url: URL, headers: HttpHeaders, withCredentials: boolean): Observable<Object> {
       return this.httpClient.get(url.href, { headers: headers, withCredentials : withCredentials});
    }

}