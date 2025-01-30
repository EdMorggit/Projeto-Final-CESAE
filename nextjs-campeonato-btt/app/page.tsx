export default function HomePage() {
  return (
    <div>
      {/* Hero Section com imagem de fundo */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: 'url("/home-btt.jpg")' }}
      >
        <div className="bg-black bg-opacity-50 p-6 text-center rounded">
          <h1 className="text-5xl font-bold">Bem-vindo ao Campeonato Nacional de BTT</h1>
          <p className="text-lg mt-2">Acompanhe os eventos, regulamentos e participe das competições!</p>
        </div>
      </section>

      {/* Destaques do campeonato */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Destaques</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-4 text-center rounded">
            <h3 className="text-xl font-bold">🏁 Próxima Prova</h3>
            <p>Cascais, Portugal - 15 de Junho de 2025</p>
          </div>
          <div className="bg-gray-200 p-4 text-center rounded">
            <h3 className="text-xl font-bold">📜 Regulamento Oficial</h3>
            <p>Confira todas as regras para participação.</p>
          </div>
          <div className="bg-gray-200 p-4 text-center rounded">
            <h3 className="text-xl font-bold">📝 Faça sua Inscrição</h3>
            <p>Garanta sua vaga na próxima competição.</p>
          </div>
        </div>
      </section>

      {/* Seção sobre o campeonato */}
      <section className="py-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">Sobre o Campeonato</h2>
        <p className="text-lg max-w-2xl mx-auto mt-4">
          O Campeonato Nacional de BTT é uma competição anual que reúne ciclistas de todo o país em eventos desafiadores. Participe e teste seus limites em diferentes categorias!
        </p>
      </section>
    </div>
  );
}
