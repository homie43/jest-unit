const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString');

const getData = async () => {
    try {
        const response = await axios.get(
            // получаем данные
            'https://jsonplaceholder.typicode.com/users'
        );
        // вытаскиваем id каждого пользоваетля
        const userIds = response.data.map((user) => user.id);
        // приводим их к строке
        return mapArrToString(userIds);
    } catch (e) {}
};

module.exports = getData;
