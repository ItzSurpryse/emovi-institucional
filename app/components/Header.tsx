export default function Header() {
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
          {/* LOGO / NOME */}
          <strong style={{ fontSize: 18 }}>
            Emovi Sports
          </strong>
  
          {/* MENU */}
          <nav
            style={{
              display: "flex",
              gap: 24,
              fontSize: 15,
            }}
          >
            <a href="/">Início</a>
            <a href="/uniformes">Uniformes</a>
            <a
              href="https://wa.me/554799197756"
              target="_blank"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>
    );
  }
  