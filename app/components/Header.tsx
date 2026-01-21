"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
        marginBottom: 60,
      }}
    >
      <h1 style={{ fontSize: 24 }}>Emovi Sports</h1>

      <nav style={{ display: "flex", gap: 20 }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/produtos" style={{ color: "#fff", textDecoration: "none" }}>
          Produtos
        </Link>
        <Link
          href="/personalizacao"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Uniformes
        </Link>
        <Link href="/uniformes" style={{ color: "#fff", textDecoration: "none" }}>

           Personalização
        </Link>
        <Link href="/contato" style={{ color: "#fff", textDecoration: "none" }}>
          Contato
        </Link>
         
      </nav>
    </header>
  );
}
