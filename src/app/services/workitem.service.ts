import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ServerConfig from '../config/server';
import { WorkitemInterface } from '../models/interface/WorkitemInterface';

@Injectable({
  providedIn: 'root',
})
export class WorkitemService {
  constructor(private http: HttpClient) {}
  createWorkItem(work: WorkitemInterface) {
    return this.http.post(ServerConfig.workItems.registerWorkItem(), work);
  }
  updateWorkItem(work: WorkitemInterface) {
    return this.http.patch(ServerConfig.workItems.registerWorkItem(), work);
  }

  getAllWorItems(userId: number) {
    return this.http.get(ServerConfig.workItems.getAllWorkItems(userId));
  }
  getWorItemById(userId: number, workItemId: string) {
    return this.http.get(ServerConfig.workItems.getWrokItemById(workItemId));
  }
  deleteWOrkItem(workItemId: string) {
    return this.http.delete(
      ServerConfig.workItems.deleteWorkitemById(workItemId)
    );
  }
  allocateVehicle(workitemid:any,vehicleNumber:any){
    return this.http.post(ServerConfig.workItems.allocateVehicle(workitemid),{"VehicleNumer":vehicleNumber})
  }
  assignTerminal(workItemId:any, terminalId:any){
    return this.http.post(ServerConfig.workItems.assignTerminalforWorkItem(workItemId),{})
  }
}
