import axios from 'axios';

const headers = {
    "content-type": "application/json",
    "Authorization": "<token>"
};

export function DoRequest(post: any): any {
    return axios.post(process.env.REACT_APP_API_URL!,post,{headers: headers});
}