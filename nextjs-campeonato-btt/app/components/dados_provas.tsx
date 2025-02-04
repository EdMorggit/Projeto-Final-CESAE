import { useEffect, useState } from "react";


interface Prova {
    id_prova: number;
    nome_prova: string;
    local_prova: string;
    data_prova: string;
    descricao_prova: string;
    informacao_percurso: string;
    categorias: string;
  }

const novaProva = () => {
    const [prova, setProva] = useState<Prova[]>([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        const fetchProva = async () => {
        try {
            const response = await fetch('/fetch_data_provas');
            if (response.ok) {
                const data = await response.json();
                setProva(data);
            }
        } catch (error) {
            console.log('Erro na obtenção dos dados: ', error);
        }
    };
        
        fetchProva();
    }, []);

    if (loading) return <div>A carregar...</div>;

    return (
        <div>
            <h1>Provas List</h1>
      <ul>
        {prova.map((prova) => (
          <li key={prova.id_prova}>
            <h3>{prova.nome_prova}</h3>
            <p>{prova.local_prova}</p>
            <p>{prova.data_prova}</p>
            <p>{prova.descricao_prova}</p>
            <p>{prova.informacao_percurso}</p>
            <p>{prova.categorias}</p>
          </li>
        ))}
      </ul>
        </div>
    );
};
export default novaProva;