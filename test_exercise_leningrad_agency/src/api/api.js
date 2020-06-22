import * as axios from "axios";
import qs from 'qs';


export const serverAPI = {

    sendData(data) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: 'mail.php'
        };
        return axios(options);
    }
}

// This is DAL