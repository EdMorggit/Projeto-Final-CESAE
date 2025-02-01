"use client"; // Indica que este arquivo deve rodar no lado do cliente
import dynamic from "next/dynamic";
const Mapa = dynamic(() => import("./components/Mapa"), { ssr: false });

export default function HomePage() {
  return (
    <div>
      {/* Hero Section com vídeo do YouTube */}
<section className="relative h-[400px] flex items-center justify-center mt-16">
  <div className="absolute top-0 left-0 w-full h-full">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/cxabX70wnDE?autoplay=1&mute=1&loop=1&playlist=cxabX70wnDE&controls=0&modestbranding=1&rel=0"
      title="Vídeo de BTT"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  </div>
  <div className="relative bg-black bg-opacity-50 p-6 text-center rounded text-white">
    <h1 className="text-5xl font-bold">Bem-vindo ao Campeonato Nacional de BTT</h1>
    <p className="text-lg mt-2">Acompanhe os eventos, regulamentos e participe das competições!</p>
  </div>
</section>

      {/* Destaques */}
<section className="py-8">
  <h2 className="text-3xl font-semibold text-center mb-6">Destaques</h2>
  <div className="grid md:grid-cols-2 gap-6">
    
    {/* Imagem da Próxima Prova */}
    <div className="bg-gray-200 p-4 text-center rounded shadow-md h-72 flex flex-col justify-center">
      <h3 className="text-xl font-bold">🏁 Próxima Prova</h3>
      <p>Cascais, Portugal - 15 de Junho de 2025</p>
      <img
  src="/montanhasmagicasbtt.jpg" // Caminho correto para imagens na pasta public/
  alt="Trecho da Prova de Cascais"
  className="w-full h-full object-cover rounded mt-4"
/>
    </div>

    {/* Mapa Interativo */}
    <div className="col-span-1 h-72">
      <Mapa />
    </div>

  </div>
</section>

      {/* Sobre o Campeonato */}
      <section className="py-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">Sobre o Campeonato</h2>
        <p className="text-lg max-w-2xl mx-auto mt-4">
          O Campeonato Nacional de BTT é uma competição anual que reúne ciclistas de todo o país em eventos desafiadores. 
        </p>
      </section>
    </div>
  );
}
