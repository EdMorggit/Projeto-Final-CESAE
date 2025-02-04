"use client";

import Link from "next/link";

export default function Calendario() {
  const eventos = [
    {
      data: "15/06/2025",
      nome: "Grande Travessia Montanhas Mágicas (BTT)",
      local: "Serras do Montemuro, Arada e Gralheira",
      imagem: "/montanhasmagicasbtt.jpg",
    },
    {
      data: "22/07/2025",
      nome: "Rota do Corredor de Mouros",
      local: "Serra da Estrela",
      imagem: "/rota-corredor-mouros.jpg",
    },
    {
      data: "10/08/2025",
      nome: "Planalto do Escarpão e Ribeira de Quarteira",
      local: "Sul de Portugal",
      imagem: "/planalto-escarpao.jpg",
    },
    {
      data: "05/09/2025",
      nome: "Maratona BTT de Albufeira",
      local: "Albufeira, Portugal",
      imagem: "/maratona-btt-albufeira.jpg",
    },
    {
      data: "18/10/2025",
      nome: "Desafio BTT Sortelha",
      local: "Sortelha, Portugal",
      imagem: "/desafio-btt-sortelha.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Calendário de Provas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {eventos.map((evento, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="relative h-48 w-full">
              <img src={evento.imagem} alt={evento.nome} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-1">{evento.nome}</h2>
              <p className="text-gray-600">{evento.data}</p>
              <p className="text-gray-600">{evento.local}</p>
              
              {/* Botão "Ver Detalhes" com link correto para Provas Futuras */}
              <Link href={`/provasfuturas?prova=${encodeURIComponent(evento.nome)}`} passHref>
                <span className="inline-block mt-3 text-blue-600 hover:underline text-sm font-semibold cursor-pointer">
                  Ver detalhes
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Sobre o Campeonato</h3>
            <p className="text-sm">
              Somos apaixonados pelo desafio, quebrando barreiras e realizando sempre o melhor possível junto com você.
              Promovemos as maiores competições de Portugal! Conheça nossas competições e faça parte deste grupo de apaixonados pelo desafio.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Links Rápidos</h3>
            <ul className="text-sm space-y-1">
              <li><Link href="/calendario" className="hover:underline">Calendário</Link></li>
              <li><Link href="/provasfuturas" className="hover:underline">Provas Futuras</Link></li>
              <li><Link href="/regulamento" className="hover:underline">Regulamento</Link></li>
              <li><Link href="/form-participante2" className="hover:underline">Participantes</Link></li>
              <li><Link href="/form-organizador" className="hover:underline">Organizadores</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Nos Siga</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-pink-500">Instagram</a>
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
