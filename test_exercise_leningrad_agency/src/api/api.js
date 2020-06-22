import * as axios from "axios";



export const serverAPI = {
    sendData(data) {
        return axios.post('mail.php', data);
    }
}

// This is DAL