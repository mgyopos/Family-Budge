import { Injectable } from '@angular/core';
import { Transaction } from "./transaction";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('http://localhost:4200/api/transaction');
  }

   getTransaction(id: number): Observable<Transaction> {
        return this.http.get<Transaction>(`http://localhost:4200/api/transaction/${id}`);
   }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`http://localhost:4200/api/transaction/${transaction.id}`, transaction, httpOptions);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`http://localhost:4200/api/transaction/create`, transaction, httpOptions);
  }

  activeUser(): Observable<string> {
    return this.http.post<string>(`http://localhost:4200/api/user/activeInUser`, httpOptions);
  
  
  }

}
