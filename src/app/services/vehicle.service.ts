import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ServerConfig from '../config/server';
import { VehicleInterface } from '../models/interface/VehicleInterface';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getAllVehicle() {
    return this.http.get(ServerConfig.vehicle.fetchAvailableVehicles());
  }

  getVehicleById(id: string) {
    return this.http.get(
      ServerConfig.vehicle.fetchVehicleDetailsByVehicleNumber(id)
    );
  }
  updateVehicleStatus(vehicleNumber: any, vehicleStatus: any) {
    return this.http.patch(
      ServerConfig.vehicle.updateVehicleStatus(vehicleNumber),
      { vehicleStatus: vehicleStatus }
    );
  }
  createVehicle(vehicle: VehicleInterface) {
    return this.http.post(ServerConfig.vehicle.insertNewVehicle(), {...vehicle,retireDate:formatDate(vehicle.retireDate)});
  }
  deleteVehicle(vehicleNumber:any){
    return this.http.delete(ServerConfig.vehicle.removeVehicle(vehicleNumber))
  }
}

function formatDate(date:any) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

// console.log(formatDate('Sun May 11,2014'));