"use client"; // Indica que este arquivo deve rodar no lado do cliente
import dynamic from "next/dynamic";
const Mapa = dynamic(() => import("./components/Mapa"), { ssr: false });

export default function HomePage() {
  return (
    <div>
      {/* Título do site - Agora com espaçamento ajustado */}
      <section className="pt-20 pb-6 bg-gray-100 text-center">
        <h1 className="text-5xl font-bold">Bem-vindo ao Campeonato Nacional de BTT</h1>
        <p className="text-lg mt-2">Acompanhe os eventos, regulamentos e participe das competições!</p>
      </section>

      {/* Hero Section com vídeo do YouTube - Distância ajustada */}
      <section className="relative h-[400px] mt-[-20px] flex items-center justify-center">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/cxabX70wnDE?autoplay=1&mute=1&loop=1&playlist=cxabX70wnDE&controls=0&modestbranding=1&rel=0"
          title="Vídeo de BTT"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </section>

      {/* Destaques */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Destaques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Imagem da Próxima Prova */}
          <div className="relative bg-gray-200 rounded shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-br-lg z-10">
              🏁 Próxima Prova
            </div>
            <div className="absolute top-8 left-0 bg-blue-400 text-white text-xs px-4 py-1 rounded-br-lg z-10">
              Montanhas Mágicas, Portugal - 15 de Junho de 2025
            </div>
            
            <img
              src="/montanhasmagicasbtt.jpg" 
              alt="Trecho da Prova de Cascais"
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

    {/* Prova 1 */}
    <div className="relative w-72 h-48 flex-shrink-0 rounded-lg shadow-lg overflow-hidden">
      <img src="/montanhasmagicasbtt.jpg" alt="Montanhas Mágicas BTT" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-center w-full py-2">
        <p className="text-sm font-semibold">Montanhas Mágicas BTT</p>
        <p className="text-xs">15 de Junho de 2025</p>
      </div>
    </div>

    {/* Prova 2 */}
    <div className="relative w-72 h-48 flex-shrink-0 rounded-lg shadow-lg overflow-hidden">
      <img src="/rota-corredor-mouros.jpg" alt="Rota do Corredor de Mouros" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-center w-full py-2">
        <p className="text-sm font-semibold">Rota do Corredor de Mouros</p>
        <p className="text-xs">22 de Julho de 2025</p>
      </div>
    </div>

    {/* Prova 3 */}
    <div className="relative w-72 h-48 flex-shrink-0 rounded-lg shadow-lg overflow-hidden">
      <img src="/planalto-escarpao.jpg" alt="Planalto do Escarpão" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-center w-full py-2">
        <p className="text-sm font-semibold">Planalto do Escarpão</p>
        <p className="text-xs">10 de Agosto de 2025</p>
      </div>
    </div>

    {/* NOVA Prova 4 - Albufeira */}
    <div className="relative w-72 h-48 flex-shrink-0 rounded-lg shadow-lg overflow-hidden">
      <img src="/maratona-btt-albufeira.jpg" alt="Maratona BTT de Albufeira" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-center w-full py-2">
        <p className="text-sm font-semibold">Maratona BTT de Albufeira</p>
        <p className="text-xs">5 de Setembro de 2025</p>
      </div>
    </div>

    {/* NOVA Prova 5 - Sortelha */}
    <div className="relative w-72 h-48 flex-shrink-0 rounded-lg shadow-lg overflow-hidden">
      <img src="/desafio-btt-sortelha.jpg" alt="Desafio BTT Sortelha" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-center w-full py-2">
        <p className="text-sm font-semibold">Desafio BTT Sortelha</p>
        <p className="text-xs">18 de Outubro de 2025</p>
      </div>
    </div>

  </div>
</section>
    </div>
  );
}
