export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#f1f1f1",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 60,
        }}
      >
        <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
          Emovi Sports
        </h1>

        <a
          href="https://wa.me/554799197756"
          target="_blank"
          style={{
            backgroundColor: "#25D366",
            color: "#000",
            padding: "10px 18px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp
        </a>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 900, marginBottom: 80 }}>
        <h2 style={{ fontSize: 42, marginBottom: 20 }}>
          Uniformes Esportivos Personalizados
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#ccc" }}>
          Produzimos camisas, agasalhos, corta-ventos e uniformes completos
          para equipes esportivas, empresas e projetos personalizados.
        </p>
      </section>

      {/* Produtos */}
      <section style={{ marginBottom: 80 }}>
        <h3 style={{ fontSize: 28, marginBottom: 30 }}>
          Nossos Produtos
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
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
                backgroundColor: "#1a1a1a",
                padding: 20,
                borderRadius: 12,
                border: "1px solid #2a2a2a",
              }}
            >
              <h4 style={{ marginBottom: 10 }}>{item}</h4>
              <p style={{ color: "#aaa", fontSize: 14 }}>
                Produção sob medida, tecidos de qualidade e personalização total.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Diferencial */}
      <section style={{ marginBottom: 80 }}>
        <h3 style={{ fontSize: 28, marginBottom: 20 }}>
          Por que escolher a Emovi?
        </h3>
        <ul style={{ color: "#ccc", lineHeight: 1.8 }}>
          <li>✔ Personalização completa</li>
          <li>✔ Produção própria</li>
          <li>✔ Atendimento direto via WhatsApp</li>
          <li>✔ Ideal para times, escolas e empresas</li>
        </ul>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #2a2a2a",
          paddingTop: 30,
          color: "#888",
          fontSize: 14,
        }}
      >
        <p>Emovi Sports – Uniformes Esportivos</p>
        <p>📞 +55 47 9919-7756</p>
      </footer>
    </main>
  );
}
