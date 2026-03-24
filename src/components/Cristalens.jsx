
const array = [
  {
    imgPath: "./images/cristalens/artis-plm_NEW.jpg",
    pageUrl: "https://cristalens.fr/wp-content/uploads/2015/10/Artis-PL-M-A4_UK.pdf",
    title: "ARTIS®",
    description: "BIFOCAL HYDROPHOBIC LENS Preloaded"
  },
  {
    imgPath: "./images/cristalens/artis_torique_NEW2.jpg",
    pageUrl: "https://cristalens.fr/wp-content/uploads/2014/09/Artis-T-PL-E-A4_UK.pdf",
    title: "ARTIS® T PL E",
    description: "MONOFOCAL TORIC HYDROPHOBIC Preloaded"
  },
  {
    imgPath: "./images/cristalens/EAZ-Y1.jpg",
    pageUrl: "https://cristalens.fr/wp-content/uploads/2017/02/EAZ-Y-A4_UK.pdf",
    title: "EAZ-Y®",
    description: "MONOFOCAL HYDROPHOBIC LENS Preloaded"
  },
  {
    imgPath: "./images/cristalens/artis_y-pl_NEW1.jpg",
    pageUrl: "https://cristalens.fr/wp-content/uploads/2018/03/Artis-Y-PL-A4_UK.pdf",
      title: "ARTIS® Y PL",
    description: "MONOFOCAL HYDROPHOBIC LENS Preloaded"
  },

  {
    imgPath: "./images/cristalens/clare_new1.jpg",
    pageUrl: "https://cristalens.fr/wp-content/uploads/2014/09/CLARE-A4_UK.pdf",
    title: "CLARE®",
    description: "MONOFOCAL HYDROPHILIC LENS"
  },

  {
    imgPath: "./images/cristalens/cristal_new.jpg",
    pageUrl: "https://cristalens.fr/wp-content/uploads/2014/09/CRISTAL-A4_UK.pdf",
    title: "CRISTAL®",
    description: "MONOFOCAL HYDROPHILIC LENS"
  },

];

function normalizePublicPath(path) {
  // public/ is served from site root in Vite/CRA (e.g. "/images/...")
  return path.replace(/^\.\//, "/");
}

function titleFromImgPath(path) {
  const file = path.split("/").pop() || "";
  const base = file.replace(/\.[^/.]+$/, "");
  return base
    .replace(/new\d*$/i, "")
    .replace(/[_-]+/g, " ")
    .trim()
    .toUpperCase();
}

function Cristalens() {
  return (
    <div className="w-full">
      {/* Top banner */}
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] overflow-hidden">
        <img
          src="/images/cristalens/inner-banner-bg1.jpg"
          alt="Cristalens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-y-0 left-6 sm:left-20 flex items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-white">
            INTRAOCULAR
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            LENSES
          </h1>
        </div>
      </div>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {array.map((item) => {
            const imgSrc = normalizePublicPath(item.imgPath);
            const title = item.title || titleFromImgPath(item.imgPath);
            return (
              <div key={item.pageUrl} className="w-full">
                {/* Image (separate container, clickable) */}
                <a
                  href={item.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl bg-white transition duration-300 hover:shadow-xl"
                >
                  <div className="h-56 sm:h-60 w-full flex items-center justify-center rounded-2xl">
                    <img
                      src={imgSrc}
                      alt={title}
                      className="h-full w-full object-contain rounded-2xl transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </a>

                {/* Text (separate from image) */}
                <div className="px-2 pt-5 text-center">
                  <h3 className="text-lg font-semibold tracking-wide text-slate-800">
                    {title}
                  </h3>
                  {item.description ? (
                    <p className="mt-2 text-xs sm:text-sm tracking-wide text-slate-600">
                      {item.description}
                    </p>
                  ) : null}

                  <a
                    href={item.pageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    READ MORE
                    <span className="text-base leading-none">›</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Cristalens;