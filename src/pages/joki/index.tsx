import SEO from "@/components/seo";

/* eslint-disable @next/next/no-img-element */
export default function Joki() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart");
    }
  };

  const message = encodeURIComponent(
    "Halo Ketua! mau Joki-in Mobile Legends nih"
  );

  const waLink = `https://wa.me/6285177946241?text=${message}`;

  const Link = [
    {
      img: "/sasing-button/Jasa Joki Mobile Legends.jpg",
      title: "Joki-in Akun Ketua!",
      desc: "Serahin ke Tim Sasing gaming Ketua!",
      url: waLink
    }
  ];

  return (
    <>
      <SEO
        title="Joki | Sasing Gaming"
        description="PT Molassindo Merupakan produsen Ethanol terkemuka di Kota Medan, Kami sudah berdiri sejak 2005 dan berkomitmen untuk menjadi salah satu produsen Ethanol terbesar di Indonesia"
      />

      <div className="bg-neutral-900 max-w-lg mx-auto min-h-screen">
        <img src="/banner.jpg" className="w-full" alt="" />
        <div className="text-center p-10 text-white relative z-20 -mt-24">
          <img
            src="/sasing-logo.png"
            className="w-[8rem] mx-auto rounded-full mb-7 border-[0.5rem] border-neutral-950"
            alt=""
          />
          <h1 className="text-5xl font-extrabold leading-12 uppercase">
            sasing gaming joki
          </h1>
          <a
            href="#"
            className="my-3 text-3xl font-[family-name:var(--font-alumni)] font-semibold text-yellow-300 hover:text-yellow-500 transition-all border-2 inline-flex py-1 px-5 rounded-xl"
          >
            www.sasinggaming.com
          </a>
          <p className="mt-2 text-2xl font-semibold">
            Masih mau Stuck di Mythic Terus ?
          </p>
          <h2 className="text-yellow-300 text-5xl mt-2 font-bold uppercase">
            Joki-in di Sasing Gaming aja Ketua!
          </h2>
          <p className="mt-2 text-3xl font-semibold px-6">
            Ketua cukup Duduk tenang aja, serahin saja ke ahlinya..
          </p>
        </div>
        <div className="w-full grid px-5 gap-5">
          {Link.map((item, index) => (
            <a
              key={index}
              onClick={handleClick}
              className="block active:scale-95 transition-all bg-neutral-800 active:ring-2 ring-inset ring-amber-400 rounded-2xl hover:shadow-2xs focus:outline-hidden"
              href={item.url}
            >
              <div className="relative flex items-center overflow-hidden">
                <img
                  className="w-32 h-full absolute inset-0 object-cover rounded-2xl p-2"
                  src={item.img}
                  alt="Blog Image"
                />
                <div className="grow p-4 ms-36">
                  <div className="min-h-24 flex flex-col justify-center">
                    <h3 className="font-semibold text-3xl text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-lg ">{item.desc}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-7">
          <img src="/Footer Ver 3 garis.webp" className="" alt="Footer" />
        </div>
      </div>
    </>
  );
}
