"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { supabase } from "@/utils/supabase";
import { ToastAction } from "@radix-ui/react-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "./ui/use-toast";
import { queryClient } from "./Providers";
import { Player } from "@/types";

const FormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name must be 1 or more characters long" }),
  age: z.number({
    required_error: "Age is required",
    invalid_type_error: "Age must be a number",
  }),
  club: z
    .string()
    .min(1, { message: "Club must be 1 or more characters long" }),
  nat: z
    .string()
    .min(1, { message: "Nationality must be 1 or more characters long" }),
  pos: z
    .string()
    .min(1, { message: "Position must be 1 or more characters long" }),
  wage: z.number({
    required_error: "Wage is required",
    invalid_type_error: "Wage must be a number",
  }),
  val: z.number({
    required_error: "Value is required",
    invalid_type_error: "Value must be a number",
  }),
  cur: z.number({
    required_error: "Current attributes is required",
    invalid_type_error: "Current attributes must be a number",
  }),
  pot: z.string().min(1, {
    message: "Potential attributes must be 1 or more characters long",
  }),
});

export default function AddPlayer({ queryKey }: any) {
  const { toast } = useToast();
  const mutation = useMutation({
    mutationFn: (values: Player): any => {
      const data = supabase.from(queryKey).insert([
        {
          name: values.name,
          age: values.age,
          club: values.club,
          nat: values.nat,
          pos: values.pos,
          wage: values.wage,
          val: values.val,
          cur: values.cur,
          pot: values.pot,
        },
      ]);
      return data;
    },
    onSuccess: () => {
      toast({
        title: "Player added",
        description: `${new Date().toLocaleString()}`,
      });
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Could not add the player.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    },
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      age: 0,
      club: "",
      nat: "",
      pos: "",
      wage: 0,
      val: 0,
      cur: 0,
      pot: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    mutation.mutate(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>AGE</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        isNaN(+e.target.value) ? "" : +e.target.value
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="club"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CLUB</FormLabel>
                <FormControl>
                  <Input placeholder="FC Barcelona" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NAT</FormLabel>
                <FormControl>
                  <Input placeholder="BRA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>POS</FormLabel>
                <FormControl>
                  <Input placeholder="ST" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="wage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WAGE</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        isNaN(+e.target.value) ? "" : +e.target.value
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="val"
            render={({ field }) => (
              <FormItem>
                <FormLabel>VAL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        isNaN(+e.target.value) ? "" : +e.target.value
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cur"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CUR</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0"
                    {...field}
                    onChange={(e) =>
                      field.onChange(
                        isNaN(+e.target.value) ? "" : +e.target.value
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pot"
            render={({ field }) => (
              <FormItem>
                <FormLabel>POT</FormLabel>
                <FormControl>
                  <Input placeholder="150-180" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="col-span-2 w-40 mx-auto">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
