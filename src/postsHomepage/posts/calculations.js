
export const timeAgo = utc_time => {
    const milliseconds = utc_time*1000;
    const msDiff = Date.now() - milliseconds;
    if (msDiff <  3600000) { // < 1 hour diff
        const minsDiff = Math.round(msDiff/60000);
        return `${minsDiff} mins ago`;
    }
    const hrsDiff =  Math.round(msDiff / 3600000);
    return `${hrsDiff} hrs ago`;
}