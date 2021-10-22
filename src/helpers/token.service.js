import React from 'react';
import axios from 'axios';

export const tokenRenew = async(token) => {
    var config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/auth/renew`,
        headers: { 
            'x-token': token
        },
    };
    
    const data = await axios(config);

    return data
}