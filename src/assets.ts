import binanceIcon from "./assets/Binance-Coin.svg";
import bitcoinIcon from "./assets/Bitcoin-SV.svg";
import ethereumIcon from "./assets/Ethereum.svg";
import shibaIcon from "./assets/SHIBA-INU.svg";
import solanaIcon from "./assets/Solana.svg";

export const assets = [
  {
    id: 1,
    icon: bitcoinIcon,
    name: "Bitcoin (BTC)",
    price: "31,812.80",
    percentageChangeInPrice: 10,
    TVL: "60,000",
    popularPairings: [solanaIcon, ethereumIcon, binanceIcon],
  },
  {
    id: 2,
    icon: solanaIcon,
    name: "Solana (SOL)",
    price: "32.83",
    percentageChangeInPrice: -12.32,
    TVL: "60,000",
    popularPairings: [bitcoinIcon, ethereumIcon, binanceIcon],
  },
  {
    id: 3,
    icon: ethereumIcon,
    name: "Ethereum (ETH)",
    price: "1465.45",
    percentageChangeInPrice: -11.93,
    TVL: "60,000",
    popularPairings: [solanaIcon, bitcoinIcon, binanceIcon],
  },
  {
    id: 4,
    icon: binanceIcon,
    name: "Binance USD (BUSD)",
    price: "1.00",
    percentageChangeInPrice: 0.26,
    TVL: "60,000",
    popularPairings: [solanaIcon, ethereumIcon, binanceIcon],
  },
  {
    id: 5,
    icon: shibaIcon,
    name: "Shiba Inu (SHIB)",
    price: "0.0001948",
    percentageChangeInPrice: -8.1,
    TVL: "60,000",
    popularPairings: [solanaIcon, ethereumIcon, binanceIcon],
  },
];
