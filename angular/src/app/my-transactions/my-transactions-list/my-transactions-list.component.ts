import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from "../../transaction";
import { TransactionFormComponent} from "../../transaction-form/transaction-form.component";
import { TransactionService } from "../../transaction.service";
@Component({
  selector: 'app-my-transactions-list',
  templateUrl: './my-transactions-list.component.html',
  styleUrls: ['./my-transactions-list.component.css']
})
export class MyTransactionsListComponent implements OnInit {
  @ViewChild(TransactionFormComponent) transactionForm: TransactionFormComponent;
  
    transactions = [];
    filteredTransactions = [];
  
    selectedStatus = '';
  
    constructor(
       private transactionService: TransactionService
    ) {}
  
    ngOnInit() {
      this.transactionService.getTransactions().subscribe(transactions => {
          this.transactions = transactions;
          this.filterTransactions();
       });
    }
  
    onFilterChange(value: string) {
      this.selectedStatus = value;
      this.filterTransactions();
    }
  
    filterTransactions() {
      this.filteredTransactions = this.selectedStatus === '' ? this.transactions: this.transactions.filter(transaction => transaction.status === this.selectedStatus);
    }
  
  }
  
