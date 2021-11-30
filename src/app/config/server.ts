import { TerminalInterface } from '../models/interface/TerminalInterface';

const USER_SERVICES = 'http://localhost:3000/user';
const WORKITEM_SERVICE = 'http://localhost:3000/workitems';
const VEHICLE_SERVER = 'http://localhost:3000/ftr/vehicles';
const TERMINAL_SERVER = 'http://localhost:3000/ftr/terminals';
const ServerConfig = {
  userService: 'http://localhost:3000/user',
  terminal: {
    insertNewTerminal: () => `${TERMINAL_SERVER}`,
    fetchFTRTerminals: () => `${TERMINAL_SERVER}`,
    updateTerminal: (terminalId: any, newCapacity: any) =>
      `${TERMINAL_SERVER}/${terminalId}/${newCapacity}`,
    fetchTerminalByItemType: (itemType: any) =>
      `${TERMINAL_SERVER}/fetchTerminalByItemType/${itemType}`,
    removeTerminal: (terminalId: any) => `${TERMINAL_SERVER}/${terminalId}`,
    fetchTerminalByTerminalId: (terminalId: any) =>
      `${TERMINAL_SERVER}/fetchTerminalByTerminalId/${terminalId}`,
  },
  vehicle: {
    insertNewVehicle: () => `${VEHICLE_SERVER}`,
    fetchAvailableVehicles: () => `${VEHICLE_SERVER}`,
    updateVehicleStatus: (vehicleNumber: any) =>
      `${VEHICLE_SERVER}/${vehicleNumber}`,
    fetchVehicleDetailsByVehicleName: (vehicleName: any) =>
      `${VEHICLE_SERVER}/managed-name/${vehicleName}`,
    removeVehicle: (vehicleNumber: any) => `${VEHICLE_SERVER}/${vehicleNumber}`,
    fetchVehicleDetailsByVehicleNumber: (vehicleNumber: any) =>
      `${VEHICLE_SERVER}/managed-number/${vehicleNumber}`,
  },
  workItems: {
    getAllWorkItems: (userId: any) => `${WORKITEM_SERVICE}`,
    getWorkItemByUserId: (user_Id: any) =>
      `${WORKITEM_SERVICE}/user/${user_Id}`,
    getWrokItemById: (id: any) => `${WORKITEM_SERVICE}/${id}`,
    deleteWorkitemById: (id: any) => `${WORKITEM_SERVICE}/${id}`,
    registerWorkItem: () => `${WORKITEM_SERVICE}`,
    updateWorkItem: () => `${WORKITEM_SERVICE}`,
    allocateVehicle: (workItemId: any) =>
      `https://localhost:8004/ftr/workItems/managed-vehicle/${workItemId}`,
    assignTerminalforWorkItem: (workItemId: any) =>
      `https://localhost:8004/ftr/workItems/managed-terminal/${workItemId}`,
  },
  users: {
    registerUser: () => `${USER_SERVICES}`,
    updateUser: () => `${USER_SERVICES}`,
    getUserById: (user_id: any) => `${USER_SERVICES}/${user_id}`,
    deleteUser: (user_id: any) => `${USER_SERVICES}/${user_id}`,
    loginUser: () => `${USER_SERVICES}/login`,
    loginAdmin: () => `${USER_SERVICES}/admin/login`,
  },
};
export default ServerConfig;

// const USER_SERVER="https://localhost:333/ftr"

// const Server={
//   users:{
//     createUserProfile: ()=>`${USER_SERVER}/userProfile`,
//     viewUserProfile: (userId:number)=>`${USER_SERVER}/userProfile/${userId}`,
//     updateUserProfile:  (userId:number)=>`${USER_SERVER}/userProfile/${userId}`,
//     removeUserProfile:  (userId:number)=>`${USER_SERVER}/userProfile/${userId}`,
//     login: ()=>`${USER_SERVER}/userProfile/login`,

//   }
// }
