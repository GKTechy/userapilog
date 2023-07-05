import { Coordinate } from "./coordinate.interface";

export interface User{
    uuid:string;
    firstName:string;
    lastName:string;
    gender:string;
    email:string;
    username:string;
    address:string;
    dateofBirth:string;
    phone:string;
    imageUrl:string;
    coordinate:Coordinate;
    
}