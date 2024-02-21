import axios from 'axios';
import Config from 'react-native-config';

const API_BASE_URL = 'https://listicle.deegeehub.com/api';

export const request = async ({url, method, data}: any) => {
  try {
    console.log(API_BASE_URL);
    const response = axios({
      method: method || 'get',
      url: `${API_BASE_URL}${url}`,
      data,
    });
    console.log(response);
    return response;
  } catch (err: any) {
    console.log('Error >>', err);
    throw err;
  }
};
