import mysql from 'mysql2';



import * as dotenv from 'dotenv'
dotenv.config()
const connection= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'root',
    database: "zara"
});

connection.connect((err)=>{
    if(err) console.log(err)
    console.log(`connected to database `)
})


export default connection

