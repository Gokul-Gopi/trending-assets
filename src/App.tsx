import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { AssetCard } from "./AssetCard";
import { assets } from "./assets";

function App() {
  return (
    <div className="font-tomorrow min-h-screen flex flex-col items-center justify-center gap-20 bg-background p-8">
      <div className="flex items-center gap-2 self-start">
        <BiTrendingUp color="#DC1FFF" />
        <span className="text-white">Trending Assets</span>
      </div>

      <div className="flex gap-12 flex-wrap justify-center">
        {assets.map((asset) => {
          return (
            <AssetCard
              key={asset.id}
              icon={asset.icon}
              name={asset.name}
              price={asset.price}
              percentageChangeInPrice={asset.percentageChangeInPrice}
              TVL={asset.TVL}
              popularPairings={asset.popularPairings}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
