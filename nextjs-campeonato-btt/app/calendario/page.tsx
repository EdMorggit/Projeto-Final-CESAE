export default function Calendario() {
    const eventos = [
      { data: "15/06/2025", nome: "Prova Cascais", local: "Cascais, Portugal" },
      { data: "22/06/2025", nome: "Prova Porto", local: "Porto, Portugal" },
      { data: "05/07/2025", nome: "Prova Lisboa", local: "Lisboa, Portugal" },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Calendário de Provas</h1>
  
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border border-gray-300 px-4 py-2">Data</th>
              <th className="border border-gray-300 px-4 py-2">Nome da Prova</th>
              <th className="border border-gray-300 px-4 py-2">Local</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((evento, index) => (
              <tr key={index} className="text-center hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{evento.data}</td>
                <td className="border border-gray-300 px-4 py-2">{evento.nome}</td>
                <td className="border border-gray-300 px-4 py-2">{evento.local}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  