import React, { useState, useEffect } from "react";
import Axios from "axios";
import "app/globals.css";

export function CryptoList() {
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 15;

  useEffect(() => {
    setIsLoading(true);
    Axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=USD`
    )
      .then((res) => {
        setCrypto(res.data.coins);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const filteredCrypto = crypto.filter((val) =>
    val.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCrypto.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCrypto.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full">
      <div className="text-center">
        <h1 className="font-bridge md:text-5xl text-3xl font-bold">
          All Cryptocurrencies
        </h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="p-4 m-8 bg-zinc-800 text-white rounded-xl font-poppins w-80 md:w-128"
        />
      </div>
      {isLoading ? (
        <div className="text-center font-poppins text-xl font-bold">Loading...</div>
      ) : (
        <div className="overflow-y-auto rounded-lg p-3 md:p-10">
          <table className="overflow-scroll w-full rounded-lg">
            <thead>
              <tr
                className="gradient text-center my-10 font-bridge"
                style={{ borderRadius: "20px" }}
              >
                <th className="md:p-5 p-2 text-lg md:text-xl font-medium" style={{ maxWidth: "1000px" }}>
                  Rank
                </th>
                <th className="md:p-5 p-2 text-lg md:text-xl font-medium" style={{ maxWidth: "1800px" }}>
                  Name
                </th>
                <th className="md:p-5 p-2 text-lg md:text-xl font-medium" style={{ maxWidth: "1800px" }}>
                  Symbol
                </th>
                <th className="md:p-5 p-2 text-lg md:text-xl font-medium" style={{ maxWidth: "1800px" }}>
                  Price
                </th>
                <th
                  className="md:p-5 p-2 text-lg md:text-xl font-medium"
                  style={{ maxWidth: "180px" }}
                >
                  Market Cap
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((val, id) => {
                let roundedCap = Math.round(val.marketCap);
                return (
                  <tr
                    id={id}
                    className="font-bridge text-lg text-center"
                    style={{ lineHeight: "50pt" }}
                    key={id}
                  >
                    <td className="rank">{val.rank}</td>
                    <td className="name">
                      <a href={val.websiteUrl} className="flex gap-10">
                        <img
                          src={val.icon}
                          alt="logo"
                          width="50px"
                          height="50px"
                          style={{ objectFit: "contain" }}
                        />
                        <p>{val.name}</p>
                      </a>
                    </td>
                    <td className="symbol">{val.symbol}</td>
                    <td>$ {val.price.toFixed(2)}</td>
                    <td style={{ maxWidth: "120px" }}>
                      $ {roundedCap}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-center mt-4 mb-10">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-2 px-3 py-1 rounded-md font-poppins text-xl ${
              currentPage === number
                ? "gradient text-zinc-800"
                : "bg-zinc-800 text-white"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
