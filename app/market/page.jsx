"use client";

import React from 'react'
import { CryptoList } from '../components/cryptoList';
import { NavBar } from '../components/navBar';
import { Rays } from '../components/rays';

export default function page() {
    return (
        <main>
            <NavBar />
            <Rays />
            <div className='mt-32'>
                <CryptoList />
            </div>
        </main>
    )
}
