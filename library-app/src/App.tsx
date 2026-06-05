import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdvancedSearchPage from "./pages/AdvancedSearchPage";
import BookDetailsPage from "./pages/BookDetailsPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/advanced-search" element={<AdvancedSearchPage />} />
                <Route path="/books/:id" element={<BookDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;