import Link from "next/link"

export function Footer() {
    return (
        <div>
            <footer class="bg-zinc-800 m-5 rounded-lg font-poppins">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm sm:text-center text-gray-400">© 2023 <Link href={"/"} className="hover:underline">CryptoCoin</Link>. All Rights Reserved.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                        <li>
                        <Link href={"/"} class="mr-4 hover:underline md:mr-6">Home</Link>
                        </li>
                        <li>
                        <Link href={"market"} class="mr-4 hover:underline md:mr-6">Market</Link>
                        </li>
                        <li>
                            <Link href={"/"} class="mr-4 hover:underline md:mr-6">Choose us</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
