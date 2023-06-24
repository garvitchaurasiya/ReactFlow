import { create } from 'zustand';

export const useStore = create((set, get) => ({
  nodesState: [],
  edgesState: [],
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
      // nodes: get().nodes.map((node) => {
      //   if (node.id === '2') {
      //     node.data = { ...node.data, show: `${number} % 2 = ${number % 2}` };
      //   }
      //   if (node.id === '3') {
      //     node.data = { ...node.data, show: `${number % 2 === 0 ? 'Number is Even' : 'Number is Odd'}` };
      //   }

      //   return node;
      // }),
    });
  },
  resetNode: () =>{
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === '2') {
          node.data = { ...node.data, show: 'Number % 2 = Remainder' };
        }
        if (node.id === '3') {
          node.data = { ...node.data, show: 'Result' };
        }
        console.log(node.data);
        return node;
      }),
    });
  }
}));

export default useStore;
