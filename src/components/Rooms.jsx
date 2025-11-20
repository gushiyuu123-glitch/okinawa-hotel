export default function Rooms() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        {/* ====== SECTION TITLE ====== */}
        <p className="fade-up text-sm tracking-[0.25em] text-gray-400 uppercase mb-3 text-center">
          Rooms
        </p>

        <h2 className="fade-up text-3xl md:text-4xl font-['Noto_Serif_JP'] text-center text-gray-900 mb-16 leading-relaxed">
          光と静けさに包まれる、<br className="md:hidden" />
          上質な客室。
        </h2>

        {/* ====== MAIN LARGE CARD ====== */}
        <div
          className="
            fade-up
            bg-white rounded-2xl overflow-hidden
            shadow-[0_20px_40px_rgba(0,0,0,0.06)]
            grid md:grid-cols-[1.45fr_1fr]
            mb-24
          "
        >
          {/* LEFT IMAGE */}
          <img
            src="/room1.png"
            alt="Premium Room"
            className="w-full h-full object-cover"
          />

          {/* RIGHT CONTENT */}
          <div className="p-10 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl text-gray-900 font-['Noto_Serif_JP'] mb-5 leading-snug">
              プレミアムオーシャンルーム
            </h3>

            <p className="text-gray-600 font-['Inter'] leading-relaxed mb-7 text-[15px]">
              白を基調とした広々とした客室。  
              朝の光が差し込む上質な空間で、  
              心地よい滞在をお楽しみいただけます。
            </p>

            <a
              href="#"
              className="
                inline-block self-start
                px-7 py-3 rounded-full
                bg-gray-900 text-white text-sm tracking-wide
                shadow-[0_4px_10px_rgba(0,0,0,0.15)]
                hover:bg-gray-800 transition
              "
            >
              詳しく見る
            </a>
          </div>
        </div>

        {/* ====== SMALL ROOM CARDS ====== */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* SMALL CARD 1 */}
          <div className="fade-up rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <img
              src="/room2.png"
              alt="Garden Room"
              className="w-full h-64 object-cover"
            />
            <div className="p-7">
              <h4 className="text-xl text-gray-900 font-['Noto_Serif_JP'] mb-2 leading-snug">
                ガーデンルーム
              </h4>
              <p className="text-gray-600 font-['Inter'] text-[15px] leading-relaxed">
                緑に囲まれた静かな客室で、穏やかな時間をお過ごしください。
              </p>
            </div>
          </div>

          {/* SMALL CARD 2 */}
          <div className="fade-up rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <img
              src="/room3.png"
              alt="Twin Room"
              className="w-full h-64 object-cover"
            />
            <div className="p-7">
              <h4 className="text-xl text-gray-900 font-['Noto_Serif_JP'] mb-2 leading-snug">
                ツインルーム
              </h4>
              <p className="text-gray-600 font-['Inter'] text-[15px] leading-relaxed">
                白を基調としたシンプルで清潔感のあるツインルームです。
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
