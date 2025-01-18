import { createColumnHelper } from "@tanstack/react-table";
import { Country } from "./types";

export const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then(async (res) => {
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "An error occurred");
      }
      return res.json();
    });

export const columnHelper = createColumnHelper<Country>();
