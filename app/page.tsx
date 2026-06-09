import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/beauty1.png')",
      }}>
      <nav className="flex justify-center gap-8 p-6 bg-white shadow-md">
  <Link href="/" className="text-lg font-semibold text-pink-700 hover:text-pink-900">
    Home
  </Link>

  <Link href="/services" className="text-lg font-semibold text-pink-700 hover:text-pink-900">
    Services
  </Link>

  {/* <Link href="/gallery" className="text-lg font-semibold text-pink-700 hover:text-pink-900">
    Gallery
  </Link> */}

  <Link href="/about" className="text-lg font-semibold text-pink-700 hover:text-pink-900">
    About
  </Link>

  <Link href="/contact" className="text-lg font-semibold text-pink-700 hover:text-pink-900">
    Contact
  </Link>
</nav>

      {/* <section className="py-24 text-center">
  <h1 className="text-8xl font-bold text-pink-800">
  DALIA
</h1>

<p className="text-xl text-gray-700 tracking-[12px] uppercase">
  Beauty Parlour
</p>

  <p className="mt-8 text-lg text-gray-700">
    Beauty • Elegance • Confidence
  </p>
</section> */}
    </main>
  );
}