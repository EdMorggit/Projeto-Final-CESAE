"use client";

import { getDBConnection } from "../../../lib/database";

export default function ProvaIndividual() {
    return (
      <div>
        {/* Título e Localização (com imagem de fundo) */}
        <header
  className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center text-white mt-16"
  style={{
    backgroundImage: 'url("/btt pt.jpg")',
    backgroundPosition: 'center',
  }}
>
          <div className="bg-black bg-opacity-50 p-4 rounded text-center">
            <h1 className="text-4xl font-bold">Prova de BTT Cascais</h1>
            <p className="text-xl mt-2">Cascais, Portugal</p>
            <p className="text-lg mt-1">15 de Junho de 2025</p>
            <button
  onClick={() => window.location.href = "/form-participante"}
  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-lg"
>
  Inscreva-se
</button>

          </div>
        </header>
  
        {/* Descrição da Prova */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Descrição da Prova</h2>
          <p className="text-lg">
            Participe da emocionante prova de BTT em Cascais. Com percursos desafiadores, esta
            competição oferece vistas deslumbrantes e uma experiência inesquecível.
          </p>
          <p className="text-lg mt-4">
            Aberta a todos os níveis, é a oportunidade perfeita para testar sua resistência e habilidade.
          </p>
        </section>
  
        {/* Informações Adicionais */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Informações Adicionais</h2>
  
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-2">Pacote de Inscrição</h3>
              <p className="text-lg">Inclui número de participante, brindes exclusivos e seguro.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Categorias</h3>
              <p className="text-lg">Individual, Duplas e Equipes.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Percursos</h3>
              <p className="text-lg">
                Distâncias: 20 km, 50 km e 100 km, adaptados para todos os níveis.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">FAQs</h3>
              <p className="text-lg">
                Consulte as perguntas frequentes para todas as dúvidas sobre a prova.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Regulamentos</h3>
              <p className="text-lg">Leia as regras para garantir sua participação.</p>
            </div>
          </div>
        </section>
  
        {/* Patrocinadores */}
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4">Patrocinadores</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="/images/logo1.png" alt="Patrocinador 1" className="h-16 mx-auto" />
              <img src="/images/logo2.png" alt="Patrocinador 2" className="h-16 mx-auto" />
              <img src="/images/logo3.png" alt="Patrocinador 3" className="h-16 mx-auto" />
              <img src="/images/logo4.png" alt="Patrocinador 4" className="h-16 mx-auto" />
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-lg font-semibold">Siga-nos</h3>
                <p>Facebook | Instagram | Twitter</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Contato</h3>
                <p>Telefone: +351 123 456 789</p>
                <p>Email: contato@bttcascais.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Mais Informações</h3>
                <p>Fale Conosco | Termos de Uso</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }