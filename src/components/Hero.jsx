import React, { useEffect, useRef } from "react";
import heroImg from "../assets/hero.png";

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.classList.add("opacity-100", "translate-y-0");
  }, []);

  return (
   <section className="relative w-full h-[100vh] overflow-hidden bg-white">

  {/* 背景画像 */}
  <img
    src={heroImg}
    alt="Okinawa Hotel"
    className="absolute inset-0 w-full h-full object-cover brightness-[0.92]"
  />

  {/* 光ベール（透明感） */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/5 to-white/10 pointer-events-none"></div>

  {/* 左寄せテキスト */}
  <div
    ref={textRef}
    className="
      absolute top-[55%] -translate-y-1/2 left-0
      px-8 md:px-20 max-w-xl
      opacity-0 translate-y-4
      transition-all duration-[1300ms]
      ease-[cubic-bezier(.25,.46,.45,.94)] 
    "
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent pointer-events-none"></div>

<h1
  className="
    text-[#fffdf8]
    text-4xl md:text-6xl
    font-[300]
    leading-[1.15]
    drop-shadow-[0_4px_10px_rgba(0,0,0,0.18)]
    font-['Noto_Serif_JP']
   w-[780px] 
  "
>
  沖縄の光に包まれる、<br />
  穏やかなリゾートステイ。
</h1>




    <p
      className="
        text-[#fffdf8]/90
        text-base md:text-lg
        mt-6 mb-10
        leading-relaxed
        font-['Inter']
        drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]
      "
    >
      海、白い風、広がる空青い。  
      朝の光が差し込む、心地よい南国のホテルへ。
    </p>

    <a
      href="#reserve"
      className="
        inline-block
        bg-white/85 backdrop-blur-md 
        text-slate-700
        px-7 py-3 rounded-full
        shadow-md hover:bg-white
        transition font-medium
        font-['Inter']
      "
    >
      宿泊プランを見る
    </a>
  </div>

</section>

  );
}
