export default function Footer() {
  return (
    <footer className="relative bg-neutral-50 pt-24 pb-12 overflow-hidden">

      {/* ▼ 背景の超薄い光レイヤー（高級ホテル感） */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-neutral-50/80 pointer-events-none" />

      {/* ▼ コンテンツ */}
      <div className="relative max-w-6xl mx-auto px-8 md:px-12 text-center">

        {/* ブランド名 */}
        <h3
          className="
            text-[1.6rem] md:text-[1.85rem]
            font-['Noto_Serif_JP']
            text-neutral-900 tracking-[0.06em]
          "
        >
          OKINAWA LIGHT RESORT HOTEL
        </h3>

        {/* 住所 */}
        <p
          className="
            text-neutral-500 mt-5
            text-[0.92rem] leading-relaxed
            tracking-wide font-['Inter']
          "
        >
          〒900-0013 沖縄県那覇市〇〇〇〇 〇丁目 〇−〇
          <br />
          那覇空港から車で約15分
        </p>

        {/* 薄い仕切り線 */}
        <div className="mt-16 border-t border-neutral-300/40" />

        {/* ▼ GUSHIKEN DESIGN リンク（内部リンク強化） */}
        <p className="mt-8 text-neutral-400 text-[0.8rem] tracking-[0.18em] font-['Inter']">
          Designed by{' '}
          <a
            href="https://gushikendesign.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-neutral-600 transition"
          >
            GUSHIKEN DESIGN
          </a>
        </p>

        {/* コピーライト */}
        <p className="mt-4 text-neutral-400 text-xs tracking-[0.22em]">
          © 2025 OKINAWA LIGHT RESORT HOTEL
        </p>

      </div>
    </footer>
  );
}
