export interface Memory {
  id: string;
  photo: string;
  title: string;
  description: string;
  rotation: string;
}

export const memories: Memory[] = [
  {
    id: "1",
    photo: "/photos/memory1.jpg",
    title: "Pertama Ketemu",
    description: "Hari di mana semuanya dimulai...",
    rotation: "-rotate-2",
  },
  {
    id: "2",
    photo: "/photos/memory2.jpg",
    title: "Jalan-jalan bareng",
    description: "Pemandangan indah, tapi kamu lebih indah.",
    rotation: "rotate-3",
  },
  {
    id: "3",
    photo: "/photos/memory3.jpg",
    title: "Momen Lucu",
    description: "Gak akan pernah lupa ketawa kamu hari itu.",
    rotation: "-rotate-1",
  }
];
