import Header from "@/app/components/Header";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function ProdutosPage() {
  return (
    <>
      <Header />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 20px" }}>
        <h1 style={{ fontSize: 42, marginBottom: 40 }}>Produtos</h1>

        <div style={{ lineHeight: 2, color: "#ccc" }}>
          <p>• Camisas Esportivas</p>
          <p>• Agasalhos</p>
          <p>• Corta-Ventos</p>
          <p>• Uniformes Corporativos</p>
          <p>• Kits completos personalizados</p>
        </div>
      </main>

      <WhatsAppButton />
    </>
  );
}
