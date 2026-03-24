function About() {
  const productLines = [
    "Intraocular Lenses",
    "Injectors",
    "Ophthalmic Scissors",
    "Surgical Gels",
    "Related Eye-Care Devices",
  ];

  const trustPoints = [
    {
      title: "Established",
      value: "2023",
      detail: "Built with a clear vision to serve eye-care professionals in Pakistan.",
    },
    {
      title: "Core Focus",
      value: "Quality",
      detail: "Reliable products selected for precision, safety, and consistency.",
    },
    {
      title: "Approach",
      value: "Traditional Values",
      detail: "Honest dealing, long-term relationships, and dependable service.",
    },
    {
      title: "Serving",
      value: "Clinics & Hospitals",
      detail: "Supporting surgeons and institutions with practical solutions.",
    },
  ];

  const punjabCities = [
    "Lahore",
    "Multan",
    "Rahim yar khan",
    "DG khan",
    "Khanewal",
    "Sadiqabad",
    "Bahawalpur",
    "Ali Pur",
  ];

  return (
    <div className="w-full bg-white text-[#2c1810]">
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pt-12 md:pt-16 pb-14 md:pb-20">
        <div className="w-full">
          <p className="text-[11px] sm:text-xs tracking-[0.32em] text-[#b8681a] font-semibold mb-4">
            ABOUT SURGICAL SIGHT SOLUTIONS
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#2c1810]">
            Traditional Trust.
            <span className="block text-[#cc6f12]">Modern Eye-Care Support.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#5b3a1a]">
            Surgical Sight Solutions came into being in <span className="font-semibold text-[#cc6f12]">2023</span> with a focused mission:
            to deliver dependable ophthalmic products to doctors, hospitals, and eye-care centers.
            We combine traditional business values with a modern healthcare mindset so professionals can rely on us for quality and continuity.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {productLines.map((item) => (
              <span
                key={item}
                className="px-3.5 py-2 rounded-full bg-[#fff1de] border border-[#f1d2a8] text-[#7a4a1d] text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-14 md:pb-20">
        <div className="w-full">
          <div className="mb-5 md:mb-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2c1810]">
              OUR CEO
            </h2>
            <div className="mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#cc6f12] via-[#e59a3a] to-[#f2c078]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] gap-10 lg:gap-8 items-start">
            <div className="text-[#5b3a1a] order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c1810] leading-tight">
                Rao Muhammad Umar
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                Rao Muhammad Umar, a young and dynamic entrepreneur, is the CEO of 3SSurgicals - Surgical Sight Solution with over 7 years of experience (2019-2026) in the healthcare and sales industry, specializing in ophthalmic surgical products.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                At a notably young age, he has successfully built and expanded his company within a very short period (2023-2026), establishing a strong presence across South Punjab and Interior Sindh, Pakistan. Under his leadership, the company has become a trusted supplier of high-quality products used in eye surgeries, reflecting his vision, dedication, and rapid execution.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                He began his career as a Sales Executive at Optimus Company (Feb 2019-Feb 2020) and later served as an Area Sales Manager at VSY Biotechnology (Feb 2020-Feb 2023), gaining strong expertise in sales and distribution.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                He holds an MBA in Marketing from National University of Modern Languages (NUML) and a BBA from Bahauddin Zakariya University (BZU), and continues to lead with a clear focus on growth, quality, and trust.
              </p>
            </div>

            <div className="relative order-1 lg:order-2 lg:justify-self-end w-full lg:max-w-[560px]">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#f6ad44]/30 via-[#f7c98a]/20 to-[#d46a0a]/25 blur-2xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-[#f0d8ba] bg-white shadow-[0_20px_50px_rgba(118,67,19,0.18)]">
                <img
                  src="/images/about/ceo-updated.png"
                  alt="Rao Muhammad Umar, CEO"
                  className="w-full h-[300px] sm:h-[360px] md:h-[420px] object-cover"
                />
                <div className="p-5 sm:p-6 border-t border-[#f2dfc8] bg-gradient-to-r from-[#fffaf2] to-[#fff6ea]">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#b8681a] font-semibold">Our Intro</p>
                  <p className="mt-2 text-[#6b4423] leading-relaxed">
                    From lenses and injectors to scissors and gels, we are building a trusted platform for ophthalmic essentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-14 md:pb-20">
        <div className="max-w-7xl">
          <div className="mb-7 md:mb-9">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c1810]">Why Professionals Choose Us</h2>
            <p className="mt-3 text-[#6b4423] text-base sm:text-lg max-w-3xl">
              We are at the beginning of our journey, but our foundation is clear: right products, right support, and right intent.
              This introduction section will lead naturally into your upcoming distribution-in-cities expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-[#efd8b8] bg-white p-5 shadow-[0_10px_30px_rgba(109,64,21,0.10)] hover:shadow-[0_14px_36px_rgba(109,64,21,0.16)] transition-shadow duration-300"
              >
                <p className="text-xs tracking-[0.22em] uppercase text-[#ba7425] font-semibold">{point.title}</p>
                <p className="mt-2 text-xl font-bold text-[#2c1810]">{point.value}</p>
                <p className="mt-2 text-sm text-[#6b4423] leading-relaxed">{point.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 md:px-12 lg:px-16 pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl">
          <p className="text-[11px] sm:text-xs tracking-[0.3em] text-[#b8681a] font-semibold mb-3">
            OUR DISTRIBUTION CITIES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c1810]">
            Serving Across Punjab
          </h2>
          <p className="mt-3 text-[#6b4423] text-base sm:text-lg max-w-4xl leading-relaxed">
            Surgical Sight Solutions is actively working across the complete Punjab region. We continue to support hospitals,
            clinics, and eye-care professionals with timely access to trusted ophthalmic products.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
            {punjabCities.map((city) => (
              <span
                key={city}
                className="px-3.5 py-2 rounded-full bg-[#fff1de] border border-[#f1d2a8] text-[#7a4a1d] text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
