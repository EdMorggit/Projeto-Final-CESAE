import mysql from 'mysql2';

const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

database.connect((erro) => {
    if (erro) {
        console.error('A ligação à base de dados falhou:', erro.stack);
        return;
    }
    console.log('Ligado à base de dados em MySQL')
});

export default database;