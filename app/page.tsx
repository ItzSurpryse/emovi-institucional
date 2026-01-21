import Header from "@/app/components/Header";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 20px" }}>
        {/* HERO */}
        <section style={{ marginBottom: 120 }}>
          <h1 style={{ fontSize: 52, marginBottom: 20 }}>
            Uniformes Esportivos Personalizados
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#bbb",
              maxWidth: 700,
              marginBottom: 40,
            }}
          >
            Produzimos camisas, agasalhos, corta-ventos e uniformes completos
            para times, escolas e empresas.
          </p>

          {/* BOTÕES */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <Link
              href="/produtos"
              style={{
                background: "#fff",
                color: "#000",
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Ver Produtos
            </Link>

            <a
              href="https://wa.me/554799197756"
              target="_blank"
              style={{
                border: "1px solid #444",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 10,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Solicitar Orçamento
            </a>
          </div>
        </section>

        {/* PRODUTOS */}
        <section style={{ marginBottom: 120 }}>
          <h2 style={{ fontSize: 36, marginBottom: 40 }}>
            Nossos Produtos
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {[
              "Camisas Esportivas",
              "Agasalhos",
              "Corta-Vento",
              "Uniformes Corporativos",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#161616",
                  padding: 30,
                  borderRadius: 14,
                  border: "1px solid #262626",
                }}
              >
                <h3 style={{ marginBottom: 10 }}>{item}</h3>
                <p style={{ color: "#aaa", fontSize: 14 }}>
                  Produção sob medida, tecidos de qualidade e personalização total.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section>
          <h2 style={{ fontSize: 36, marginBottom: 30 }}>
            Por que escolher a Emovi?
          </h2>

          <ul style={{ color: "#ccc", lineHeight: 2, fontSize: 16 }}>
            <li>✔ Produção própria</li>
            <li>✔ Personalização completa</li>
            <li>✔ Atendimento direto via WhatsApp</li>
            <li>✔ Ideal para times e empresas</li>
          </ul>
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}
