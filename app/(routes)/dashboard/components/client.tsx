"use client"

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { ProductColumn, columns } from "./columns";
import produtos from "./products-array";


async function ProductsClient() {
    // async function getData(): Promise<ProductColumn[]> {
    //    
    //     return produtos
    //   }
    
    const data = produtos
    return (
        <div>
            <Heading title="Produtos" description="Todos os seus produtos cadastrados em sua loja virtual"/>
            <DataTable searchKey={"name"} columns={columns} data={data}/>
        </div>
    );
}

export default ProductsClient;