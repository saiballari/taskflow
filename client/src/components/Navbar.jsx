import { FaTasks, FaSignOutAlt } from "react-icons/fa";

function Navbar({ onLogout }) {
  return (
    <nav
      style={{
        width: "100%",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(15,23,42,.9)",
        backdropFilter: "blur(15px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid rgba(255,255,255,.08)",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            background: "linear-gradient(135deg,#10B981,#14B8A6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "20px",
          }}
        >
          <FaTasks />
        </div>

        <div>
          <h2
            style={{
              color: "white",
              margin: 0,
              fontSize: "22px",
            }}
          >
            TaskFlow
          </h2>

          <small style={{ color: "#94A3B8" }}>
            Smart Task Manager
          </small>
        </div>
      </div>

      <button
        onClick={onLogout}
        style={{
          background: "linear-gradient(135deg,#EF4444,#DC2626)",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "10px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "bold",
        }}
      >
        <FaSignOutAlt />
        Logout
      </button>
    </nav>
  );
}

export default Navbar;