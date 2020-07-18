import client from "./client";

const updateDetails = (userInfo) => client.post("/user/update", userInfo);
const updatePassword = (userInfo) => client.post("/user/changepassword", userInfo);
const userDetails = () => client.get("/user/me");



export default {
    updateDetails,
    updatePassword,
    userDetails
}