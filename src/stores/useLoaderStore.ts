import { create } from "zustand";

interface LoaderState {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}

const useLoaderStore = create<LoaderState>((set) => ({
    isLoading: false,
    showLoader: () => set({ isLoading: true }),
    hideLoader: () => {
        setTimeout(() => {
            set({ isLoading: false }); // Hide loader after data is "fetched"
        }, 2000);
    },
}));

export default useLoaderStore;