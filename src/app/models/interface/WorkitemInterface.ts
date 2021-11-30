export interface WorkitemInterface{
    userId?:number;
    workItemId?:string;
    itemName?:string;
    itemType?:string;
    itemDescription?:string;
    massageToRecipient?:string;
    quantity?:string;
    collectionCountry?:string;
    destinationCountry?:string;
    originHarborLocation?:string;
    selectedHarborLocations?:string;
    shippingDate?:Date;
    amount?:number;
}