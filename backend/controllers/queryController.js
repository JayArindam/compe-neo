import Query from "../models/queryModel.js"; // Adjust the import if necessary

const sendQuery = async (req, res) => {
    const { user, mail, query } = req.body;

    try {
        // Create a new query entry
        await Query.create({
            user,
            mail,
            query
        });

        res.json({ success: true, message: "Query Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export { sendQuery };