import { create } from "zustand";

const useLoginStore = create((set) => ({
  Sapid: "",
  password: "",
  visible: false,
  setSapid: (newSapid) => set({ Sapid: newSapid }),
  setPassword: (newPassword) => set({ password: newPassword }),
  setVisible: (newVisible) => set({ visible: newVisible }),
}));

export default useLoginStore;
