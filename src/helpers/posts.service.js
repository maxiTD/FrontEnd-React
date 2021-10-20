import React from 'react';
import axios from 'axios';


export const getPosts = async(token) => {

    var config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/data/posts`,
        headers: { 
          'x-token': token
        },
    };

    const data = await axios(config);

    return data;
}
