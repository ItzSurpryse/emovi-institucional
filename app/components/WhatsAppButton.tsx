export default function WhatsAppButton() {
    return (
      <a
        href="https://wa.me/554799197756"
        target="_blank"
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          backgroundColor: "#25D366",
          width: 56,
          height: 56,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          textDecoration: "none",
          color: "#000",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          zIndex: 999,
        }}
      >
        🟢
      </a>
    );
  }
  