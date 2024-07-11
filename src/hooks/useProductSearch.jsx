import { useState } from "react";

/**
 * Custom hook for managing product search functionality.
 * @returns {{ searchTerm: string, updateSearchTerm: (term: string) => void }}
 */
export const useProductSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const updateSearchTerm = (term) => {
        setSearchTerm(term);
    };

    return { searchTerm, updateSearchTerm };
};
