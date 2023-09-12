import Axios from "axios";
import { useEffect, useState } from "react";

export function CoinList() {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=USD`
    ).then((res) => {
      const sortedCrypto = res.data.coins.sort(
        (a, b) => b.marketCap - a.marketCap
      );
      const top3Crypto = sortedCrypto.slice(0, 3);
      setCrypto(top3Crypto);
    });
  }, []);

  const cryptoImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
    "https://clipground.com/images/ethereum-png-6.png",
    "https://cryptologos.cc/logos/tether-usdt-logo.png",
  ];

  return (
    <>
      <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <div className="flex justify-center md:gap-20 gap-5 mb-14 select-none">
        {crypto.map((val, id) => (
          <div key={id} className="font-bridge md:text-lg text-sm">
            <a href={val.websiteUrl}>
              <img
                src={cryptoImages[id]}
                alt={`Icon ${id + 1}`}
                className="md:w-16 md:h-16 h-8 w-8 mb-4 items-center md:ml-5 ml-7"
              />
              <div className="text-center">
                <p>{val.name} <span className="font-bold" style={{ color: val.priceChange1w < 0 ? "#ff0008" : "#0ecb81" }}>{val.priceChange1w}</span></p>
                <p>
                  $ {val.price.toFixed(2)}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
