import { createColumnHelper } from "@tanstack/react-table";
import { Country } from "./types";

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const columnHelper = createColumnHelper<Country>();
