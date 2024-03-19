const produtos = [
  {
    id: "1",
    name: "Camiseta",
    price: "25",
    category: "Roupas",
    size: "M",
    color: "#FFFFFF",
    createdAt: "2024-03-08",
    isFeatured: true,
    isArchived: false,
    images: [
      "/camiseta.png",
      "/camiseta2.png",
      "/camiseta.png",
    ],
    description: "Uma camiseta confortável para o dia a dia.",
  },
  {
    id: "2",
    name: "Calça Jeans",
    price: "50",
    category: "Roupas",
    size: "M",
    color: "#0000FF",
    createdAt: "2024-03-08",
    isFeatured: false,
    isArchived: false,
    images: [
      "/jeans.jpg",
    ],
    description: "Uma calça jeans moderna e estilosa.",
  },
  {
    id: "3",
    name: "Tênis",
    price: "80",
    category: "Calçados",
    size: "40",
    color: "#00FF00",
    createdAt: "2024-03-08",
    isFeatured: true,
    isArchived: false,
    images: [
      "/tenis.png",
    ],
    description: "Um tênis confortável para todas as ocasiões.",
  },
  {
    id: "4",
    name: "Relógio",
    price: "120",
    category: "Acessórios",
    size: "Único",
    color: "#FF0000",
    createdAt: "2024-03-08",
    isFeatured: false,
    isArchived: false,
    images: [
      "/relogio.png",
    ],
    description: "Um relógio elegante para complementar seu estilo.",
  },
  {
    id: "5",
    name: "Bermuda",
    price: "35",
    category: "Roupas",
    size: "M",
    color: "#FFFF00",
    createdAt: "2024-03-08",
    isFeatured: true,
    isArchived: false,
    images: [
      "/bermuda.png",
      "/bermuda.png",
      "/bermuda.png",
    ],
    description: "Uma bermuda confortável para os dias quentes.",
  },
  // Repetir os 5 produtos acima com IDs incrementados
  {
    id: "6",
    name: "Camiseta",
    price: "25",
    category: "Roupas",
    size: "M",
    color: "#FFFFFF",
    createdAt: "2024-03-08",
    isFeatured: true,
    isArchived: true,
    images: [
      "/camiseta.png",
      "/camiseta2.png",
      "/camiseta.png",
    ],
    description: "Uma camiseta confortável para o dia a dia.",
  },
  {
    id: "7",
    name: "Calça Jeans",
    price: "50",
    category: "Roupas",
    size: "M",
    color: "#0000FF",
    createdAt: "2024-03-08",
    isFeatured: false,
    isArchived: true,
    images: [
      "/jeans.jpg",
    ],
    description: "Uma calça jeans moderna e estilosa.",
  },
  {
    id: "8",
    name: "Tênis",
    price: "80",
    category: "Calçados",
    size: "40",
    color: "#00FF00",
    createdAt: "2024-03-08",
    isFeatured: true,
    isArchived: true,
    images: [
      "/tenis.png",
    ],
    description: "Um tênis confortável para todas as ocasiões.",
  },
  {
    id: "9",
    name: "Relógio",
    price: "120",
    category: "Acessórios",
    size: "Único",
    color: "#FF0000",
    createdAt: "2024-03-08",
    isFeatured: false,
    isArchived: true,
    images: [
      "/relogio.png",
    ],
    description: "Um relógio elegante para complementar seu estilo.",
  },
  {
    id: "10",
    name: "Bermuda",
    price: "35",
    category: "Roupas",
    size: "M",
    color: "#FFFF00",
    createdAt: "2024-03-08",
    isFeatured: true,
    isArchived: true,
    images: [
      "/bermuda.png",
      "/bermuda.png",
      "/bermuda.png",
    ],
    description: "Uma bermuda confortável para os dias quentes.",
  },
  {
    id: "11",
    name: "Camiseta",
    price: "25",
    category: "Roupas",
    size: "M",
    color: "#FFFFFF",
    createdAt: "2024-03-08",
    isFeatured: false,
    isArchived: false,
    images: [
      "/camiseta.png",
      "/camiseta2.png",
      "/camiseta.png",
    ],
    description: "Uma camiseta confortável para o dia a dia.",
  },
  {
    id: "12",
    name: "Calça Jeans",
    price: "50",
    category: "Roupas",
    size: "M",
    color: "#0000FF",
    createdAt: "2024-03-08",
    isFeatured: false,
    isArchived: false,
    images: [
      "/jeans.jpg",
    ],
    description: "Uma calça jeans moderna e estilosa.",
  },
  {
    id: "13",
    name: "Tênis",
    price: "80",
    category: "Calçados",
    size: "40",
    color: "#00FF00",
    createdAt: "2024-03-08",
    isFeatured: false,
    isArchived: false,
    images: [
      "/tenis.png",
    ],
    description: "Um tênis confortável para todas as ocasiões.",
  },
  {
    id: "14",
    name: "Relógio",
    price: "120",
    category: "Acessórios",
    size: "Único",
    color: "#FF0000",
    createdAt: "2024-03-08",
    isFeatured: false,
    isArchived: false,
    images: [
      "/relogio.png",
    ],
    description: "Um relógio elegante para complementar seu estilo.",
  },
  {
    id: "15",
    name: "Bermuda",
    price: "35",
    category: "Roupas",
    size: "M",
    color: "#FFFF00",
    createdAt: "2024-03-08",
    isFeatured: false,
    isArchived: false,
    images: [
      "/bermuda.png",
      "/bermuda.png",
      "/bermuda.png",
    ],
    description: "Uma bermuda confortável para os dias quentes.",
  },
];

interface Produto {
  id: string;
  name: string;
  price: string;
  category: string;
  size: string;
  color: string;
  createdAt: string;
  isFeatured: boolean;
  isArchived: boolean;
  images: string[];
  description: string
}

export function findProductById(id: string): Produto | undefined {
  return produtos.find((produto) => produto.id === id);
}


export default produtos;