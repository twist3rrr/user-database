import { DATE_FORMAT, SORTING_USER_LIST_TYPES } from './constants';
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
    return String(Math.random() * (10^15)).slice(2, 16);
};

const arrayFromObj = (obj) => {
    const arr = [];
    Object.keys(obj).map(key => {
        obj[key].unicKey = key;
        arr.push(obj[key]);
        return true;
    });

    return arr;
};

// ============================= COMPARE FUNCTIONS ============================= //

/**
    @see  { randomId, compareById, compareByName, compareByLastName, compareByNickName, compareByDateOfBirth } connected to ./constants.js SORTING_USER_LIST_TYPES
 */

const compareById = (a, b) => {
    if (Number(a.id) < Number(b.id)) {
        return -1;
    }

    return 1;
};

const compareByName = (a, b) => {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
        return -1;
    }

    return 1;
};

const compareByLastName = (a, b) => {
    if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
        return -1;
    }

    return 1;
};

const compareByNickName = (a, b) => {
    if (a.nickName.toLowerCase() < b.nickName.toLowerCase()) {
        return -1;
    }

    return 1;
};

const compareByDateOfBirth = (a, b) => {
    const firstDate = new Date(a.dateOfBirth);
    const lastDate = new Date(b.dateOfBirth);
    if (firstDate < lastDate) {
        return -1;
    }

    return 1;
};

// ============== Gather compare functions in one object

const compareFunctions = {
    [SORTING_USER_LIST_TYPES.BY_ID]: compareById,
    [SORTING_USER_LIST_TYPES.BY_FIRST_NAME]: compareByName,
    [SORTING_USER_LIST_TYPES.BY_LAST_NAME]: compareByLastName,
    [SORTING_USER_LIST_TYPES.BY_NICK_NAME]: compareByNickName,
    [SORTING_USER_LIST_TYPES.BY_BIRTH_DATE]: compareByDateOfBirth
};

// ============================= COMPARE FUNCTIONS END ============================= //

export {
    arrayFromObj,
    convertDateFromUtcString,
    findUserById,
    randomId,
    compareFunctions
};
