export default function ListaDeProvas() {
    const provas = [
      { id: 1, nome: "Prova Cascais", local: "Cascais, Portugal", data: "15/06/2025" },
      { id: 2, nome: "Prova Porto", local: "Porto, Portugal", data: "22/06/2025" },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Provas Disponíveis</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {provas.map((prova) => (
            <div key={prova.id} className="bg-gray-200 p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold">{prova.nome}</h2>
              <p className="text-lg">{prova.local}</p>
              <p className="text-lg">{prova.data}</p>
              <a
                href={`/pagina_prova_individual?id=${prova.id}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Ver detalhes
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  