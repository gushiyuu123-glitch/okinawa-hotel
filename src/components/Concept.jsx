export default function Concept() {
  return (
    <section className="bg-white py-28 md:py-32">

      <div className="max-w-6xl mx-auto px-8 md:px-12 grid md:grid-cols-[1.15fr_1fr] gap-14 items-center">

        {/* 左：写真 */}
        <div>
          <img
            src="/concept.png"
            alt="Concept"
            className="
              w-full h-[420px] md:h-[460px] 
              object-cover rounded-xl 
              shadow-[0_8px_28px_rgba(0,0,0,0.06)] fade-up
            "
          />
        </div>

        {/* 右：文章 */}
        <div className="md:pl-10 md:-mt-4 max-w-[420px]">
          <p className="text-sm tracking-[0.03em] text-gray-400 uppercase mb-4">
            Concept
          </p>

          <h2 className="text-3xl md:text-4xl font-['Noto_Serif_JP'] text-neutral-900 leading-[1.55] mb-6 fade-up">
            光と風が織りなす、<br />
            穏やかに<br />満たされる滞在。
          </h2>

          <p className="text-neutral-600 leading-[1.9] text-base md:text-lg font-['Inter'] fade-up">
            広がる青空、柔らかな風、朝の光に包まれる静かな環境。
            忙しさを忘れ、深く呼吸できる上質なリゾートステイをお届けします。
          </p>
        </div>

      </div>

    </section>
  );
}
