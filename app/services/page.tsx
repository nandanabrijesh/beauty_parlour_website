export default function Services() {
  return (
    <main className="relative min-h-screen px-6 py-20">
      {/* Background Image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/beautyblur.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-6xl font-bold text-pink-500">
            Our Services
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Discover our premium beauty and wellness services
          </p>
        </div>

        <div className="relative z-10 h-[70vh] overflow-y-auto services-scroll">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10">
          <h2 className="text-4xl font-semibold text-pink-300 mb-6">
            💄 Face
          </h2>

          <ul className="space-y-4 text-lg text-white">
            <li>✨ Threading</li>
            <li>✨ Facial Treatments</li>
            <li>✨ Cleanups</li>
            <li>✨ Bleaching</li>
          </ul>
        </div>
        <div className="h-8"></div>

        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10">
          <h2 className="text-4xl font-semibold text-pink-300 mb-6">
            💇 Hair
          </h2>

          <ul className="space-y-4 text-lg text-white">
            <li>✨ Hair Cut</li>
            <li>✨ Hair Spa</li>
            <li>✨ Hair Styling</li>
            <li>✨ Hair Coloring</li>
            <li>✨ Hair Treatments</li>
          </ul>
        </div>

        <div className="h-8"></div>

        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10">
          <h2 className="text-4xl font-semibold text-pink-300 mb-6">
            💄 Makeup
          </h2>

          <ul className="space-y-4 text-lg text-white">
            <li>✨ Bridal Makeup</li>
            <li>✨ Reception Makeup</li>
            <li>✨ Guest Makeup</li>
          </ul>
        </div>

       <div className="h-8"></div>

        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10">
          <h2 className="text-4xl font-semibold text-pink-300 mb-6">
            👗 Saree Draping 
          </h2>

          <ul className="space-y-4 text-lg text-white">
            <li>✨ Saree Draping</li>
            <li>✨ Box Folding</li>
            <li>✨ Bridal Saree Setting</li>
            <li>✨ Traditional Draping</li>
          </ul>
        </div>
        </div>
      </div>
    </main>
  );
}