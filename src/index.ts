import { User } from "./models/User";
import { Company } from "./models/Company";
import { CustomMap } from "./models/CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map-container");

customMap.addMarker(user);
customMap.addMarker(company);
