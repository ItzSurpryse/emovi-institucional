import Header from "@/app/components/Header";
import WhatsAppButton from "@/app/components/WhatsAppButton";

const produtos = [
  {
    nome: "Camisas Esportivas",
    descricao:
      "Camisas personalizadas para times, escolas e eventos esportivos.",
  },
  {
    nome: "Agasalhos",
    descricao:
      "Agasalhos esportivos sob medida, ideais para frio e viagens.",
  },
  {
    nome: "Corta-Vento",
    descricao:
      "Leves, resistentes e personalizados com a identidade do time.",
  },
  {
    nome: "Uniformes Corporativos",
    descricao:
      "Uniformes personalizados para empresas e equipes de trabalho.",
  },
  {
    nome: "Kits Completos",
    descricao:
      "Camisa + short + agasalho, tudo padronizado e personalizado.",
  },
];

export default function ProdutosPage() {
  return (
    <>
      <Header />

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 20px" }}>
        <h1 style={{ fontSize: 44, marginBottom: 20 }}>Produtos</h1>
        <p style={{ color: "#bbb", maxWidth: 700, marginBottom: 60 }}>
          Produzimos uniformes esportivos personalizados com foco em qualidade,
          conforto e identidade visual.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 28,
          }}
        >
          {produtos.map((produto) => (
            <a
              key={produto.nome}
              href={`https://wa.me/554799197756?text=${encodeURIComponent(
                `Olá! Gostaria de um orçamento para ${produto.nome}.`
              )}`}
              target="_blank"
              style={{
                background: "#161616",
                padding: 32,
                borderRadius: 16,
                border: "1px solid #262626",
                textDecoration: "none",
                color: "#fff",
                transition: "all 0.2s ease",
              }}
            >
              <h3 style={{ marginBottom: 12 }}>{produto.nome}</h3>
              <p style={{ color: "#aaa", fontSize: 14, marginBottom: 20 }}>
                {produto.descricao}
              </p>

              <span
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#25D366",
                }}
              >
                Solicitar orçamento →
              </span>
            </a>
          ))}
        </div>
      </main>

      <WhatsAppButton />
    </>
  );
}
