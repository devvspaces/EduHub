const none_null = require('./None_Null_Checker_DP');

module.exports = (pagination_index, max_results) => {
    const p_index = parseInt(pagination_index, 10) ?? 0;
    const max_result = parseInt(max_results, 10) ?? 50;

    const first_index = p_index <= 0 ? 0 : p_index * max_result;
    const last_index = p_index <= 0 ? 50 : (p_index + 1) * max_result;

    return {
        first_index,
        last_index,
    };
};
