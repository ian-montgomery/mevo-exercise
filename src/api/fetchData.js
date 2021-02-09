import request from "superagent";

const homeZoneApi = "https://api.mevo.co.nz/public/home-zones/all";
const vehiclesApi = "https://api.mevo.co.nz/public/vehicles/all";




export function homeZone (){
  return request
  .get(mevoHomeZoneApi)
  .then(res=>res.body.json())
}



export function vehicles(){
  return request
  .get(mevoVehiclesApi)
  .then(res=>res.body.json())
}
