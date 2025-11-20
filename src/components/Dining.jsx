import diningMain from "/dining_main.png";
import diningFood1 from "/dining_food1.png";
import diningFood2 from "/dining_food2.png";

export default function Dining() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* 見出し */}
        <div className="text-center mb-20">
          <p className="fade-up text-sm tracking-[0.25em] text-gray-400 uppercase mb-3">
            Dining
          </p>

          <h2 className="fade-up text-3xl md:text-4xl font-['Noto_Serif_JP']
                         text-neutral-900 leading-relaxed">
            朝の光に包まれる、<br className="md:hidden" />
            穏やかなダイニング。
          </h2>
        </div>

        {/* メイン写真 */}
        <div className="fade-up mb-24">
          <img
            src={diningMain}
            alt="Dining"
            className="
              w-full h-[360px] md:h-[520px] object-cover
              rounded-xl shadow-[0_18px_42px_rgba(0,0,0,0.08)]
            "
          />
        </div>

        {/* 下2枚（料理写真） */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* Card 1 */}
          <div className="fade-up group">
            <img
              src={diningFood1}
              alt="Breakfast"
              className="
                w-full h-[260px] object-cover rounded-lg
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                transition duration-300 group-hover:brightness-[0.97]
              "
            />
            <h3 className="mt-5 text-lg font-['Noto_Serif_JP'] text-neutral-800">
              上質な朝食
            </h3>
            <p className="text-sm text-neutral-500 font-['Inter'] leading-relaxed mt-1">
              丁寧に仕立てた料理と柔らかな朝の光。心ほどける朝のひとときを。
            </p>
          </div>

          {/* Card 2 */}
          <div className="fade-up group">
            <img
              src={diningFood2}
              alt="Okinawa Food"
              className="
                w-full h-[260px] object-cover rounded-lg
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                transition duration-300 group-hover:brightness-[0.97]
              "
            />
            <h3 className="mt-5 text-lg font-['Noto_Serif_JP'] text-neutral-800">
              沖縄の旬を味わう
            </h3>
            <p className="text-sm text-neutral-500 font-['Inter'] leading-relaxed mt-1">
              沖縄の素材を生かした優しい味わいを、心地よい空間とともに。
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
