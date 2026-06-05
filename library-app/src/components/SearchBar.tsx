import { useState } from "react";
import { searchBooks } from "../services/bookService";
import { Link } from "react-router-dom";

function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = async () => {
        if (!query.trim()) return;

        try {
            const books = await searchBooks(query);
            setResults(books.slice(0, 5));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search a book..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={handleSearch}>
                Search
            </button>

            {results.length > 0 && (
                <ul>
                    {results.map((book) => (
                        <li key={book.key}>
                            <Link
                                to={`/books/${book.key.replace("/works/", "")}`}
                            >
                                {book.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;