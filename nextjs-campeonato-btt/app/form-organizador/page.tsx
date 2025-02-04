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

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Local da prova</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Apresentação</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Detalhes</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Itinerário</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Como chegar</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Avisos a dar aos participantes</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Etapas</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg font-medium transition duration-300">
            Cadastrar Prova
          </button>
        </form>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {/* Coluna 1 - Sobre */}
    <div>
      <h3 className="text-lg font-bold mb-2">Sobre o Campeonato</h3>
      <p className="text-sm">
        Somos apaixonados pelo desafio, quebrando barreiras e realizando sempre o melhor possível junto com você. 
        Promovemos as maiores competições de Portugal! Conheça nossas competições e faça parte deste grupo de apaixonados pelo desafio.
      </p>
    </div>
    {/* Coluna 2 - Links Rápidos */}
    <div>
      <h3 className="text-lg font-bold mb-2">Links Rápidos</h3>
      <ul className="text-sm space-y-1">
        <li>
          <a href="/calendario" className="hover:underline">
            Calendário
          </a>
        </li>
        <li>
          <a href="/provasfuturas" className="hover:underline">
            Provas Futuras
          </a>
        </li>
        <li>
          <a href="/regulamento" className="hover:underline">
            Regulamento
          </a>
        </li>
        <li>
          <a href="/form-participante2" className="hover:underline">
            Participantes
          </a>
        </li>
        <li>
          <a href="/form-organizador" className="hover:underline">
            Organizadores
          </a>
        </li>
      </ul>
    </div>
    {/* Coluna 3 - Redes Sociais */}
    <div>
      <h3 className="text-lg font-bold mb-2">Nos Siga</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-500">
          Facebook
        </a>
        <a href="#" className="hover:text-blue-400">
          Twitter
        </a>
        <a href="#" className="hover:text-pink-500">
          Instagram
        </a>
      </div>
    </div>
  </div>
  <div className="text-center text-sm text-gray-500 mt-6">
    © {new Date().getFullYear()} Campeonato Nacional de BTT. Todos os direitos reservados.
  </div>
</footer>
    </div>
  );
}
