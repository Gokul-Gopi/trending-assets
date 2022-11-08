import React from "react";

interface IAssetCard {
  icon: string;
  name: string;
  price: string;
  percentageChangeInPrice: number;
  TVL: string;
  popularPairings: string[];
}

export const AssetCard = ({
  icon,
  name,
  price,
  percentageChangeInPrice,
  TVL,
  popularPairings,
}: IAssetCard) => {
  return (
    <div className="relative w-72 pb-5 rounded-2xl bg-card">
      <div className="flex items-center justify-center absolute -top-12 left-2/4 -ml-14 h-28 w-28 rounded-full border-[10px] border-background bg-card before:absolute before:content-[''] before:top-[41%] before:right-[100px] before:w-12 before:h-8 before:bg-card before:rounded-tr-[32px] before:shadow-[8px_-8px_0_0] before:shadow-background after:absolute after:content-[''] after:top-[41%] after:left-[100px] after:w-12 after:h-8 after:bg-card after:rounded-tl-[32px] after:shadow-[-8px_-8px_0_0] after:shadow-background">
        <img src={icon} alt="icon" />
      </div>

      <div className="flex flex-col items-center gap-3 mt-20">
        <p className="text-grey font-bold text-xs">{name}</p>
        <p className="relative bg-background text-white text-center px-4 py-2 w-[85%] rounded-2xl ">
          ${price}{" "}
          <span
            className={`
              absolute right-8 top-1/2 -translate-y-1/2 text-xs +
              ${
                percentageChangeInPrice > 0
                  ? "text-incPercentage"
                  : "text-[red]"
              }
            `}
          >
            {percentageChangeInPrice}%
          </span>
        </p>
        <p className="text-darkGrey font-bold text-xs">{TVL}</p>
        <p className="relative bg-background text-white text-center px-4 py-2 w-[85%] rounded-2xl ">
          $60,000
        </p>
        <p className="text-darkGrey font-bold text-xs">TVL</p>

        <div className="flex items-center justify-center bg-background px-4 py-2 rounded-3xl gap-3">
          {popularPairings.map((pairImg: string, i: number) => {
            return (
              <div key={`pair${i}`}>
                <img className="w-[22px]" src={pairImg} alt="pair" />
              </div>
            );
          })}
        </div>

        <p className="text-darkGrey text-xs">Popular pairs</p>
      </div>
    </div>
  );
};
