import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WorkItem } from 'src/app/models/WorkItem';
import { WorkitemService } from 'src/app/services/workitem.service';
import { WorkitemInterface } from '../../../models/interface/WorkitemInterface';

@Component({
  selector: 'app-work-item-form',
  templateUrl: './work-item-form.component.html',
  styleUrls: ['./work-item-form.component.css'],
})
export class WorkItemFormComponent implements OnInit {
  workItem: WorkitemInterface | null = null;
  workItemForm!: FormGroup;
  isCreating = true;
  minDate: Date;
  constructor(
    private route: ActivatedRoute,
    private workItemService: WorkitemService
  ) {
    this.minDate = new Date();
    let id = this.route.snapshot.params['id'];
    if (id !== undefined) {
      this.workItemService.getWorItemById(1234, id).subscribe((response) => {
        this.workItem = response as WorkitemInterface;
        this.isCreating = false;
        this.ngOnInit();
      });
    }
  }

  ngOnInit(): void {
    if (this.workItem == null) {
      this.isCreating = true;
    }

    this.workItemForm = new FormGroup({
      userId: new FormControl(this.workItem ? this.workItem.userId : '', [
        Validators.required,
      ]),
      workItemId: new FormControl(
        this.workItem ? this.workItem.workItemId : '',
        [Validators.required]
      ),
      itemName: new FormControl(this.workItem ? this.workItem.itemName : '', [
        Validators.required,
      ]),
      itemType: new FormControl(this.workItem ? this.workItem.itemType : '', [
        Validators.required,
      ]),
      itemDescription: new FormControl(
        this.workItem ? this.workItem.itemDescription : '',
        [Validators.required]
      ),
      massageToRecipient: new FormControl(
        this.workItem ? this.workItem.massageToRecipient : '',
        [Validators.required]
      ),
      quantity: new FormControl(this.workItem ? this.workItem.quantity : '', [
        Validators.required,
      ]),
      collectionCountry: new FormControl(
        this.workItem ? this.workItem.collectionCountry : '',
        [Validators.required]
      ),
      destinationCountry: new FormControl(
        this.workItem ? this.workItem.destinationCountry : '',
        [Validators.required]
      ),
      originHarborLocation: new FormControl(
        this.workItem ? this.workItem.originHarborLocation : '',
        [Validators.required]
      ),
      selectedHarborLocations: new FormControl(
        this.workItem ? this.workItem.selectedHarborLocations : '',
        [Validators.required]
      ),
      shippingDate: new FormControl(
        this.workItem ? new Date(this.workItem.shippingDate as Date) : '',
        [Validators.required]
      ),
      amount: new FormControl(this.workItem ? this.workItem.amount : '', [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    let workItem = new WorkItem();
    workItem.userId = this.workItemForm.get('userId')?.value;
    workItem.workItemId = this.workItemForm.get('workItemId')?.value;
    workItem.itemName = this.workItemForm.get('itemName')?.value;
    workItem.itemType = this.workItemForm.get('itemType')?.value;
    workItem.itemDescription = this.workItemForm.get('itemDescription')?.value;
    workItem.massageToRecipient =
      this.workItemForm.get('massageToRecipient')?.value;
    workItem.quantity = this.workItemForm.get('quantity')?.value;
    workItem.collectionCountry =
      this.workItemForm.get('collectionCountry')?.value;
    workItem.destinationCountry =
      this.workItemForm.get('destinationCountry')?.value;
    workItem.originHarborLocation = this.workItemForm.get(
      'originHarborLocation'
    )?.value;
    workItem.selectedHarborLocations = this.workItemForm.get(
      'selectedHarborLocations'
    )?.value;
    workItem.shippingDate = this.workItemForm.get('shippingDate')?.value;
    workItem.amount = this.workItemForm.get('amount')?.value;

    if (this.isCreating) {
      this.workItemService.createWorkItem(workItem).subscribe((respones) => {
        console.log(respones);
      });
    } else {
      this.workItemService.updateWorkItem(workItem).subscribe((respose) => {
        console.log(respose);
      });
    }
  }
}
