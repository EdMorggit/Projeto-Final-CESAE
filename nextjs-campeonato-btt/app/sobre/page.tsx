'use client';

import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Seção Sobre */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Sobre Nós</h1>
        <p className="text-lg mb-4">
          A Orientação em BTT é uma modalidade que combina a navegação com a prática de BTT, desafiando os participantes a encontrar pontos de controlo no terreno utilizando mapas específicos. Em Portugal, esta disciplina tem vindo a crescer, contando com uma estrutura organizacional dedicada à promoção e organização de eventos de qualidade.
        </p>
        <p className="text-lg">
          A nossa missão é fomentar a prática da Orientação em BTT, organizando eventos que proporcionem desafios emocionantes e promovam a interação com a natureza, sempre com um compromisso de excelência e segurança.
        </p>
      </section>

      {/* Seção Estrutura Organizacional */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Estrutura Organizacional</h2>
        <p className="text-lg mb-4">
          A organização de eventos de Orientação em BTT em Portugal é composta por uma equipa de gestão e várias áreas funcionais.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Função</th>
                <th className="py-2 px-4 border-b">Responsabilidades</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Direção do Evento</td>
                <td className="py-2 px-4 border-b">Supervisão geral e tomada de decisões estratégicas.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Coordenação Técnica</td>
                <td className="py-2 px-4 border-b">Planeamento dos percursos e definição dos pontos de controlo.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Logística</td>
                <td className="py-2 px-4 border-b">Gestão de materiais, montagem de infraestruturas e apoio no terreno.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Marketing e Comunicação</td>
                <td className="py-2 px-4 border-b">Divulgação do evento, relação com os media e gestão das redes sociais.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Inscrições e Atendimento</td>
                <td className="py-2 px-4 border-b">Gestão das inscrições dos participantes e suporte durante o evento.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Segurança</td>
                <td className="py-2 px-4 border-b">Garantia da segurança dos participantes e coordenação de emergências.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seção Contatos */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Contatos</h2>
        <p className="text-lg mb-4">
          Para mais informações ou esclarecimentos, entre em contato conosco através dos seguintes canais:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Email: <a href="mailto:info@orientacao-btt.pt" className="text-blue-500 underline">info@orientacao-btt.pt</a></li>
          <li>Telefone: <a href="tel:+351123456789" className="text-blue-500 underline">+351 123 456 789</a></li>
          <li>Endereço: Rua da Orientação, 1000-000 Lisboa, Portugal</li>
        </ul>
        <p className="text-lg">
          Siga-nos nas redes sociais para atualizações e novidades:
        </p>
        <ul className="list-none flex space-x-4 mt-4">
          <li>
            <a href="https://www.facebook.com/orientacao.btt" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/orientacao.btt" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/orientacao_btt" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Twitter
            </a>
          </li>
        </ul>
      </section>
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
};

export default AboutPage;
