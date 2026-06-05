import { useEffect, useState } from "react";
import { getRecentChanges } from "../services/bookService";

function HomePage() {
    const [changes, setChanges] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadChanges = async () => {
            try {
                const data = await getRecentChanges();
                setChanges(data);
            } catch {
                setError("Unable to load recent changes");
            } finally {
                setLoading(false);
            }
        };

        loadChanges();
    }, []);

    if (loading) {
        return <p style={{ padding: "20px" }}>Loading...</p>;
    }

    if (error) {
        return <p style={{ padding: "20px" }}>{error}</p>;
    }

    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
            }}
        >
            <h1>Recent Library Changes</h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(300px,1fr))",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {changes.map((change, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow:
                                "0 2px 10px rgba(0,0,0,0.08)",
                        }}
                    >
                        <h3>{change.kind}</h3>

                        <p>{change.timestamp}</p>

                        <p>
                            {change.author?.key ||
                                "Unknown author"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;