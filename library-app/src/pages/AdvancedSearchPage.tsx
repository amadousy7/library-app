import { useState } from "react";
import { Link } from "react-router-dom";
import { advancedSearch } from "../services/bookService";

function AdvancedSearchPage() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [subject, setSubject] = useState("");

    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);

        try {
            const data = await advancedSearch(
                title,
                author,
                year,
                subject
            );

            setResults(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "20px",
            }}
        >
            <h1>Advanced Search</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxWidth: "500px",
                }}
            >
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                <input
                    placeholder="Author"
                    value={author}
                    onChange={(e) =>
                        setAuthor(e.target.value)
                    }
                />

                <input
                    placeholder="Year"
                    value={year}
                    onChange={(e) =>
                        setYear(e.target.value)
                    }
                />

                <input
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) =>
                        setSubject(e.target.value)
                    }
                />

                <button onClick={handleSearch}>
                    Search
                </button>
            </div>

            {loading && <p>Loading...</p>}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "20px",
                    marginTop: "30px",
                }}
            >
                {results.map((book) => (
                    <div
                        key={book.key}
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow:
                                "0 2px 10px rgba(0,0,0,0.1)",
                        }}
                    >
                        {book.cover_i && (
                            <img
                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                alt={book.title}
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                }}
                            />
                        )}

                        <h3
                            style={{
                                marginTop: "10px",
                            }}
                        >
                            {book.title}
                        </h3>

                        <p>
                            {book.author_name?.join(", ")}
                        </p>

                        <Link
                            to={`/books/${book.key.replace(
                                "/works/",
                                ""
                            )}`}
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdvancedSearchPage;