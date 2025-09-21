const basePath = "https://finnhub.io/api/v1"

const apiRequest = async (url) => {
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
    }
    
    return await response.json();
};

export const searchSymbols = async (query) => {
    const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
    return apiRequest(url);
};

export const fetchStockDetails = async (stockSymbol) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    return apiRequest(url);
};

export const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    return apiRequest(url);
};