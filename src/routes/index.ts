import type { RequestHandler } from "@sveltejs/kit";
import { db } from '$lib/util/db'
import { daysSince } from "$lib/util/daysSince";

export const get: RequestHandler = () => {
    const lastRefactor = db.getLastRefactor();
    const days = daysSince(lastRefactor);

    return {
        body: { days },
    }
};
