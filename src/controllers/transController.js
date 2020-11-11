export const transHome = function (req, res) {
    res.send("The Request Method is " + req.method)
};

export const viewTransaction = function (req, res) {
    if (req.params.id === undefined) {
        // view all transactions
        res.send('View All Transactions');
    } else {
        // View One Transaction
        res.send('View Transactions Specified in ID');
    }
};

export const addTransaction = function (req, res) {
    res.status(200).json({ message: "Transactions - Add" })
};

export const editTransaction = function (req, res) {
    res.status(200).json({ message: "Transactions - Edit" })
};

export const deleteTransaction = function (req, res) {
    res.status(200).json({ message: "Transactions - Delete" })
};