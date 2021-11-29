import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TerminalService } from 'src/app/services/terminal.service';
import { TerminalInterface } from '../../../models/interface/TerminalInterface';

@Component({
  selector: 'app-terminal-form',
  templateUrl: './terminal-form.component.html',
  styleUrls: ['./terminal-form.component.css'],
})
export class TerminalFormComponent implements OnInit, OnChanges {
  @Input() terminal!: TerminalInterface | null;
  @Input() isCreating = true;
  terminalForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  itemTypes = [ "Available", "Not Available"];
  constructor(private terminalService: TerminalService) {
    this.terminal={}
  }

  ngOnInit(): void {
    // // console.log(this.terminal)
    // if (this.terminal) {
    //   this.isCreating = false;
    // } else {
    //   this.isCreating = false;
    // }
    console.log(this.terminal, this.isCreating);
    this.terminalForm = new FormGroup({
      terminalName: new FormControl(
        this.terminal ? this.terminal.terminalName : '',
        [Validators.required]
      ),

      country: new FormControl(this.terminal ? this.terminal.country : '', [
        Validators.required,
      ]),

      itemType: new FormControl(this.terminal ? this.terminal.itemType : '', [
        Validators.required,
      ]),

      terminalDescription: new FormControl(
        this.terminal ? this.terminal.terminalDescription : '',
        [Validators.required]
      ),

      capacity: new FormControl(this.terminal ? this.terminal.capacity : '', [
        Validators.required,
      ]),

      harborLocation: new FormControl(
        this.terminal ? this.terminal.harborLocation : '',
        [Validators.required]
      ),
      status: new FormControl(this.terminal ? this.terminal.status : '', [
        Validators.required,
      ]),
    });
    if (this.isCreating == false) {
      this.terminalForm.controls['terminalName'].disable();
      this.terminalForm.controls['country'].disable();
      this.terminalForm.controls['itemType'].disable();
      this.terminalForm.controls['terminalDescription'].disable();
      this.terminalForm.controls['harborLocation'].disable();
      this.terminalForm.controls['status'].disable();
    }
  }
  ngOnChanges() {
    this.ngOnInit();
  }
  onSubmit() {
    console.log(this.terminalForm)
    this.terminal = {terminalId:this.terminal?.terminalId};
    this.terminal.terminalId = this.terminalForm.get('terminalId')?.value;

    this.terminal.terminalName = this.terminalForm.get('terminalName')?.value;

    this.terminal.country = this.terminalForm.get('country')?.value;

    this.terminal.itemType = this.terminalForm.get('itemType')?.value;

    this.terminal.terminalDescription = this.terminalForm.get(
      'terminalDescription'
    )?.value;

    this.terminal.capacity = this.terminalForm.get('capacity')?.value;

    this.terminal.Availablecapacity =
      this.terminalForm.get('Availablecapacity')?.value;

    this.terminal.status = this.terminalForm.get('status')?.value;

    this.terminal.harborLocation =
      this.terminalForm.get('harborLocation')?.value;
    if (this.isCreating) {
      this.terminalService
        .createTerminal(this.terminal)
        .subscribe((response) => {
          this.ngOnInit();
        });
    } else {
      this.terminalService
        .updateTerminal(
          this.terminal.terminalId,
          this.terminalForm.get('capacity')?.value
        )
        .subscribe(
          (response) => {
            this.successMessage = (response as { message: string }).message;
          },
          (err) => {
            this.errorMessage = 'Some Error Occured, Please try again';
          }
        );
    }
  }
}
