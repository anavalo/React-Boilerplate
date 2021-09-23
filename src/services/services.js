import axios from 'axios';

export const getUser = async () => {
  try {
    const res = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API}/users/authenticateUser`,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    }).catch(err => err);
    let { data } = res;
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
