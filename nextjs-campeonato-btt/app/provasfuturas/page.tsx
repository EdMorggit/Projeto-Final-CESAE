"use client";

import { useState } from "react";

type Race = {
  id: number;
  data: string;
  nome: string;
  local: string;
  imagem: string;
  apresentacao: string;
  detalhes: string;
  itinerario: string;
  comoChegar: string;
  avisos: string;
  etapas: string;
};

export default function ProvasFuturasPage() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const races: Race[] = [
    {
      id: 1,
      data: "15/06/2025",
      nome: "Grande Travessia Montanhas Mágicas (BTT)",
      local: "Serras do Montemuro, Arada e Gralheira, Portugal",
      imagem: "/montanhasmagicasbtt.jpg",
      apresentacao:
        "A Grande Travessia Montanhas Mágicas é uma aventura única que atravessa trilhas desafiadoras, revelando paisagens surpreendentes.",
      detalhes:
        "Data: 15 de Junho de 2025 | Distância: 120 km | Dificuldade: Alta – exige preparo físico e técnico.",
      itinerario:
        "O percurso é dividido em 8 etapas, passando por subidas técnicas, descidas rápidas e trechos panorâmicos.",
      comoChegar:
        "Acesso via autoestrada e estradas secundárias com estacionamento próximo ao ponto de partida.",
      avisos:
        "Verifique as condições climáticas, realize um check-up prévio e use sempre equipamentos de proteção.",
      etapas:
        "Etapa 1: Partida; Etapa 2: Subida íngreme; Etapa 3: Descida técnica; Etapa 4: Trilha mista; Etapa 5: Pico; Etapa 6: Retorno; Etapa 7: Preparação para a final; Etapa 8: Chegada.",
    },
    {
      id: 2,
      data: "22/07/2025",
      nome: "Rota do Corredor de Mouros",
      local: "Serra da Estrela, Portugal",
      imagem: "/rota-corredor-mouros.jpg",
      apresentacao:
        "A Rota do Corredor de Mouros proporciona desafios técnicos intensos, com paisagens que mesclam história e natureza.",
      detalhes:
        "Data: 22 de Julho de 2025 | Distância: 100 km | Dificuldade: Média-Alta.",
      itinerario:
        "Percurso com longas subidas e descidas acentuadas, explorando trilhas históricas e vistas espetaculares.",
      comoChegar:
        "Acesso por estradas principais e suporte logístico nos pontos estratégicos da região.",
      avisos:
        "Esteja preparado para variações climáticas e utilize equipamentos de proteção adequados.",
      etapas:
        "Etapa 1: Início; Etapa 2: Subida contínua; Etapa 3: Descida técnica; Etapa 4: Chegada.",
    },
    {
      id: 3,
      data: "10/08/2025",
      nome: "Planalto do Escarpão e Ribeira de Quarteira",
      local: "Sul de Portugal",
      imagem: "/planalto-escarpao.jpg",
      apresentacao:
        "Esta prova une a robustez do Planalto do Escarpão à beleza natural da Ribeira de Quarteira, proporcionando um percurso diversificado e desafiador.",
      detalhes:
        "Data: 10 de Agosto de 2025 | Distância: 110 km | Dificuldade: Média.",
      itinerario:
        "Trilhas variadas com desafios em cada trecho, desde áreas de subida a descidas sinuosas.",
      comoChegar:
        "Fácil acesso por autoestradas e estradas secundárias, com pontos de apoio distribuídos ao longo do percurso.",
      avisos:
        "Respeite os limites de velocidade e mantenha hidratação durante a prova.",
      etapas:
        "Etapa 1: Partida; Etapa 2: Trilha inicial; Etapa 3: Pico; Etapa 4: Retorno.",
    },
    {
      id: 4,
      data: "05/09/2025",
      nome: "Maratona BTT de Albufeira",
      local: "Albufeira, Portugal",
      imagem: "/maratona-btt-albufeira.jpg",
      apresentacao:
        "A Maratona BTT de Albufeira desafia os participantes com trilhas que exploram a beleza e os desafios do litoral sul.",
      detalhes:
        "Data: 05 de Setembro de 2025 | Distância: 90 km | Dificuldade: Média.",
      itinerario:
        "O percurso combina trechos litorâneos e trilhas no interior, oferecendo vistas únicas do litoral e do campo.",
      comoChegar:
        "Acesso facilitado pela autoestrada, com apoio logístico disponível durante todo o percurso.",
      avisos:
        "Verifique a previsão do tempo e prepare-se para possíveis ventos fortes; equipamentos de proteção são essenciais.",
      etapas:
        "Etapa 1: Litoral; Etapa 2: Interior; Etapa 3: Finalização.",
    },
    {
      id: 5,
      data: "18/10/2025",
      nome: "Desafio BTT Sortelha",
      local: "Sortelha, Portugal",
      imagem: "/desafio-btt-sortelha.jpg",
      apresentacao:
        "O Desafio BTT Sortelha é conhecido por combinar técnica, resistência e o charme histórico dos vilarejos, proporcionando uma experiência inesquecível.",
      detalhes:
        "Data: 18 de Outubro de 2025 | Distância: 95 km | Dificuldade: Alta.",
      itinerario:
        "Percurso por trilhas históricas e naturais, com desafios técnicos e paisagens de tirar o fôlego.",
      comoChegar:
        "Acesso por estradas secundárias; opções de transporte público também estão disponíveis.",
      avisos:
        "Cuide da hidratação, use equipamentos de proteção e esteja preparado para terrenos acidentados.",
      etapas:
        "Etapa 1: Início; Etapa 2: Meio do percurso; Etapa 3: Finalização.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Cabeçalho */}
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Provas Futuras</h1>
        <p className="text-lg text-gray-700">
          Explore cada prova para conhecer detalhes sobre o percurso, etapas e avisos.
        </p>
      </header>

      {/* Lista de Provas */}
      <div className="space-y-12">
        {races.map((race) => (
          <div key={race.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Imagem Hero do Evento */}
            <div className="relative h-64 w-full">
              <img
                src={race.imagem}
                alt={race.nome}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-4 z-10">
                <h2 className="text-2xl font-bold text-white">{race.nome}</h2>
                <p className="text-white">{race.data} | {race.local}</p>
              </div>
            </div>

            {/* Detalhes Expandidos */}
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Apresentação</h3>
                  <p className="text-gray-700">{race.apresentacao}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Detalhes</h3>
                  <p className="text-gray-700">{race.detalhes}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Itinerário</h3>
                  <p className="text-gray-700">{race.itinerario}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Como Chegar</h3>
                  <p className="text-gray-700">{race.comoChegar}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Avisos</h3>
                  <p className="text-gray-700">{race.avisos}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Etapas</h3>
                  <p className="text-gray-700">{race.etapas}</p>
                </div>
              </div>
              <div className="mt-6 text-right">
                <a
                  href={`/prova/${race.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-semibold"
                >
                  Ver detalhes completos
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Sobre o Evento</h3>
            <p className="text-sm">
              O Campeonato Nacional de BTT reúne ciclistas de todo o país para enfrentar desafios incríveis e desfrutar de trilhas únicas.
            </p>
          </div>
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
                <a href="/inscricoes" className="hover:underline">
                  Inscrições
                </a>
              </li>
            </ul>
          </div>
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

  