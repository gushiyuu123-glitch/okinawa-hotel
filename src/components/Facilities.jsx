import poolImg from "/facilities_main_pool.png";
import loungeImg from "/facility_lounge.png";
import restaurantImg from "/facility_restaurant.png";
import shopImg from "/facility_shop.png";

export default function Facilities() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* 見出し */}
        <div className="text-center mb-20">
          <p className="fade-up text-sm tracking-[0.25em] text-gray-400 uppercase mb-3">
            Facilities
          </p>

          <h2 className="fade-up text-3xl md:text-4xl font-['Noto_Serif_JP'] 
                         text-neutral-900 leading-relaxed">
            充実した施設で、<br className="md:hidden" />
            心地よい滞在を。
          </h2>
        </div>

        {/* 大写真（プールなどメイン施設） */}
        <div className="fade-up mb-24">
          <img
            src={poolImg}
            alt="Pool"
            className="
              w-full h-[360px] md:h-[520px] object-cover rounded-xl
              shadow-[0_18px_42px_rgba(0,0,0,0.08)]
            "
          />
        </div>

        {/* 下のカード3つ */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* カード共通 */}
          {[ 
            { img: loungeImg, title: "ラウンジ", text: "柔らかな光が差し込む上質なラウンジで、ゆったりと流れる時間を。" },
            { img: restaurantImg, title: "レストラン", text: "朝の光に包まれるダイニングで、穏やかな朝食のひとときを。" },
            { img: shopImg, title: "ショップ", text: "厳選されたアイテムが並ぶセレクトショップで、旅の思い出を。" }
          ].map((item, index) => (
            <div key={index} className="fade-up group">
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full h-[220px] object-cover rounded-lg
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  transition duration-300 group-hover:brightness-[0.97]
                "
              />
              <h3 className="mt-5 text-lg font-['Noto_Serif_JP'] text-neutral-800 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 font-['Inter'] leading-[1.9] mt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
