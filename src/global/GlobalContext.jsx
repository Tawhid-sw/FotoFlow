import { createContext, useEffect, useState } from "react";
import { LuClockAlert } from "react-icons/lu";

export const ProvideData = createContext();
export const DataProvider = ({ children }) => {
  const [searchMediya, setSearchMediya] = useState(() => {
    const Type = localStorage.getItem("SearchMediyaType");
    return Type ? JSON.parse(Type) : "Photos";
  });
  useEffect(() => {
    localStorage.setItem("SearchMediyaType", JSON.stringify(searchMediya));
  }, [searchMediya]);

  const [searchQuery, addSearchQuery] = useState(() => {
    const SearchHestory = localStorage.getItem("SearchHestory");
    return SearchHestory ? JSON.parse(SearchHestory) : [];
  });
  const UpdateSearch = (query) => {
    if (query.length == 0) {
      return;
    }
    const Query =
      query.trim().split("")[0].toUpperCase() +
      query.trim().substring(1).toLowerCase();
    if (searchQuery.includes(Query)) {
      return;
    }
    addSearchQuery([Query, ...searchQuery]);
  };

  const ClearHistory = () => {
    localStorage.removeItem("SearchHestory");
    addSearchQuery([]);
  };
  useEffect(() => {
    localStorage.setItem("SearchHestory", JSON.stringify(searchQuery));
  }, [searchQuery]);

  const Store = {
    searchMediya,
    setSearchMediya,
    searchQuery,
    UpdateSearch,
    ClearHistory,
  };
  return <ProvideData.Provider value={Store}>{children}</ProvideData.Provider>;
};
