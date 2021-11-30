import { WorkitemInterface } from './interface/WorkitemInterface';

export class WorkItem implements WorkitemInterface {
  userId: number | undefined;
  itemName: string | undefined;
  workItemId: string | undefined;
  itemDescription: string | undefined;
  itemType: string | undefined;
  massageToRecipient: string | undefined;
  quantity: string | undefined;
  collectionCountry: string | undefined;
  destinationCountry: string | undefined;
  originHarborLocation: string | undefined;
  selectedHarborLocations: string | undefined;
  shippingDate: Date | undefined;
  amount: number | undefined;
  constructor(
    userId?: number,
    workItemId?: string,
    itemName?: string,
    itemType?: string,
    itemDescription?: string,
    massageToRecipient?: string,
    quantity?: string,
    collectionCountry?: string,
    destinationCountry?: string,
    originHarborLocation?: string,
    selectedHarborLocations?: string,
    shippingDate?: Date,
    amount?: number
  ) {
    this.userId = userId;
    this.workItemId = workItemId;
    this.itemName = itemName;
    this.itemType = itemType;
    this.itemDescription = itemDescription;
    this.massageToRecipient = massageToRecipient;
    this.quantity = quantity;
    this.collectionCountry = collectionCountry;
    this.destinationCountry = destinationCountry;
    this.originHarborLocation = originHarborLocation;
    this.selectedHarborLocations = selectedHarborLocations;
    this.shippingDate = shippingDate;
    this.amount = amount;
  }
}
