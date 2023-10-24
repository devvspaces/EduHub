module.exports = check => {
    return check === 'none' ||
        check === '' ||
        check === null ||
        check === undefined
        ? 'none'
        : check;
};
