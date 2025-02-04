'use client';

import { useState } from 'react';

export default function FormParticipante() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inscrição realizada com sucesso!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Inscrição para Participantes</h1>
      <form className="bg-gray-100 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        {/* Nome */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Categoria */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Categoria</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="Individual">Individual</option>
            <option value="Coletiva">Coletiva</option>
            
          </select>
        </div>

        {/* Botão de Inscrição */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg font-medium transition duration-300"
        >
          Inscrever-se
        </button>
      </form>
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
