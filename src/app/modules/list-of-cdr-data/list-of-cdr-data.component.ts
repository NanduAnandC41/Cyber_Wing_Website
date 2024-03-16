import { Component } from '@angular/core';
import { BackendConnectionService } from '../../services/backend-connection.service';

@Component({
  selector: 'app-list-of-cdr-data',
  templateUrl: './list-of-cdr-data.component.html',
  styleUrls: ['./list-of-cdr-data.component.css']
})
export class ListOfCdrDataComponent {

  items: any[] = [];
  pageOfItems?: Array<any>;
  sortProperty: string = 'id';
  sortOrder = 1;
  loading = false;


  constructor(private backendConnectionService: BackendConnectionService) { }

  ngOnInit() {
    // fetch items from the backend api
    this.loading = true;
    // this.http.get<any[]>('/items')
    //     .subscribe(x => {
    //         this.items = x;
    //         this.loading = false;
    //     });
    this.backendConnectionService.getListOfCdrData().subscribe(res => {
      if(res){
        console.log(res);
        this.pageOfItems = res.data;
        this.loading = false;
      }
    });

  }

  onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.pageOfItems = pageOfItems;
  }

  sortBy(property: string) {
    this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
    this.sortProperty = property;
    this.items = [...this.items.sort((a: any, b: any) => {
        // sort comparison function
        let result = 0;
        if (a[property] < b[property]) {
            result = -1;
        }
        if (a[property] > b[property]) {
            result = 1;
        }
        return result * this.sortOrder;
    })];
  }

  sortIcon(property: string) {
      if (property === this.sortProperty) {
          return this.sortOrder === 1 ? '☝️' : '👇';
      }
      return '';
  }

}
