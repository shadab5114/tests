import Axios from 'axios';

const instance  = Axios.create({
    baseURL : 'https://burgerapp-44e77.firebaseio.com/'
})

export default instance;
