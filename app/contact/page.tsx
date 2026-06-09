export default function Contact() {
  return (
    <main className="relative min-h-screen px-6 py-20">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/beautyblur.jpg')",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-pink-500">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            We love to hear from you
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Location */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-semibold text-pink-300 mb-4">
              📍 Location
            </h2>

            <p className="text-lg text-white">
              DALIA Beauty Parlour
            </p>

            <p className="text-gray-300 mt-2">
              Thalassery, Kerala
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-semibold text-pink-300 mb-4">
              📞 Phone
            </h2>

            <p className="text-lg text-white">
              +91 XXXXX XXXXX
            </p>

            <p className="text-gray-300 mt-2">
              Call for appointments
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 bg-white/10 backdrop-blur-md rounded-3xl p-4 shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4394.883588675254!2d75.51108611902693!3d11.739658545752528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba427cdb08ca527%3A0xbae9c5506906c270!2sDalia%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1781005888557!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}