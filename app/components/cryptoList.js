import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "app/globals.css"

export function CryptoList() {

  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=USD`
    ).then((res) => {
      setCrypto(res.data.coins);
    });
  }, []);

  return (
    <cryptolist className="flex justify-center items-center w-full">
      <div className="App">
        <h1>All Cryptocurrencies</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="p-4 bg-zinc-700 rounded-xl my-3 font-poppins"
        />
        <div className="overflow-y-auto">
          <table className="overflow-scroll w-full">
            <thead>
              <tr className="bg-zinc-700 ">
                <td className="p-5 font-poppins text-xl font-medium">Rank</td>
                <td className="p-5 font-poppins text-xl font-medium">Logo</td>
                <td className="p-5 font-poppins text-xl font-medium">Name</td>
                <td className="p-5 font-poppins text-xl font-medium">Symbol</td>
                <td className="p-5 font-poppins text-xl font-medium">Price</td>
              </tr>
            </thead>
            <br />
            <br />
            <tbody>
              {crypto
                .filter((val) => {
                  return val.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((val, id) => {
                  let roundedValue = Math.round(val.marketCap)
                  return (
                    <>
                      <tr id={id} className="font-poppins text-md" style={{ lineHeight: "50pt" }}>
                        <td className="rank">{val.rank}</td>
                        <td className="logo">
                          <a href={val.websiteUrl}>
                            <img src={val.icon} alt="logo" width="30px" />
                          </a>
                        </td>
                        <td className="name">{val.name}</td>
                        <td className="symbol">{val.symbol}</td>
                        <td>${roundedValue}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </cryptolist>
  );
}