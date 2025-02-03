'use client';

import { useState } from 'react';

interface Prova {
  id: number;
  nome: string;
  organizador: string;
  data: string;
  local: string;
  status: 'Pendente' | 'Aprovado' | 'Rejeitado';
}

export default function SuperAdminPage() {
  const [provas, setProvas] = useState<Prova[]>([
    { id: 1, nome: "Prova Cascais", organizador: "Clube BTT Cascais", data: "15/06/2025", local: "Cascais, Portugal", status: "Pendente" },
    { id: 2, nome: "Grande Travessia Montanhas Mágicas", organizador: "Associação BTT Montanhas", data: "22/06/2025", local: "Serra do Montemuro", status: "Pendente" },
    { id: 3, nome: "Rota do Corredor de Mouros", organizador: "Federação BTT Portugal", data: "05/07/2025", local: "Serra da Estrela", status: "Pendente" },
  ]);

  // Função para atualizar status da prova
  const atualizarStatus = (id: number, novoStatus: 'Aprovado' | 'Rejeitado') => {
    setProvas(provas.map(prova => (prova.id === id ? { ...prova, status: novoStatus } : prova)));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Painel do Super Admin</h1>
      <p className="text-center text-gray-600 mb-6">Gerencie as provas cadastradas pelos organizadores.</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="py-3 px-4 border-b">Nome da Prova</th>
              <th className="py-3 px-4 border-b">Organizador</th>
              <th className="py-3 px-4 border-b">Data</th>
              <th className="py-3 px-4 border-b">Local</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Ações</th>
            </tr>
          </thead>
          <tbody>
            {provas.map(prova => (
              <tr key={prova.id} className="text-center border-b">
                <td className="py-3 px-4">{prova.nome}</td>
                <td className="py-3 px-4">{prova.organizador}</td>
                <td className="py-3 px-4">{prova.data}</td>
                <td className="py-3 px-4">{prova.local}</td>
                <td className={`py-3 px-4 font-semibold ${prova.status === 'Aprovado' ? 'text-green-600' : prova.status === 'Rejeitado' ? 'text-red-600' : 'text-yellow-500'}`}>
                  {prova.status}
                </td>
                <td className="py-3 px-4 flex justify-center space-x-2">
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg"
                    onClick={() => atualizarStatus(prova.id, 'Aprovado')}
                    disabled={prova.status !== "Pendente"}
                  >
                    Aprovar
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
                    onClick={() => atualizarStatus(prova.id, 'Rejeitado')}
                    disabled={prova.status !== "Pendente"}
                  >
                    Rejeitar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
