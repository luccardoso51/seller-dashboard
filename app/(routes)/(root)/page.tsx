
"use client"

import Billboard from "@/components/ui/bilboard";
import Container from "@/components/ui/container";
import { useRouter } from "next/navigation";
import produtos from "../dashboard/components/products-array";
import ProductList from "@/components/product-list";



export default function Home() {

const router = useRouter()

const products = produtos

const billboard = {
  id: "000",
  label: "Encontre os melhores produtos para seu negócio",
  imageUrl: "/./billboard.jpg",
}

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Destaques" items={products} />
        </div>
      </div>
    </Container>
  );
}
