"use client";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function Home() {
  return (
    <>
      <Head>
        <title>Teste</title>
      </Head>
      <main className="flex min-h-screen flex-col ">
        <header className="h-16 bg-slate-700 flex justify-between items-center p-3">
          <h1 className="text-2xl font-bold">My Barber</h1>
          <button className="rounded-full p-2 bg-blue-400">
            <Icon icon="mdi:cart" color="white" width={24} />
          </button>
        </header>

        <section className="flex flex-col ">
          <h2>Serviços</h2>
          <ul>
            <li>
              <div className="border rounded-md">
                <p className="text-xl font-bold">Corte Americano</p>
                <span>
                  Um corte que se baseia em tirar dos lados e deixar alto em
                  cima.
                </span>
                <p className="text-lg">R$ 30,00</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
