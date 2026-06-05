import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <nav
            style={{
                backgroundColor: "white",
                padding: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                marginBottom: "20px",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "20px",
                }}
            >
                <h2>📚 City Library</h2>

                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                    }}
                >
                    <Link to="/">Home</Link>

                    <Link to="/advanced-search">
                        Advanced Search
                    </Link>
                </div>

                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;