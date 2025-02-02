import React from 'react';

const RegulationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">Regulamento de Orientação em BTT</h1>
        <p className="text-center text-gray-600 mt-2">
          Conheça as principais diretrizes e normas para a prática de Orientação em Bicicleta Todo-Terreno.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">O que é a Orientação em BTT?</h2>
        <p className="text-gray-700 leading-relaxed">
          A Orientação em BTT é uma disciplina semelhante à Orientação Pedestre, mas onde a deslocação é feita em bicicleta todo-terreno, predominantemente por caminhos. Os participantes utilizam mapas específicos para navegar entre pontos de controlo no menor tempo possível.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mapas Utilizados</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="exemplomapa2.png"
            alt="Exemplo de Mapa de Orientação em BTT"
            className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"
          />
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              São utilizados mapas específicos para Orientação em BTT, desenhados segundo a especificação internacional definida pela IOF:
            </p>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Especificação</th>
                  <th className="py-2 px-4 border-b">Versão Atual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">ISMTBOM (International Specification for Mountain Bike Orienteering Maps)</td>
                  <td className="py-2 px-4 border-b">2022 (Janeiro 2022)</td>
                </tr>
              </tbody>
            </table>
            <p className="text-gray-700 leading-relaxed mt-4">
              As escalas utilizadas para os mapas de Orientação em BTT são de 1:7500, 1:10000 ou 1:15000, dependendo do formato do evento e da categoria dos atletas. Para mapas de Sprint, são utilizadas escalas de 1:5000 e 1:7500.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traçado de Percursos</h2>
        <p className="text-gray-700 leading-relaxed">
          O traçado de percursos para provas de Orientação em BTT segue um conjunto de princípios adaptados às características da disciplina, definidos pela Comissão de Orientação em BTT da IOF. Estes princípios incluem:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Localização dos pontos de controlo</li>
          <li>Regras para uma boa pernada</li>
          <li>Escolha do local de partidas e chegadas</li>
          <li>Perfil e distâncias de cada tipo de prova</li>
          <li>Adaptação do percurso à categoria do atleta</li>
          <li>Definição dos caminhos conforme a largura e transitabilidade</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Código de Conduta dos Orientistas em BTT</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Para garantir a segurança e a ética durante as provas, os orientistas em BTT devem seguir o seguinte código de conduta:
        </p>
        <ul className="list-decimal list-inside text-gray-700">
          <li className="mb-2">Os orientistas mais lentos devem dar prioridade aos mais rápidos.</li>
          <li className="mb-2">
            Quando dois orientistas se encontram de frente um para o outro:
            <ul className="list-disc list-inside ml-6">
              <li>Devem cruzar-se dando o ombro esquerdo.</li>
              <li>Os que descem têm prioridade.</li>
            </ul>
          </li>
          <li className="mb-2">É obrigatório o uso de capacete devidamente colocado durante todo o percurso, homologado segundo as normas ANSI, SNELL, CE95 ou GUV.</li>
          <li className="mb-2">O orientista pode transportar consigo material de reparação necessário, não sendo permitida assistência externa, exceto em caso de desistência ou para primeiros socorros.</li>
          <li className="mb-2">Devem ser respeitadas as regras do Código da Estrada em toda a área de competição.</li>
        </ul>
      </section>

      <footer className="text-center text-gray-600 mt-12">
        <p>Para mais informações, visite o portal de Orientação em Portugal.</p>
      </footer>
    </div>
  );
};

export default RegulationPage;
