import { getDBConnection } from "../lib/database";
import { NextApiRequest, NextApiResponse } from 'next';

// A API route obtém os dados das tabelas da base de dados em MySQL.

// Foi necessário importar NextApiRequest e NextApiResponse para que o TypeScript reconhece as 
// constantes request e response.

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method === 'GET') {
        try {
            const connection = await getDBConnection();

            const [provasRows] = await connection.execute('SELECT * FROM prova');

            await connection.end(); // Fecha a conexão.

            response.status(200).json({ prova: provasRows });
        
        } catch (error) {
            console.error(error);
            response.status(500).json({ message: 'Error fetching data' });
          }
        } else {
          response.status(405).json({ message: 'Method Not Allowed' });
        }
        
    }
