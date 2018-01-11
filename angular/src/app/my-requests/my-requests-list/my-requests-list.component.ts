import { Component, OnInit, ViewChild } from '@angular/core';
import { Request } from "../../request";
import { RequestFormComponent} from "../../request-form/request-form.component";
import { RequestService } from "../../request.service";
@Component({
  selector: 'app-my-requests-list',
  templateUrl: './my-requests-list.component.html',
  styleUrls: ['./my-requests-list.component.css']
})
export class MyRequestsListComponent implements OnInit {
  @ViewChild(RequestFormComponent) requestForm: RequestFormComponent;
  
    requests = [];
    filteredRequests = [];
  
    selectedStatus = '';
  
    constructor(
        private requestService: RequestService
    ) {}
  
    ngOnInit() {
      this.requestService.getRequests().subscribe(requests => {
         this.requests = requests;
          this.filterRequests();
       });
       console.log(this.requests[0]);
    }
  
    onFilterChange(value: string) {
      this.selectedStatus = value;
      this.filterRequests();
    }
  
    filterRequests() {
      this.filteredRequests = this.selectedStatus === '' ? this.requests : this.requests.filter(request=> request.status === this.selectedStatus);
    }
  
  }
  
