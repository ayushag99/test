import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TerminalInterface } from 'src/app/models/interface/TerminalInterface';
import { TerminalService } from 'src/app/services/terminal.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
})
export class TerminalComponent implements OnInit {
  tabIndex = 0;
  dataSource!: MatTableDataSource<TerminalInterface>;
  terminals: TerminalInterface[];
  terminal: TerminalInterface|null = null;
  columns: string[] = [
    'terminalId',
    'terminalName',

    'country',

    'itemType',

    'terminalDescription',

    'capacity',

    'Availablecapacity',

    'status',

    'harborLocation',
    'actions',
  ];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private terminalService: TerminalService) {
    this.terminals = [];
  }

  ngOnInit(): void {
    this.terminalService.getAllTerminals().subscribe((response) => {
      this.terminals = response as TerminalInterface[];
      this.dataSource = new MatTableDataSource(this.terminals);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    console.log("Rerender")
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
    this.terminalService.getById(id).subscribe((response) => {
      this.terminal = response as TerminalInterface;
      this.openUpdate();
      console.log(this.terminal);
      this.ngOnInit()
    });
  }
}
