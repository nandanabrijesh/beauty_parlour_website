import Link from "next/link";

export default function About() {
  return (
    <main className="relative min-h-screen px-6 py-20">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/beautyblur.jpg')",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-pink-500 mb-8">
          About Us
        </h1>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-semibold text-pink-300 mb-6">
            Welcome to DALIA Beauty Parlour
          </h2>

          <p className="text-lg text-white leading-8">
            With over <span className="font-bold text-pink-300">12 years of experience</span>,
            We have been dedicated to helping clients look and
            feel their best. We offer a wide range of beauty and grooming
            services in a friendly, comfortable, and professional environment.
          </p>

          <p className="text-lg text-white leading-8 mt-6">
            Our commitment to quality service, customer satisfaction, and
            attention to detail has earned the trust of many happy customers
            throughout the years.
          </p>

          <p className="text-lg text-white leading-8 mt-6">
            Whether you are preparing for a wedding, special occasion, or simply
            treating yourself, our team is here to provide personalized beauty
            solutions tailored to your needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/services"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              View Services
            </Link>

            <Link
              href="/contact"
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}