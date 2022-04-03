import axios from "axios"
const getData = async() => {
    let response= await axios.get("http://localhost:8080/HRCmyapp1/dataload");
    return response.data.users;
}
export default getData;