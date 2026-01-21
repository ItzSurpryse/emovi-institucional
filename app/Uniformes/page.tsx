import Header from "@/app/components/Header";
import WhatsAppButton from "@/app/components/WhatsAppButton";

function Bloco({
  titulo,
  texto,
}: {
  titulo: string;
  texto: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center",
        marginBottom: 80,
      }}
      
    >
      {/* IMAGEM PLACEHOLDER */}
      <div
        style={{
          width: "100%",
          height: 260,
          background: "#000",
          borderRadius: 8,
        }}
      />

      {/* TEXTO */}
      <div>
        <h3 style={{ marginBottom: 12 }}>{titulo}</h3>
        <p style={{ color: "#ccc", lineHeight: 1.6 }}>{texto}</p>
      </div>
    </div>
  );
  
}

export default function UniformesPage() {
  return (
    <>
      <Header />

      <main className="container">
        {/* TOPO */}
        <section className="section">
          <h1>Uniformes Esportivos</h1>
          <p>
            Produzimos uniformes personalizados para times, escolas, empresas
            e eventos esportivos, sempre com foco em qualidade e conforto.
          </p>
        </section>

        {/* BLOCOS (IGUAL GOOGLE SITES) */}
        <Bloco
          titulo="Uniformes Esportivos"
          texto="Camisas, shorts e conjuntos esportivos personalizados para times amadores e profissionais."
        />

        <Bloco
          titulo="Uniformes Escolares"
          texto="Uniformes personalizados para escolas, turmas, eventos e competições escolares."
        />

        <Bloco
          titulo="Agasalhos"
          texto="Agasalhos esportivos ideais para viagens, frio e uso no dia a dia."
        />

        <Bloco
          titulo="Corta-Ventos"
          texto="Corta-ventos leves e resistentes, totalmente personalizados."
        />
      </main>

      <WhatsAppButton />
    </>
  );
}
