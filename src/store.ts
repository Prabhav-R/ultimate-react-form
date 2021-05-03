import create from "zustand";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  hasPhone: false,
  phone: "",
  files: [],
};

export type DataStore = {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    hasPhone: boolean;
    phone: string;
    files: never[];
  };
  setData: (values: Record<string, string | boolean | never[]>) => void;
  resetData: () => void;
};

export const useDataStore = create<DataStore>((set, get) => ({
  data: {
    firstName: "",
    lastName: "",
    email: "",
    hasPhone: false,
    phone: "",
    files: [],
  },
  setData: (values) => {
    const { data } = get();

    set({ data: { ...data, ...values } });
  },
  resetData: () => {
    set({ data: { ...initialState } });
  },
}));
