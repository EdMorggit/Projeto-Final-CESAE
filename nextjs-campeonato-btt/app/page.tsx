"use client"; // Indica que este arquivo deve rodar no lado do cliente
import dynamic from "next/dynamic";
const Mapa = dynamic(() => import("./components/Mapa"), { ssr: false });

export default function HomePage() {
  return (
    <div>
      {/* Título do site - espaçamento ajustado */}
      <section className="pt-20 pb-6 bg-gray-100 text-center">
        <h1 className="text-5xl font-bold">Bem-vindo ao Campeonato Nacional de BTT</h1>
        <p className="text-lg mt-2">
          Acompanhe os eventos, regulamentos e participe das competições!
        </p>
      </section>

      {/* Hero Section com vídeo local (MP4) */}
      <section className="relative h-[400px] flex items-center justify-center">
        <video
          className="w-full h-[500px] object-cover rounded-lg shadow-md"
          src="/btt-video2.mp4"
          autoPlay
          loop
          muted
          controls={false}
        />
      </section>

      {/* Destaques */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-center mt-10 mb-6">Destaques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Próxima Prova */}
          <div className="relative bg-gray-200 rounded shadow-md overflow-hidden">
            {/* Rótulos fixados na imagem */}
            <div className="absolute top-0 left-0 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-br-lg z-10">
              🏁 Próxima Prova
            </div>
            <div className="absolute top-8 left-0 bg-blue-400 text-white text-xs px-4 py-1 rounded-br-lg z-10">
              Montanhas Mágicas, Portugal - 15 de Junho de 2025
            </div>
            <img
              src="/montanhasmagicasbtt.jpg"
              alt="Trecho da Prova de Montanhas Mágicas"
              className="w-full h-72 object-cover"
            />
          </div>
          {/* Mapa Interativo */}
          <div className="h-72">
            <Mapa />
          </div>
        </div>
      </section>

      {/* Scroll de Provas Futuras */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Provas Futuras</h2>
        <div className="overflow-x-auto whitespace-nowrap flex space-x-6 px-6 scrollbar-hide">
          {/* Lista de Provas */}
          {[
            { nome: "Montanhas Mágicas BTT", data: "15 de Junho de 2025", imagem: "/montanhasmagicasbtt.jpg" },
            { nome: "Rota do Corredor de Mouros", data: "22 de Julho de 2025", imagem: "/rota-corredor-mouros.jpg" },
            { nome: "Planalto do Escarpão", data: "10 de Agosto de 2025", imagem: "/planalto-escarpao.jpg" },
            { nome: "Maratona BTT de Albufeira", data: "5 de Setembro de 2025", imagem: "/maratona-btt-albufeira.jpg" },
            { nome: "Desafio BTT Sortelha", data: "18 de Outubro de 2025", imagem: "/desafio-btt-sortelha.jpg" },
          ].map((prova, index) => (
            <a key={index} href="/provasfuturas" className="relative w-72 h-48 flex-shrink-0 rounded-lg shadow-lg overflow-hidden">
              <img src={prova.imagem} alt={prova.nome} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-center w-full py-2">
                <p className="text-sm font-semibold">{prova.nome}</p>
                <p className="text-xs">{prova.data}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Seção de Patrocinadores */}
      <section className="bg-gray-100 py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Patrocinadores</h2>
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-6 px-6">
          {/* Logo 1 */}
          <div className="flex justify-center">
            <img 
              src="/patrocinador1.png" 
              alt="Patrocinador 1" 
              className="h-24 md:h-32 object-contain"
            />
          </div>
          {/* Logo 2 */}
          <div className="flex justify-center">
            <img 
              src="/patrocinador2.png" 
              alt="Patrocinador 2" 
              className="h-24 md:h-32 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
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
              <li><a href="/calendario" className="hover:underline">Calendário</a></li>
              <li><a href="/provasfuturas" className="hover:underline">Provas Futuras</a></li>
              <li><a href="/regulamento" className="hover:underline">Regulamento</a></li>
              <li><a href="/form-participante2" className="hover:underline">Participantes</a></li>
              <li><a href="/form-organizador" className="hover:underline">Organizadores</a></li>
            </ul>
          </div>
          {/* Coluna 3 - Redes Sociais */}
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
