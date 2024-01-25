// BybitAPI.js

const { RestClientV5 } = require("bybit-api");

const client = new RestClientV5({
  testnet: true,
});

let convertData = []; // 초기에 빈 배열로 선언

const fetchData = async () => {
  try {
    const response = await client.getIndexPriceKline({
      category: "inverse",
      symbol: "BTCUSDT",
      interval: "D",
      start: 1640995200000,
      end: 1672531199000,
      limit: 365,
    });

    const bybitCandleData = response.result.list;

    // 데이터 변환
    bybitCandleData.forEach((candle) => {
      const [timestamp, open, high, low, close] = candle;
      const time = new Date(Number(timestamp)).toISOString().slice(0, 10);

      convertData.push({
        time,
        open: parseFloat(open),
        high: parseFloat(high),
        low: parseFloat(low),
        close: parseFloat(close),
      });
    });

    return convertData;
  } catch (error) {
    console.error(error);
    throw error; // 오류 발생 시 다시 던짐
  }
};

module.exports = {
  getConvertData: fetchData,
};