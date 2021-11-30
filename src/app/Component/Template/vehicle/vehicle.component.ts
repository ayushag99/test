import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleInterface } from 'src/app/models/interface/VehicleInterface';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  tabIndex = 0;
  vehicles: VehicleInterface[];
  vehicle: VehicleInterface | null = null;
  dataSource!: MatTableDataSource<VehicleInterface>;
  columns: string[] = [
    'vehicleNumber',
    'vehicleName',
    'maxLiftingCapacity',
    'retireDate',
    'vehicleStatus',
    'country',
    'harborLocation',
    'actions'
  ];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(private vehicleService: VehicleService) {
    this.vehicles = [];
  }

  ngOnInit(): void {
    this.vehicleService.getAllVehicle().subscribe((response) => {
      this.vehicles = response as VehicleInterface[];
      this.dataSource = new MatTableDataSource(this.vehicles);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openUpdate() {
    this.tabIndex = 2;
  }
  update(id: string) {
    console.log(id)
    this.vehicleService.getVehicleById(id).subscribe((response) => {
      this.vehicle = response as VehicleInterface;
      this.openUpdate();
      console.log(this.vehicle);
      this.ngOnInit()
    });
  }

}
