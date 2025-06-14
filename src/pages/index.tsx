"use client";

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const linkData = [
    {
      img: "/sasing-button/Top Up Mobile Legens.jpg",
      title: "Top Up MLBB",
      desc: "Mau Top Up di Sasing Gaming Murah, Cepat, dan Legal 100%",
      url: "/top-up"
    },
    {
      img: "/sasing-button/Jasa Joki Mobile Legends.jpg",
      title: "Joki Akun MLBB",
      desc: "Mau Push Rank tapi Mepet? Serahin ke Tim Sasing Gaming",
      url: "/joki"
    }
  ];
  return (
    <>
      <div className="bg-neutral-900 max-w-lg mx-auto min-h-screen">
        <img src="/banner.jpg" className="w-full" alt="" />
        <div className="text-center p-10 text-white relative z-20 -mt-24">
          <img
            src="/sasing-logo.png"
            className="w-[8rem] mx-auto rounded-full mb-7 border-[0.5rem] border-neutral-950"
            alt=""
          />
          <h1 className="text-5xl font-extrabold leading-12 uppercase">
            sasing gaming
          </h1>
          <a
            href="#"
            className="my-3 text-3xl font-[family-name:var(--font-alumni)] font-semibold text-yellow-300 hover:text-yellow-500 transition-all border-2 inline-flex py-1 px-5 rounded-xl"
          >
            www.sasinggaming.com
          </a>
          <p className="text-2xl font-semibold">
            Selamat di Landing Page Sasing Gaming Ketua..
          </p>
          <h2 className="text-yellow-300 text-5xl mt-2 font-bold">
            Ketua Butuh apa hari ini ?
          </h2>
        </div>
        <div className="w-full grid px-5 gap-5">
          {linkData.map((item, index) => (
            <Link
              key={index}
              className="block active:scale-95 transition-all bg-neutral-800 active:ring-2 ring-inset ring-amber-400 rounded-2xl hover:shadow-2xs focus:outline-hidden"
              href={item.url}
            >
              <div className="relative flex items-center overflow-hidden">
                <img
                  className="w-32 h-full absolute inset-0 object-cover rounded-2xl p-2"
                  src={item.img}
                  alt={item.title}
                />
                <div className="grow p-4 ms-36">
                  <div className="min-h-24 flex flex-col justify-center">
                    <h3 className="font-semibold text-3xl text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-lg">{item.desc}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-7">
          <img src="/Footer Ver 3 garis.webp" className="" alt="Footer" />
        </div>
      </div>
    </>
  );
}
