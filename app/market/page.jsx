"use client";

import React from 'react'
import { CryptoList } from '../components/cryptoList'
import { NavBar } from '../components/navBar';

export default function page() {
    return (
        <main>
            <NavBar />
            <div className='mt-32'>
                <CryptoList />
            </div>
        </main>
    )
}
