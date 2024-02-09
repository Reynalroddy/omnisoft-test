"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from '@/components/ui/button'
import Link from "next/link"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {

  id: number,
  surname: string,
  firstname: string,
  age: number,
  gender: string,
  level: number,
  state: string,
}

export const columns: ColumnDef<Payment>[] = [ 
     {
    accessorKey: "id",
    header: "S/N",
  },
  {
    accessorKey: "surname",
    header: "Surname",
  },
  {
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "level",
    header: "Level",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    header: "Action",
    id: "actions",
    cell: ({ row }) => {
      const data = row.original
      return (
<>

<Button  asChild >
<Link href={`/result/${data.id}`}> Download Result </Link>
</Button>
</>

      )
    }
  }
]
