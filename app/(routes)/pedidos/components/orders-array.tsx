const pedidos = [
  {
    orderId: "1",
    orderItems: "Camiseta, Calça Jeans",
    orderPrice: "120",
    size: "M",
    color: "#000",
    createdAt: "2024-03-10",
    orderStatus: "Em processamento",
    clientAddress: "Rua Exemplo, 123",
    images: [
      "/./camiseta.jpg",
      "https://example.com/pedido2.jpg",
    ],
  },
  {
    orderId: "2",
    orderItems: "Tênis, Boné",
    orderPrice: "80",
    size: "40",
    color: "#FFF",
    createdAt: "2024-03-09",
    orderStatus: "Entregue",
    clientAddress: "Av. Teste, 456",
    images: [
      "https://example.com/pedido3.jpg",
      "https://example.com/pedido4.jpg",
    ],
  },
  // Adicione mais pedidos aqui...
];

console.log(pedidos);

interface Pedido {
  orderId: string;
  orderItems: string;
  orderPrice: string;
  size: string;
  color: string;
  createdAt: string;
  orderStatus: string;
  clientAddress: string;
  images: string[];
}

export function findProductById(id: string): Pedido | undefined {
  return pedidos.find((pedido) => pedido.orderId === id);
}


export default pedidos;