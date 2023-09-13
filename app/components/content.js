import React from 'react'

export function Content() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:mt-30 mt-20 gap-10">
            <img
                src="hero-section.png"
                alt="png"
                className="md:w-96 md:h-96 w-64 h-72 md:ml-20 md:mt-20 md:mb-20"
            />
            <p
                className="font-poppins p-8 text-white text-left md:mt-10 md:w-3/4 text-lg md:text-2xl select-none md:ml-10"
                style={{lineHeight: "30pt" }}
            >
                Our website is your one-stop solution for effortlessly tracking the value of numerous cryptocurrencies in real time. With a user-friendly interface and up to the minute data, we provide you with a comprehensive overview of the cryptocurrency market. Whether you're a seasoned investor or just starting out, our platform equips you with the tools you need to stay informed.
            </p>
        </div>
    )
}
