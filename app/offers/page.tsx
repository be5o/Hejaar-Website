"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OffersPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const offers = [
    {
      titleEn: "Finish Smart!",
      titleAr: "شطبها بذكاء... شطبها Smart!",
      contentEn: [
        "Full finishing for apartments, villas, or offices — from structure to decor.",
        "Electrical works, plumbing, carpentry, flooring (Parquet / Ceramic).",
        "Modern decoration and interior finishing.",
        "🎁 Free Smart Home System — control lights, AC, and security from your phone.",
        "Modern designs, high-quality materials, top-standard execution.",
      ],
      contentAr: [
        "تشطيب كامل للشقق أو الفلل أو المكاتب — من أول البناء حتى الديكور.",
        "تأسيس كهرباء، سباكة، نجارة، أرضيات (باركيه / سيراميك).",
        "تشطيبات داخلية وديكورات مودرن.",
        "🎁 نظام Smart Home مجاني — تحكم في الإضاءة والتكييف والأمان من موبايلك.",
        "تصميمات عصرية، خامات عالية الجودة، تنفيذ بمعايير احترافية عالية.",
      ],
    },
    {
      titleEn: "Supervision Discount Offer",
      titleAr: "عرض نسبة الإشراف",
      contentEn: [
        "Supervision fee reduced from 25% to only 15%.",
        "Full finishing for apartments, villas, and offices.",
        "Electrical works, plumbing, carpentry, flooring (Parquet / Ceramic).",
        "Modern and elegant designs, precise execution.",
        "⚡ Limited time offer — start your finishing journey now with a professional team.",
      ],
      contentAr: [
        "نسبة الإشراف انخفضت من 25% إلى 15% فقط.",
        "تشطيب كامل للشقق أو الفلل أو المكاتب.",
        "تأسيس كهرباء، سباكة، نجارة، أرضيات (باركيه / سيراميك).",
        "تصميمات عصرية وأنيقة، تنفيذ بدقة واحتراف.",
        "⚡ العرض ساري لفترة محدودة — ابدأ الآن مع فريق محترف يحقق حلمك.",
      ],
    },
    {
      titleEn: "VIP Smart Package – 6300 EGP Only",
      titleAr: "باقة VIP SMART",
      contentEn: [
        "Electrical setup with El-Sewedy original cables.",
        "Plumbing using BR high-quality materials.",
        "Interior carpentry and Cleopatra ceramic flooring.",
        "Modern interior finishing with Jotun paints.",
        "Includes Smart Home system for lighting, AC, and security control.",
        "⚡ Limited time offer — book now before the price increases.",
      ],
      contentAr: [
        "تأسيس كهرباء بأسلاك السويدي الأصلية.",
        "سباكة بخامات عالية الجودة من BR.",
        "نجارة داخلية وأرضيات سيراميك من كليوباترا.",
        "تشطيبات داخلية ودهانات جوتن.",
        "يشمل نظام Smart Home للتحكم في الإضاءة، التكييف، والأمان.",
        "⚡ العرض ساري لفترة محدودة — احجز الآن قبل ما السعر يزيد.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      <h1
        data-aos="fade-down"
        className="text-4xl md:text-5xl font-semibold text-[#dabe6d] mb-12"
      >
        Our Exclusive Offers
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {offers.map((offer, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-neutral-900 border border-[#dabe6d]/40 rounded-2xl shadow-lg p-8 hover:shadow-[#dabe6d]/20 transition-all duration-300"
          >
            {/* English Section */}
            <h2 className="text-2xl text-[#dabe6d] font-semibold mb-4 text-center">
              {offer.titleEn}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm leading-relaxed">
              {offer.contentEn.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="border-t border-[#dabe6d]/30 my-6"></div>

            {/* Arabic Section */}
            <h2 className="text-2xl text-[#dabe6d] font-semibold mb-4 text-center font-arabic">
              {offer.titleAr}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm leading-relaxed text-right font-arabic">
              {offer.contentAr.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
