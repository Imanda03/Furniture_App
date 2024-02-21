import {request} from './request';

export const signup = async (values: any) => {
  try {
    const response = await request({
      url: '/user/register',
      method: 'post',
      data: values,
    });
    if (response) {
      const {email, password} = values;
      const loginResponse = await login({email, password});
      console.log('loginresponse: ' + loginResponse);
      return loginResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (values: any) => {
  try {
    const response = await request({
      url: '/user/login',
      method: 'post',
      data: values,
    });
    if (response) {
      if (response?.data?.token) {
        return response?.data?.token;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
