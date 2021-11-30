import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WorkitemInterface } from 'src/app/models/interface/WorkitemInterface';
import { UserService } from 'src/app/services/user-service.service';
import { WorkitemService } from 'src/app/services/workitem.service';

@Component({
  selector: 'app-all-workitems',
  templateUrl: './all-workitems.component.html',
  styleUrls: ['./all-workitems.component.css'],
})
export class AllWorkitemsComponent implements OnInit {
  dataSource!: MatTableDataSource<WorkitemInterface>;
  workitems: WorkitemInterface[];
  columns: string[] = [
    'workItemId',
    'itemName',
    'itemType',
    'shippingDate',
    'quantity',
    'amount',
    'collectionCountry',
    'destinationCountry',
    'terminal',
    'vehicle',
    'actions',
  ];
  isAdmin = false;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private workItemService: WorkitemService,
    private userService: UserService
  ) {
    this.workitems = [];
  }

  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin;
    // TODO: UserId is required here
    this.workItemService.getAllWorItems(1234).subscribe((response) => {
      this.workitems = response as WorkitemInterface[];
      this.dataSource = new MatTableDataSource(this.workitems);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteWorkItem(workItemId: string) {
    this.workItemService.deleteWOrkItem(workItemId).subscribe((response) => {
      this.ngOnInit();
    });
  }
  allocateVehicle(workItemId: string, vehicleNumber: any) {
    this.workItemService
      .allocateVehicle(workItemId, vehicleNumber)
      .subscribe((response) => {});
  }
  assignTerminal(workItemId: string) {
    this.workItemService
      .assignTerminal(workItemId, '')
      .subscribe((respose) => {});
  }
}
