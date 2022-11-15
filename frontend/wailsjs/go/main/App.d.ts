// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {hosts} from '../models';

export function AddHost(arg1:string,arg2:string,arg3:string):Promise<string>;

export function DeleteHost(arg1:string,arg2:number):Promise<string>;

export function GetHostsText():Promise<string>;

export function GetList():Promise<hosts.List>;

export function GetListByGroup():Promise<hosts.ListByGroup>;

export function SaveAllHosts(arg1:string):Promise<string>;

export function SwitchByGroupName(arg1:string,arg2:boolean):Promise<string>;

export function SwitchByHostnameId(arg1:string,arg2:number,arg3:boolean):Promise<string>;
