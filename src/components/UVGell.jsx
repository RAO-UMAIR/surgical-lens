function UVGell() {
  const product = {
    image: "/images/products-images/UV-gell.png",
    literature: "/images/products-images/UV-gell-Literature.pdf",
    title: "UV-Gell",
    description: "Surgical Ophthalmic Gel",
  };

  return (
    <div className="w-full">
      {/* Desktop: Split Layout */}
      <div className="hidden md:flex h-screen">
        {/* Left: Text Content with White Background */}
        <div className="w-1/2 bg-white flex flex-col items-center justify-center px-10 lg:px-16 py-12">
          <div className="max-w-md text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-wide text-slate-900">
              {product.title}
            </h1>
            <p className="mt-6 text-base lg:text-lg tracking-wide text-slate-700 leading-relaxed">
              {product.description}
            </p>
            <a
              href={product.literature}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-600 bg-emerald-600 px-8 py-3 text-sm lg:text-base font-semibold tracking-wider text-white transition-all duration-300 hover:bg-emerald-700 hover:border-emerald-700"
            >
              OPEN LITERATURE
              <span className="text-lg leading-none">›</span>
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <a
          href={product.literature}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 bg-white flex items-center justify-center overflow-hidden cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-full max-w-full object-contain"
          />
        </a>
      </div>

      {/* Mobile: Full Screen Image with Overlay Text */}
      <div className="md:hidden flex flex-col w-full">
        <a
          href={product.literature}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-full max-w-full object-contain"
          />
          
          {/* Overlay Text */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/40 to-transparent px-6 py-10">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-white">
              {product.title}
            </h1>
            <p className="mt-3 text-sm tracking-wide text-slate-100 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-600 bg-emerald-600 px-6 py-2.5 text-sm font-semibold tracking-wider text-white">
              OPEN LITERATURE
              <span className="text-base leading-none">›</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default UVGell;
