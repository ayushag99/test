import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ServerConfig from '../config/server';
import { TerminalInterface } from '../models/interface/TerminalInterface';

@Injectable({
  providedIn: 'root',
})
export class TerminalService {
  constructor(private http: HttpClient) {}
  getAllTerminals() {
    return this.http.get(ServerConfig.terminal.fetchFTRTerminals());
  }
  getById(id: string) {
    return this.http.get(ServerConfig.terminal.fetchTerminalByTerminalId(id));
  }
  createTerminal(terminal: TerminalInterface) {
    return this.http.post(ServerConfig.terminal.insertNewTerminal(), terminal);
  }
  updateTerminal(terminalID: any,newCapacity:number) {
    return this.http.put(ServerConfig.terminal.updateTerminal(terminalID,newCapacity), {});
  }
  deleteTerminal(terminalId:any){
    return this.http.delete(ServerConfig.terminal.removeTerminal(terminalId))
  }
}
