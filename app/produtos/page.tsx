import Header from "@/app/components/Header";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function ProdutosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#f1f1f1",
        padding: "40px 20px",
      }}
    >
      <Header />

      <h2 style={{ fontSize: 36, marginBottom: 30 }}>Produtos</h2>

      <ul style={{ color: "#ccc", lineHeight: 2 }}>
        <li>Camisas Esportivas</li>
        <li>Agasalhos</li>
        <li>Corta-Vento</li>
        <li>Uniformes Corporativos</li>
        <li>Kits Completos</li>
      </ul>

      <WhatsAppButton />
    </main>
  );
}
