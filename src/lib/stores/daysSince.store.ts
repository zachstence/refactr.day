import { derived } from "svelte/store";
import { differenceInDays } from "../util/differenceInDays";
import { lastRefactor } from "./lastRefactor.store";

export const daysSince = derived(lastRefactor, lastRefactorDate => differenceInDays(lastRefactorDate, new Date()));
