import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const updateSearchResults = (results, query) => {
    setSearchResults(results);
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchResults, searchQuery, updateSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};
