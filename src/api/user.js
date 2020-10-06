import client from "./client";

const updateDetails = (userInfo) => client.post("/user/update", userInfo);
const updatePassword = (userInfo) => client.post("/user/changepassword", userInfo);
const userDetails = () => client.get("/user/me");
const viewPassengers = (userInfo) => client.get("/user/viewpassenger",userInfo);


export default {
    updateDetails,
    updatePassword,
    userDetails,
    viewPassengers
}