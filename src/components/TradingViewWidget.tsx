import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

interface TradingViewWidgetProps {
  symbol?: string;
  width?: string | number;
  height?: string | number;
  theme?: 'light' | 'dark';
  interval?: string;
  type?: 'mini' | 'advanced' | 'market-overview';
}

export const TradingViewWidget = ({ 
  symbol = "FX:EURUSD",
  width = "100%",
  height = 400,
  theme = "dark",
  interval = "D",
  type = "advanced"
}: TradingViewWidgetProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined' && container.current) {
        container.current.innerHTML = '';
        
        if (type === 'mini') {
          new window.TradingView.MiniChart({
            container_id: container.current.id,
            symbol: symbol,
            width: width,
            height: height,
            locale: "en",
            colorTheme: theme,
            isTransparent: false,
            autosize: false,
          });
        } else {
          new window.TradingView.widget({
            container_id: container.current.id,
            symbol: symbol,
            interval: interval,
            timezone: "Etc/UTC",
            theme: theme,
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            hide_side_toolbar: false,
            width: width,
            height: height,
            backgroundColor: "rgba(34, 40, 49, 1)",
            gridColor: "rgba(66, 73, 84, 0.3)",
          });
        }
      }
    };
    document.head.appendChild(script);

    return () => {
      if (container.current) {
        container.current.innerHTML = '';
      }
    };
  }, [symbol, width, height, theme, interval, type]);

  return (
    <div 
      id={`tradingview_${Math.random().toString(36).substring(7)}`}
      ref={container}
      className="rounded-xl overflow-hidden shadow-card border border-border"
    />
  );
};

export const MarketOverviewWidget = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "dateRange": "12M",
      "showChart": true,
      "locale": "en",
      "width": "100%",
      "height": "100%",
      "largeChartUrl": "",
      "isTransparent": false,
      "showSymbolLogo": true,
      "showFloatingTooltip": false,
      "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
      "plotLineColorFalling": "rgba(41, 98, 255, 1)",
      "gridLineColor": "rgba(66, 73, 84, 0.3)",
      "scaleFontColor": "rgba(209, 212, 220, 1)",
      "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
      "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
      "tabs": [
        {
          "title": "Forex",
          "symbols": [
            { "s": "FX:EURUSD", "d": "EUR/USD" },
            { "s": "FX:GBPUSD", "d": "GBP/USD" },
            { "s": "FX:USDJPY", "d": "USD/JPY" },
            { "s": "FX:USDCHF", "d": "USD/CHF" },
            { "s": "FX:AUDUSD", "d": "AUD/USD" },
            { "s": "FX:USDCAD", "d": "USD/CAD" }
          ]
        },
        {
          "title": "Crypto",
          "symbols": [
            { "s": "BINANCE:BTCUSDT", "d": "Bitcoin" },
            { "s": "BINANCE:ETHUSDT", "d": "Ethereum" },
            { "s": "BINANCE:BNBUSDT", "d": "BNB" },
            { "s": "BINANCE:SOLUSDT", "d": "Solana" },
            { "s": "BINANCE:ADAUSDT", "d": "Cardano" }
          ]
        },
        {
          "title": "Commodities",
          "symbols": [
            { "s": "COMEX:GC1!", "d": "Gold" },
            { "s": "COMEX:SI1!", "d": "Silver" },
            { "s": "NYMEX:CL1!", "d": "Crude Oil" },
            { "s": "COMEX:HG1!", "d": "Copper" }
          ]
        },
        {
          "title": "Indices",
          "symbols": [
            { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
            { "s": "FOREXCOM:NSXUSD", "d": "US 100" },
            { "s": "FOREXCOM:DJI", "d": "Dow 30" },
            { "s": "INDEX:DEU40", "d": "DAX" },
            { "s": "FOREXCOM:UKXGBP", "d": "FTSE 100" }
          ]
        }
      ]
    });

    container.current.appendChild(script);

    return () => {
      if (container.current) {
        container.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container rounded-xl overflow-hidden shadow-card border border-border" style={{ height: "500px", width: "100%" }}>
      <div ref={container} className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
};
