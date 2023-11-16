
const handleNumber = (num: number) => {
    if (num >= 1000000000) {
        return new String(`${String((num / 1000000000).toFixed(1)[2]) === '0' ? (num / 1000000000).toFixed(0) : (num / 1000000000).toFixed(1)}B`);
    } else if (num >= 1000000) {
        return new String(`${String((num / 1000000).toFixed(1)[2]) === '0' ? (num / 1000000).toFixed(0) : (num / 1000000).toFixed(1)}M`);
    } else if (num >= 1000) {
        return new String(`${String((num / 1000).toFixed(1)[2]) === '0' ? (num / 1000).toFixed(0) : (num / 1000).toFixed(1)}K`);
    }
    return num;
}

export default handleNumber