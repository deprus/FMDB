"use client";

import { DataTable } from "../../components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import { Skeleton } from "@/components/ui/skeleton";
import { columnsWonderkids } from "./columnsWonderkids";
import AddPlayerSection from "./AddPlayerSection";
export default function TournamentsPage() {
  const { data, isLoading: isGetting } = useQuery({
    queryKey: ["wonderkid"],
    queryFn: async () => {
      const { data, error } = await supabase.from("wonderkid").select("*");

      if (error) {
        console.error(error);
        throw new Error("Players could not be loaded");
      }

      return data;
    },
  });

  if (isGetting)
    return (
      <div className="flex items-center justify-center mt-20">
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
    <div className="container mx-auto py-10">
      <p className="mb-3">
        Players under 21 with at least 160 potential attributes.
      </p>
      <AddPlayerSection />
      <DataTable columns={columnsWonderkids} data={dataArray} />
    </div>
  );
}
