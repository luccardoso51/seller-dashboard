"use client"

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { columns } from "./columns";
import pedidos from "./orders-array";


async function ProductsClient() {
    // async function getData(): Promise<ProductColumn[]> {
    //    
    //     return produtos
    //   }
    
    const data = pedidos
    return (
        <div>
            <Heading title="Pedidos" description="Acompanhe todos os pedidos realizados em sua loja"/>
            <DataTable searchKey={"orderItems"} columns={columns} data={data}/>
        </div>
    );
}

export default ProductsClient;