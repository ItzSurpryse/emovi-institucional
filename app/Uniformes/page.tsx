import Header from "@/app/components/Header";
import WhatsAppButton from "@/app/components/WhatsAppButton";

const itens = [
  {
    titulo: "Kit Completo",
    preco: "R$ 99,90",
    atributos: [
      "Tecido Confort",
      "Proteção UV 50+",
      "Proteção Antimicrobiana",
      "Escudo Sublimado",
      "Modelagem Tradicional",
      "Sem limite de patrocinadores",
      "Nomes e números individuais incluídos",
      "Opções de Gola: Gola V / Viva-O / Bayard",
    ],
  },
  {
    titulo: "Camisa",
    preco: "R$ 47,00",
    atributos: [
      "Tecido Confort",
      "Proteção UV 50+",
      "Proteção Antimicrobiana",
      "Escudo Sublimado",
      "Modelagem Tradicional",
      "Sem limite de patrocinadores",
      "Nomes e números individuais incluídos",
      "Opções de Gola: Gola V / Viva-O / Bayard",
    ],
  },
  {
    titulo: "Calção",
    preco: "R$ 39,50",
    atributos: [
      "Tecido VeloSport",
      "Escudo Sublimado",
      "Modelagem Tradicional",
      "Sem limite de patrocinadores",
      "Números individuais incluídos",
    ],
  },
  {
    titulo: "Meião",
    preco: "R$ 18,00",
    atributos: [
      "Cano alto tradicional",
      "Tecelagem reforçada em 4 fios",
      "Excelente durabilidade e resistência",
      "Sem personalização",
    ],
  },
];

export default function UniformesPage() {
  return (
    <>
      <Header />

      <main className="container" style={{ paddingTop: 60, paddingBottom: 120 }}>
        <h1 style={{ fontSize: 36, marginBottom: 24 }}>Uniformes</h1>

        <p style={{ color: "#ccc", marginBottom: 40 }}>
          Confira nossos produtos disponíveis com seus atributos e valores por
          item, assim como na página original.
        </p>

        {itens.map((item) => (
          <section
            key={item.titulo}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 24,
              alignItems: "start",
              marginBottom: 60,
            }}
          >
            {/* IMAGEM PLACEHOLDER */}
            <div
              style={{
                background: "#000",
                height: "200px",
                borderRadius: 8,
              }}
            />

            {/* TEXTO */}
            <div>
              <h2 style={{ fontSize: 28 }}>{item.titulo}</h2>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 8,
                }}
              >
                {item.preco}
              </p>

              <ul style={{ color: "#ccc", marginBottom: 12 }}>
                {item.atributos.map((atr) => (
                  <li key={atr} style={{ marginBottom: 4 }}>
                    • {atr}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/554799197756?text=${encodeURIComponent(
                  `Olá! Gostaria de orçamento para ${item.titulo}`
                )}`}
                target="_blank"
                style={{
                  display: "inline-block",
                  marginTop: 8,
                  color: "#25D366",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Solicitar Orçamento
              </a>
            </div>
          </section>
        ))}
      </main>

      <WhatsAppButton />
    </>
  );
}
