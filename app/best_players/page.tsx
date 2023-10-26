"use client";

import { DataTable } from "../../components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import { Skeleton } from "@/components/ui/skeleton";
import AddPlayerSection from "../../components/AddPlayerSection";
import { columnsBestPlayers } from "./columnsBestPlayers";

export default function TournamentsPage() {
  const { data, isLoading: isGetting } = useQuery({
    queryKey: ["bestPlayer"],
    queryFn: async () => {
      const { data, error } = await supabase.from("bestPlayer").select("*");

      if (error) {
        console.error(error);
        throw new Error("Players could not be loaded");
      }

      return data;
    },
  });

  if (isGetting)
    return (
      <div className="flex items-center justify-center mt-20 flex-grow">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    );

  const dataArray = data || [];

  return (
    <div className="container mx-auto py-10 flex-grow">
      <p className="mb-3">Players with the highest current attributes.</p>
      <AddPlayerSection queryKey="bestPlayer">Add player</AddPlayerSection>
      <DataTable columns={columnsBestPlayers} data={dataArray} />
    </div>
  );
}
