"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, ImageDown, ImageOffIcon, MoreHorizontal } from "lucide-react"

import { CellAction } from "./cell-action"

export type ProductColumn = {
  id: string
  name: string;
  price: string;
  category: string;
  size: string;
  color: string;
  createdAt: string;
  isFeatured: boolean;
  isArchived: boolean;
  images: Array<string>;
}

export const columns: ColumnDef<ProductColumn>[] = [
    {
        accessorKey: "images",
        header: "",
        cell: ({ row }) => (
            <div className="flex items-center gap-x-2">
              {row.original.images[0]?
              <img src={row.original.images[0]} width={50} height={50}/> : <ImageOffIcon/>}
            </div>
          )
    },
  {
    accessorKey: "name",
    header: "Nome do produto",
  },
  {
    accessorKey: "isArchived",
    header:  ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    cell: ({ row }) => (
        <div className="flex items-center gap-x-2">
          {row.original.isArchived? <p className="font-bold text-emerald-600">Disponivel</p>: <p className="text-red-500">Indisponivel</p>}
        </div>
      )
  },
//   {
//     accessorKey: "isFeatured",
//     header: "Featured",
//   },
  {
    accessorKey: "price",
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
          <p>R${row.original.price}</p>
        </div>
      )
  },
  {
    accessorKey: "category",
    header: "Categoria",
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