var Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password: 'courgettes60',
    host:'0.0.0.0',
    port :5432,
    database:'tododb'
})
module.exports=pool;