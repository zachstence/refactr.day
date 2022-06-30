export const daysSince = (epoch1: number) => {
    const now = new Date().getTime();
    const diffTime = Math.abs(epoch1 - now);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
};
