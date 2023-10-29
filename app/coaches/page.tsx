"use client";

import { DataTable } from "../../components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import { Skeleton } from "@/components/ui/skeleton";
import AddPlayerSection from "../../components/AddPlayerSection";
import { columnsCoaches } from "./columnsCoaches";

export default function Page() {
  const { data, isLoading: isGetting } = useQuery({
    queryKey: ["coach"],
    queryFn: async () => {
      const { data, error } = await supabase.from("coach").select("*");

      if (error) {
        console.error(error);
        throw new Error("Coaches could not be loaded");
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
      <p className="mb-3">Coaches with the highest current attributes.</p>
      <AddPlayerSection queryKey="coach">Add coach</AddPlayerSection>
      <DataTable columns={columnsCoaches} data={dataArray} />
    </div>
  );
}
