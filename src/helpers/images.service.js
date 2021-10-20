import React from 'react';
import axios from 'axios';


export const getImages = async(pageNumber = 0, pageSize = 10, token) => {

    const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/data/images?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        headers: { 
          'x-token': token
        }
    };

    const {data} = await axios(config);
    //console.log(data);

    return data;
}
