'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulação de autenticação com diferentes papéis (roles)
    const users = [
      { email: 'participante@teste.com', password: '123456', role: 'participante', redirect: '/form-participante2' },
      { email: 'organizador@teste.com', password: '123456', role: 'organizador', redirect: '/form-organizador' },
      { email: 'admin@teste.com', password: '123456', role: 'superadmin', redirect: '/superadmin' },
    ];

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('userRole', user.role); // Armazena o tipo de usuário
      alert(`Login realizado como ${user.role.toUpperCase()}!`);
      router.push(user.redirect); // Redireciona para a página correta
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/btt pt.jpg")' }} 
    >
      {/* Efeito de Sobreposição */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Formulário de Login */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Login</h2>
        <p className="text-gray-600 text-center mt-2">Acesse sua conta para continuar</p>

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Campo de Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Digite seu email"
              required
            />
          </div>

          {/* Campo de Senha */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Digite sua senha"
              required
            />
          </div>

          {/* Botão de Login */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg font-medium transition duration-300"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

