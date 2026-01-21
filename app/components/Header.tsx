"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        width: "100%",
        background: "#121212",
        borderBottom: "1px solid #2a2a2a",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        {/* LOGO */}
        <strong style={{ fontSize: 18 }}>Emovi Sports</strong>

        {/* MENU */}
        <nav style={{ display: "flex", gap: 24, fontSize: 15 }}>
          <a href="/">Home</a>

          {/* PRODUTOS COM SUBMENU */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span style={{ cursor: "pointer" }}>Produtos ▾</span>

            {open && (
              <div
                style={{
                  position: "absolute",
                  top: 28,
                  left: 0,
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderRadius: 6,
                  padding: 12,
                  minWidth: 160,
                  zIndex: 1000,
                }}
              >
                <a href="/uniformes" style={itemStyle}>
                  Uniformes
                </a>
              </div>
            )}
          </div>

          <a href="/duvidas">Dúvidas</a>

          <a
            href="https://wa.me/554799197756"
            target="_blank"
            style={{ color: "#25D366", fontWeight: "bold" }}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

const itemStyle = {
  display: "block",
  padding: "6px 0",
  fontSize: 14,
};
