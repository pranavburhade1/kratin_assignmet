import axios from "axios";

// in this file we are intialising axios with base url and header type end exporting it so we can acess it any where
export default axios.create({
    baseURL : "http://localhost:8076",
    headers : {
        "Content-Type" : "application/json"
    },
});