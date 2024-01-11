import axios from "axios";

const API_KEY = "24ee0d2f809c498d9eb6676b1dd2214b";
axios.defaults.baseURL = "https://api.opencagedata.com/geocode/v1/json";

export const userInfo = async (lat, long) => {
    try {
        const { data } = await axios.get(`?q=${lat}+${long}&key=${API_KEY}`);
        console.log(data.results[0].annotations.currency.iso_code);
        return data.results[0].annotations.currency.iso_code;
    } catch (error) {
    console.log(error);
    }
}