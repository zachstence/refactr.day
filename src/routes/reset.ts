import { daysSince } from "$lib/util/daysSince";
import { db } from "$lib/util/db";
import type { RequestHandler } from "@sveltejs/kit";

export const put: RequestHandler = () => {
    db.resetLastRefactor();

    const lastRefactor = db.getLastRefactor();
    const days = daysSince(lastRefactor);

    return {
        body: { days },
    };
};
