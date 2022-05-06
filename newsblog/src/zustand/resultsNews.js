import create from "zustand";
import apiCallNews from "./index";
import { devtools } from "zustand/middleware";
const resultsNews = create(
  devtools((set) => ({
    isLoading: false,
    results: [],
    hasError: undefined,
    getNewsResults: async () => {
      try {
        set({ isLoading: true, results: [], hasError: undefined });
        const { data } = await apiCallNews.get();
        set({ results: data.results });
      } catch (error) {
        set({ isLoading: false, results: [], hasError: error });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);

export default resultsNews;
