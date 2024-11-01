const db = require("../db/database");
const bcrypt = require("bcrypt");
const saltRounds = 10;



//Register or Create User Function
const createUser = async (req: any, res: any) => {
    const { username, password, email } = req.body;
    const query = 'INSERT INTO users(username, PHash, email) VALUES($1, $2, $3) RETURNING *';
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = await db.query(query, [username, passwordHash, email]);
        res.status(201).send({
            newUser
        })

    } catch (err: any) {
        res.status(500).send({
            err: err.message
        });
    }

}

//Get All Users
const getUsers = async (req: any, res: any) => {
    console.log(req);
    console.log(res);

    const query = 'SELECT * FROM users'
};

module.exports = {
    createUser
}