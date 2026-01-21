export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Emovi Sports
      </h1>

      <p className="text-zinc-400 max-w-xl mb-8">
        Uniformes esportivos personalizados para times, escolas e empresas.
        Camisas, agasalhos, corta-ventos e muito mais.
      </p>

      <a
        href="https://wa.me/554799197756"
        target="_blank"
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition"
      >
        Solicitar orçamento no WhatsApp
      </a>
    </main>
  );
}
