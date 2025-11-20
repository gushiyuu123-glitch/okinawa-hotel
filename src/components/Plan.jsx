import plan1 from "/plan1.png";
import plan2 from "/plan2.png";
import plan3 from "/plan3.png";

export default function Plan() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-8 md:px-12">

        {/* 見出し */}
        <div className="text-center mb-20">
          <p className="fade-up text-sm tracking-[0.25em] text-gray-400 uppercase mb-3">
            Plan
          </p>

          <h2 className="fade-up text-3xl md:text-4xl font-['Noto_Serif_JP']
                         text-neutral-900 leading-relaxed">
            宿泊プランのご案内
          </h2>
        </div>

        {/* プランカード */}
        <div className="grid md:grid-cols-3 gap-14">

          {[ 
            {
              img: plan1,
              title: "朝食付きプラン",
              text: "柔らかな朝の光とともに楽しむ上質な朝食付きのプラン。",
              price: "¥18,000 / 1泊〜"
            },
            {
              img: plan2,
              title: "シンプルステイ",
              text: "気軽にお泊まりいただける、スタンダードな宿泊プラン。",
              price: "¥14,000 / 1泊〜"
            },
            {
              img: plan3,
              title: "オーシャンビュー特別プラン",
              text: "海を一望できるお部屋で、特別なひとときを過ごす贅沢プラン。",
              price: "¥26,000 / 1泊〜"
            }
          ].map((p, i) => (
            <div key={i} className="fade-up rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">

              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-7">
                <h3 className="text-xl text-neutral-900 font-['Noto_Serif_JP'] mb-2 leading-snug">
                  {p.title}
                </h3>

                <p className="text-neutral-600 font-['Inter'] text-sm leading-relaxed mb-4">
                  {p.text}
                </p>

                <p className="text-neutral-700 font-['Inter'] tracking-wide mb-6">
                  {p.price}
                </p>

                <a
                  href="#"
                  className="
                    inline-block
                    px-7 py-3 rounded-full
                    bg-neutral-900 text-white text-sm
                    shadow-[0_4px_14px_rgba(0,0,0,0.15)]
                    hover:bg-neutral-800 transition
                  "
                >
                  このプランを見る
                </a>
              </div>

            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
