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
    </div>
  );
}
