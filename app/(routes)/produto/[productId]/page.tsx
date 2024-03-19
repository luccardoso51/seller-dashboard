"use client"

import ProductForm from './components/product-form';



function ProductPage({
    params
}: {
    params: {productId: string}
}){


    return (
     <div className='flex-col'>
        <div className='flex-1 p-8 space-y-4 pt-6'>
        <ProductForm productId={params.productId}/>
        </div>
      </div>
    );
}

export default ProductPage;