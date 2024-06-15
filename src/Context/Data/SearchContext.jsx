import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const updateSearchResults = (results, query) => {
    setSearchResults(results);
    setSearchQuery(query);
  };

  const[loading,setLoading] = useState(false);

  return (
    <SearchContext.Provider value={{ searchResults, searchQuery, updateSearchResults, loading,setLoading }}>
      {children}
    </SearchContext.Provider>
  );
};
