import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${active
          ? "backdrop-blur-md bg-white/85 shadow-[0_4px_22px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

        {/* ====== ロゴ ====== */}
        <h1
          className={`
            text-[1.1rem] font-['Noto_Serif_JP'] tracking-[0.15em]
            transition-all duration-500
            ${
              active
                ? "text-neutral-900"
                : "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
            }
          `}
        >
          OKINAWA LIGHT RESORT HOTEL
        </h1>

        {/* ====== ナビ ====== */}
        <nav>
          <ul className="hidden md:flex gap-10 text-sm">
            {["Concept", "Rooms", "Facilities", "Dining", "Access"].map(
              (item) => (
                <li
                  key={item}
                  className={`
                    cursor-pointer transition-all duration-300
                    ${
                      active
                        ? "text-neutral-700 hover:text-neutral-900"
                        : "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)] hover:opacity-80"
                    }
                  `}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
