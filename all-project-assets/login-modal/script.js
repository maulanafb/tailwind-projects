const fetchingData = async () => {
    const response = await fetch("https://api.com");
    const data = response.json();
    return data;
}