"use client"

import { useEffect, useState } from 'react';
import ProductForm from './components/product-form';



function ProductPage({
    params
}: {
    params: {productId: string}
}){


    return (
        <div>
        <h1>Produto ID:{params.productId} </h1>
        {/* Outros componentes da página */}

        <ProductForm/>
      </div>
    );
}

export default ProductPage;