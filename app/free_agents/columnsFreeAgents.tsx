"use client";

import { queryClient } from "@/components/Providers";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/utils/supabase";
import { useMutation } from "@tanstack/react-query";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import UpdatePlayer from "../../components/UpdatePlayer";

export type Player = {
  id?: string;
  name: string;
  age: number;
  pos: string;
  club: string;
  wage: number;
  nat: string;
  cur: number;
  pot: string;
  val: number;
};

export const columnsFreeAgents: ColumnDef<Player>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          NAME
        </Button>
      );
    },
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          AGE
        </Button>
      );
    },
  },
  {
    accessorKey: "club",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          CLUB
        </Button>
      );
    },
  },
  {
    accessorKey: "nat",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          NAT
        </Button>
      );
    },
  },
  {
    accessorKey: "pos",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          POS
        </Button>
      );
    },
  },
  {
    accessorKey: "wage",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          WAGE(£, weekly)
        </Button>
      );
    },
  },
  {
    accessorKey: "val",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          VAL (M£)
        </Button>
      );
    },
  },
  {
    accessorKey: "cur",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          CUR
        </Button>
      );
    },
  },
  {
    accessorKey: "pot",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          POT
        </Button>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const deleteFreeAgent = useMutation({
        mutationFn: async (freeAgent: Player): Promise<any> => {
          const { error } = await supabase
            .from("freeAgent")
            .delete()
            .eq("id", freeAgent.id);
        },
        onSuccess: () => {
          toast({
            title: `Player ${freeAgent.name} deleted`,
            description: `${new Date().toLocaleString()}`,
          });
          queryClient.invalidateQueries({ queryKey: ["freeAgent"] });
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Could not delete the player.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        },
      });
      const freeAgent = row.original;

      return (
        <Dialog>
          <DialogContent>
            <UpdatePlayer data={freeAgent} queryKey="deleteFreeAgent" />
          </DialogContent>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => deleteFreeAgent.mutate(freeAgent)}
              >
                Delete
              </DropdownMenuItem>
              <DialogTrigger asChild>
                <DropdownMenuItem>Update</DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
        </Dialog>
      );
    },
  },
];
