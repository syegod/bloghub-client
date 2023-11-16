const useTime = (time: Date): string => {
    const month = 30 * 24 * 60 * 60 * 1000;
    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;

    const now = new Date();
    const span = now.getTime() - time.getTime();

    const months = span / month;
    if (months < 1) {
        const days = span / day;
        if (days < 1) {
            const hours = span / hour;
            if (hours < 1) {
                const minutes = span / minute;
                if(minutes < 1){
                    return `a few seconds ago`;
                } else{
                    return `${(minutes).toFixed(0) === '1' ? `${(minutes).toFixed(0)} minute ago` : `${(minutes).toFixed(0)} minutes ago`}`;
                }
            } else {
                return `${(hours).toFixed(0) === '1' ? `${(hours).toFixed(0)} hour ago` : `${(hours).toFixed(0)} hours ago`}`;
            }
        } else {
            return `${(days).toFixed(0) === '1' ? `${(days).toFixed(0)} day ago` : `${(days).toFixed(0)} days ago`}`;
        }
    } else if(months < 12) {
        return `${(months).toFixed(0) === '1' ? `${(months).toFixed(0)} month ago` : `${(months).toFixed(0)} mongths ago`}`;
    }
    return String(time.toLocaleDateString());
};

export default useTime;
