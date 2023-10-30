const User = require('../models/user.model');
const pagination_indexer = require('../utils/Pagination_Indexer');

const getUsers = async (req, res) => {
    try {
        const pagination_index = req.query.pagination_index;
        const query_f_i = pagination_indexer(pagination_index, 50)?.first_index;
        const query_l_i = pagination_indexer(pagination_index, 50)?.last_index;

        const reviews = await User.find()
            .sort({ createdAt: -1 })
            .skip(query_f_i)
            .limit(query_l_i);

        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err?.message || 'An Error Occured!');
    }
}

module.exports = { getUsers }