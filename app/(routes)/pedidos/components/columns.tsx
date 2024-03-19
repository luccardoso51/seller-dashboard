"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ImageDown, ImageOffIcon, MoreHorizontal } from "lucide-react"

import { CellAction } from "./cell-action"

export type OrderColumn = {
  orderId: string
  orderItems: string;
  orderPrice: string;
  size: string;
  color: string;
  createdAt: string;
  orderStatus: string;
  clientAddress: string;
  images: Array<string>;
}

export const columns: ColumnDef<OrderColumn>[] = [
    // {
    //     accessorKey: "images",
    //     header: "",
    //     cell: ({ row }) => (
    //         <div className="flex items-center gap-x-2">
    //           {row.original.images[0]?
    //           <img src={row.original.images[0]} width={50} height={50}/> : <ImageOffIcon/>}
    //         </div>
    //       )
    // },
  {
      accessorKey: "orderId",
      header: "Pedido",
      cell: ({ row }) => (
        <div className="flex items-center gap-x-2">
          <p>#{row.original.orderId}</p>
        </div>
      )
  },
  {
    accessorKey: "orderItems",
    header: "Itens do pedido",
  },

  {
    accessorKey: "orderStatus",
    header: "Status do pedido",
  },
  {
    accessorKey: "orderPrice",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Preço
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="flex items-center gap-x-2">
          <p>R${row.original.orderPrice}</p>
        </div>
      )
  },
  {
    accessorKey: "size",
    header: "Tamanho",
  },
//   {
//     accessorKey: "size",
//     header: "Tamanho",
//   },
  {
    accessorKey: "color",
    header: "Cor",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {/* {row.original.color} */}
        <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.color }} />
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Data de criação",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];