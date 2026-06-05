import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../services/bookService";
import { getWikipediaSummary } from "../services/wikipediaService";

function BookDetailsPage() {
    const { id } = useParams();

    const [book, setBook] = useState<any>(null);
    const [wikiData, setWikiData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadBook = async () => {
            if (!id) {
                setError("Invalid book id");
                setLoading(false);
                return;
            }

            try {
                const data = await getBookDetails(id);
                setBook(data);

                try {
                    const wiki = await getWikipediaSummary(data.title);
                    setWikiData(wiki);
                } catch {
                    console.log("Wikipedia information not found");
                }
            } catch {
                setError("Book not found");
            } finally {
                setLoading(false);
            }
        };

        loadBook();
    }, [id]);

    if (loading) {
        return <div style={{ padding: "20px" }}>Loading...</div>;
    }

    if (error) {
        return <div style={{ padding: "20px" }}>{error}</div>;
    }

    return (
        <div
            style={{
                padding: "20px",
                maxWidth: "1000px",
                margin: "0 auto",
            }}
        >
            <h1>{book.title}</h1>

            {book.covers?.[0] && (
                <img
                    src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                    alt={book.title}
                    style={{
                        width: "250px",
                        borderRadius: "8px",
                        marginBottom: "20px",
                    }}
                />
            )}

            <h2>Description</h2>
            <p>
                {typeof book.description === "string"
                    ? book.description
                    : book.description?.value ||
                    "No description available"}
            </p>

            <h3>Book Information</h3>
            <p>
                <strong>Created:</strong> {book.created?.value}
            </p>
            <p>
                <strong>Last Modified:</strong> {book.last_modified?.value}
            </p>

            {wikiData && (
                <div
                    style={{
                        marginTop: "40px",
                        borderTop: "1px solid #ddd",
                        paddingTop: "20px",
                    }}
                >
                    <h2>About this book (Wikipedia)</h2>

                    {wikiData.thumbnail && (
                        <img
                            src={wikiData.thumbnail.source}
                            alt={wikiData.title}
                            style={{
                                width: "200px",
                                borderRadius: "8px",
                                marginBottom: "15px",
                            }}
                        />
                    )}

                    <p>{wikiData.extract}</p>

                    <a
                        href={wikiData.content_urls?.desktop?.page}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: "inline-block",
                            marginTop: "15px",
                            padding: "10px 15px",
                            backgroundColor: "#2563eb",
                            color: "white",
                            borderRadius: "6px",
                            fontWeight: "bold",
                        }}
                    >
                        Read the full article on Wikipedia →
                    </a>
                </div>
            )}
        </div>
    );
}

export default BookDetailsPage;