import { create } from 'zustand';

export const useStore = create((set, get) => ({
  number: 0,
  
  setNodesState: (n) => {
    set({
      nodesState: n
    })
    console.log(get().nodesState, n)
  },
  setEdgesState: (e) => {
    set({
      edgesState: e
    })
  },
  updateNumber: (number) => {
    set({
      number: number
    });
  }
}));

export default useStore;
