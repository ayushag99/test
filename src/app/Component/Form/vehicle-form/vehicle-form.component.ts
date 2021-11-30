import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';
import { VehicleInterface } from '../../../models/interface/VehicleInterface';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
})
export class VehicleFormComponent implements OnInit, OnChanges {
  @Input() vehicle!: VehicleInterface | null;
  @Input() isCreating = true;
  status = ['Active', 'Retired', 'InProgress'];
  vehicleForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    // if (!this.vehicle) {
    //   this.isCreating = true;
    // }
    this.vehicleForm = new FormGroup({
      vehicleNumber: new FormControl(
        this.vehicle ? this.vehicle.vehicleNumber : '',
        [Validators.required]
      ),
      vehicleName: new FormControl(
        this.vehicle ? this.vehicle.vehicleName : '',
        [Validators.required]
      ),
      maxLiftingCapacity: new FormControl(
        this.vehicle ? this.vehicle.maxLiftingCapacity : '',
        [Validators.required]
      ),
      retireDate: new FormControl(this.vehicle ? this.vehicle.retireDate : '', [
        Validators.required,
      ]),
      vehicleStatus: new FormControl(
        this.vehicle ? this.vehicle.vehicleStatus : '',
        [Validators.required]
      ),
      country: new FormControl(this.vehicle ? this.vehicle.country : '', [
        Validators.required,
      ]),
      harborLocation: new FormControl(
        this.vehicle ? this.vehicle.harborLocation : '',
        [Validators.required]
      ),
    });
    if (this.isCreating == false) {
      this.vehicleForm.controls['vehicleName'].disable();
      this.vehicleForm.controls['vehicleNumber'].disable();
      this.vehicleForm.controls['maxLiftingCapacity'].disable();
      this.vehicleForm.controls['retireDate'].disable();
      this.vehicleForm.controls['country'].disable();
      this.vehicleForm.controls['harborLocation'].disable();
    }
    // if (this.isCreating == false && this.vehicle == null) {
    //   this.vehicleForm.controls['vehicleStatus'].disable();
    // }
  }
  ngOnChanges() {
    this.ngOnInit();
  }
  onSubmit() {
    this.vehicle = {};
    this.vehicle.vehicleNumber = this.vehicleForm.get('vehicleNumber')?.value;
    this.vehicle.vehicleName = this.vehicleForm.get('vehicleName')?.value;
    this.vehicle.maxLiftingCapacity =
      this.vehicleForm.get('maxLiftingCapacity')?.value;
    this.vehicle.retireDate = this.vehicleForm.get('retireDate')?.value;
    this.vehicle.vehicleStatus = this.vehicleForm.get('vehicleStatus')?.value;
    this.vehicle.country = this.vehicleForm.get('country')?.value;

    this.vehicle.harborLocation = this.vehicleForm.get('harborLocation')?.value;
    if (this.isCreating) {
      this.vehicleService.createVehicle(this.vehicle).subscribe(
        (response) => {
          this.successMessage = (response as { message: string }).message;
          this.ngOnInit();
        },
        (err) => {
          this.errorMessage = 'Invalid Data';
        }
      );
    } else {
      this.vehicleService
        .updateVehicleStatus(
          this.vehicle.vehicleNumber,
          this.vehicleForm.get('vehicleStatus')?.value
        )
        .subscribe(
          (response) => {
            this.successMessage = (response as { message: string }).message;
            this.ngOnInit();
          },
          (err) => {
            this.errorMessage = 'Invalid Data';
          }
        );
    }
  }
}
