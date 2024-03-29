"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import IconButton  from "@/components/ui/icon-button";
import { Product } from "@/types";

interface ProductCard {
  data: Product
}



const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/produto/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

  };
  
  return ( 
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={data.images?.[0]} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={handleClick} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold  text-gray-600 text-lg">{data.name}</p>
        <p className="text-sm text-gray-600">{data.category}</p>
      </div>
      <div className="flex  text-gray-600 items-center justify-between">
        {`R$${data?.price},00`}
      </div>
    </div>
  );
}

export default ProductCard;