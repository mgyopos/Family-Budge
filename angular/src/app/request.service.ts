import { Injectable } from '@angular/core';
import { Request } from "./request";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>('http://localhost:4200/api/request');
  }

   getRequest(id: number): Observable<Request> {
        return this.http.get<Request>(`http://localhost:4200/api/request/${id}`);
   }

  updateRequest(request: Request): Observable<Request> {
    return this.http.put<Request>(`http://localhost:4200/api/request/${request.id}`, request, httpOptions);
  }

  addRequest(request: Request): Observable<Request> {
    return this.http.post<Request>(`http://localhost:4200/api/request`, request, httpOptions);
  }

}
