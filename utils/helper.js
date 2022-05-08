// Create the time stamps for the posts/comments here

module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },

    format_amount: (amount) => {
        return parseInt(amount).toLocaleString()
    },

};