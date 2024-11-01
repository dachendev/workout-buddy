require('dotenv').config();
const pg = require("pg");
const { Pool, Client } = pg;

const pool = new Pool({
    process,
    ssl: { rejectunAuthorized: false }
});

export const query = async (text: any, params: any, callback: any) => {
    const result = pool.query(text, params, callback);
    return result;
};

export const client = async () => {
    return await pool.connect();
};