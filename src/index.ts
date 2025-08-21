//line no 2 is very important to use google object inside file & need to install npm i @types/google.maps even after using google api inside script tag
///<reference types="@types/google.maps"/>
import { User } from "./Users";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
