import client from "./client";

const viewReservations = (date, conductorid) => client.get("/booking/viewreservedpassengers/"+date+"/"+conductorid);
const getResDetails = (resId) => client.get("/booking/viewreservationdetails/"+resId);
const deleteRes = (resId) => client.get("/booking/deleteres/"+resId);


export default {
    viewReservations,
    getResDetails,
    deleteRes
}