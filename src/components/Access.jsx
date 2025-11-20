export default function Access() {
  return (
    <section className="bg-white py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        {/* ====== 見出し ====== */}
        <div className="text-center mb-24">
          <p className="fade-up text-sm tracking-[0.25em] text-gray-400 uppercase mb-4">
            Access
          </p>

          <h2
            className="
              fade-up
              text-3xl md:text-4xl font-['Noto_Serif_JP']
              text-neutral-900 leading-[1.5]
            "
          >
            アクセス・所在地
          </h2>
        </div>

        {/* ====== レイアウト ====== */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ----- 左：施設情報 ----- */}
          <div className="fade-up space-y-7">

            <h3 className="text-xl font-['Noto_Serif_JP'] text-neutral-900 tracking-[0.04em]">
              OKINAWA LIGHT RESORT HOTEL
            </h3>

            <p className="text-neutral-600 leading-[1.9] text-[0.95rem] font-['Inter']">
              〒900-0013  
              沖縄県那覇市〇〇〇〇 〇丁目 〇−〇  
              <br />
              那覇空港から車で約15分
            </p>

            <div className="pt-1 space-y-2 text-neutral-600 font-['Inter'] leading-relaxed text-[0.95rem]">
              <p>チェックイン：15:00</p>
              <p>チェックアウト：11:00</p>
              <p>駐車場：あり（無料）</p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="
                inline-block mt-8
                px-8 py-3 rounded-full
                bg-neutral-900 text-white text-sm tracking-wide
                shadow-[0_4px_15px_rgba(0,0,0,0.12)]
                hover:bg-neutral-800 transition
              "
            >
              Google Mapで見る
            </a>
          </div>

          {/* ----- 右：マップ ----- */}
          <div className="fade-up">
            <img
              src="/access_map.png"
              alt="Map"
              className="
                w-full h-[360px] md:h-[380px]
                object-cover rounded-xl
                shadow-[0_18px_40px_rgba(0,0,0,0.08)]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}
