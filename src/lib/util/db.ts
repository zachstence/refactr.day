import { JsonDB } from "node-json-db";

const _db = new JsonDB("db", true);

const LAST_REFACTOR_PATH = "/lastRefactor";

export const db = {
    getLastRefactor: (): number => {
        const epoch = _db.getData(LAST_REFACTOR_PATH) as number;
        return epoch
    },
    resetLastRefactor: () => {
        const epoch = new Date().getTime();
        return _db.push(LAST_REFACTOR_PATH, epoch);
    }
}
