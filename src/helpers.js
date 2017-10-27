import { DATE_FORMAT } from './constants';
import moment from 'moment';

const convertDateFromUtcString = (stringDate) => {
    // stringDate = 'Fri Oct 19 2018 00:00:00 GMT+0200 (Central Europe Daylight Time)';
    // dateFormat = 'YYYY-MM-DD' --- Look in moment.js documentation
    const resultedDate = stringDate ? moment(Date.parse(stringDate)).format(DATE_FORMAT) : null;
    return resultedDate;
};

const findUserById = (usersList, id) => {
    let match;
    usersList.forEach((user, index) => {
        if (Number(user.id) === Number(id)) {
            match = { user, index };
        }
    });

    return match;
};

const randomId = () => {
    return String(Math.random() * (10^15)).slice(2);
};

export {
    convertDateFromUtcString,
    findUserById,
    randomId
};
