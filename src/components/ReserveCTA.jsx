export default function ReserveCTA() {
  return (
    <section className="py-40 bg-gradient-to-b from-white via-white to-neutral-50">
      <div className="max-w-4xl mx-auto px-6">

        <div
          className="
            relative
            bg-white
            rounded-[32px]
            shadow-[0_25px_60px_rgba(0,0,0,0.08)]
            py-20 px-12
            text-center
            fade-in-up
            opacity-0 translate-y-6
            transition-all duration-[1200ms]
          "
        >
          {/* 光レイヤー */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-br from-white/40 via-white/60 to-neutral-50/70
              pointer-events-none
            "
          />

          {/* 小見出し */}
          <p className="text-xs tracking-[0.28em] text-neutral-400 mb-5 relative z-10">
            予約する
          </p>

          {/* タイトル */}
          <h2 className="
            text-3xl md:text-4xl
            font-['Noto_Serif_JP']
            text-neutral-900
            leading-relaxed
            mb-6
            relative z-10
          ">
            光に包まれる滞在を、あなたへ。
          </h2>

          {/* 説明文 */}
          <p className="
            text-neutral-500 
            text-sm md:text-base 
            leading-relaxed 
            mb-10 
            relative z-10
          ">
            朝の光、静かな時間、穏やかな沖縄ステイ——  
            上質な旅の計画をここから。
          </p>

          {/* ボタン群 */}
          <div className="flex flex-col items-center gap-4 relative z-10">
            <a
              href="#reserve"
              className="
                bg-neutral-900 text-white
                px-12 py-4 rounded-full
                text-sm tracking-wide
                shadow-[0_4px_15px_rgba(0,0,0,0.15)]
                hover:bg-neutral-800 transition
              "
            >
              宿泊プランを見る
            </a>

            <a
              href="#reserve"
              className="text-neutral-500 text-sm hover:text-neutral-700 transition"
            >
              空室状況を確認する →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
