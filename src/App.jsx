import { BiTrendingUp } from "react-icons/bi";
import binanceIcon from "./assets/Binance-Coin.svg";
import bitcoinIcon from "./assets/Bitcoin-SV.svg";
import ethereumIcon from "./assets/Ethereum.svg";
import shibaIcon from "./assets/SHIBA-INU.svg";
import solanaIcon from "./assets/Solana.svg";

function App() {
  return (
    <div className="font-tomorrow min-h-screen flex flex-col justify-center gap-20 bg-background px-8">
      <div className="flex items-center gap-2">
        <BiTrendingUp color="#DC1FFF" />
        <span className="text-white">Trending Assets</span>
      </div>

      {/* <div className="flex gap-2"></div> */}
    </div>
  );
}

export default App;
