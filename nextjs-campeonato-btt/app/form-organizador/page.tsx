'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FormOrganizador() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    setRole(userRole);

    if (userRole !== 'organizador' && userRole !== 'superadmin') {
      alert('Acesso negado. Apenas organizadores e superadmins podem acessar esta página.');
      router.push('/');
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Painel do Organizador</h1>
      <p className="text-center text-gray-600 mb-6">Aqui você pode cadastrar novas provas e gerenciar eventos.</p>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cadastro de Provas</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Nome da Prova</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Data</label>
            <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg font-medium transition duration-300">
            Cadastrar Prova
          </button>
        </form>
      </div>
    </div>
  );
}
