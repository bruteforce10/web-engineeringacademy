"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function OptionCity({ form, name, label, placeholder, lists }) {
  const [cities, setCities] = useState("");

  return (
    <div className="flex max-md:flex-col gap-6 ">
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-col ">
            <FormLabel className="mb-2">
              {label} <sup className="text-destructive">*</sup>
            </FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-[200px] justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? lists.find((list) => list.value === field.value)?.label
                      : placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search Provinsi..." />
                  <CommandList>
                    <CommandGroup>
                      {lists.map((list) => (
                        <CommandItem
                          value={list.label}
                          key={list.value}
                          onSelect={() => {
                            form.setValue(name, list.value);
                            setCities(list);
                            form.clearErrors(name);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              list.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {list.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      {cities && (
        <FormField
          control={form.control}
          name={"kota-kabupaten"}
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel className="mb-2">
                Kota Kabupaten <sup className="text-destructive">*</sup>
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? lists.find((list) => list.value === field.value)
                            ?.label
                        : "Pilih Kota / Kabupaten"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Kota / Kabupaten" />
                    <CommandList>
                      <CommandGroup>
                        {cities.cities.map((list) => (
                          <CommandItem
                            value={list.label}
                            key={list.value}
                            onSelect={() => {
                              form.setValue("kota-kabupaten", list.value);
                              form.clearErrors("kota-kabupaten");
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                list.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {list.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
}
