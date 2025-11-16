import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import TourCard from "./Components/TourCard";
import BlogCard from "./Components/BlogCard";
import PhotoCarousel from "./Components/PhotoCarousel";
import logo from "./assets/voyaz.png";
import bgVideo from "./assets/Seamless Sri Lanka.mp4";
import sigiriyaImg from "./assets/Sigiriya.jpg";
import beachImg from "./assets/beach.jpeg";
import gallery1 from "./assets/Voyaz-Travel-1.jpg";
import gallery2 from "./assets/Voyaz-Travel-2.jpg";
import gallery3 from "./assets/Voyaz-Travel-3.jpg";
import gallery4 from "./assets/Voyaz-Travel-4.jpg";
import gallery5 from "./assets/Photo 5.jpg";
import gallery6 from "./assets/Photo 6.jpg";
import gallery7 from "./assets/Voyaz-Travel-7.jpg";
import gallery8 from "./assets/Photo 8.jpg";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div style={{ position: "relative", zIndex: 1 }}>
          <Nav />
          <section
            aria-label="Hero"
            style={{
              position: "relative",
              minHeight: "100vh",
              overflow: "hidden",
            }}
          >
            <video
              src={bgVideo}
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -3,
                pointerEvents: "none",
              }}
            />

            <div
              style={{ position: "relative", zIndex: 1, padding: "9rem 15rem" }}
            >
              <h1
                style={{ fontSize: "2.5rem", fontWeight: 700, color: "white" }}
              >
                Where Every Step
                <p>Tells a Story</p>
              </h1>
            </div>
          </section>
        </div>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 max-w-6xl mx-auto">
              <div className="w-full md:w-1/2">
                <img
                  src={sigiriyaImg}
                  alt="Sigiriya"
                  className="w-full h-72 md:h-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <img src={logo} alt="Voyaz Travel" className="w-40 mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                  <span className="underline">Welcome </span> to Voyaz Travel
                </h2>

                <p className="text-gray-600 leading-relaxed mt-4 max-w-xl">
                  At Voyaz Travel, a trusted inbound Destination Management
                  Company in Sri Lanka, we create unforgettable travel
                  experiences for international visitors.
                </p>

                <p className="text-gray-600 leading-relaxed mt-6 max-w-xl">
                  With deep local expertise and a passion for sharing Sri
                  Lanka’s vibrant culture, stunning landscapes, and hidden gems,
                  we craft tailor-made tours that capture the island’s true
                  spirit.
                </p>

                <p className="text-gray-600 leading-relaxed mt-6 max-w-xl">
                  From your arrival to departure, every detail is thoughtfully
                  handled to ensure a seamless, immersive, and enriching
                  journey—helping you experience Sri Lanka through the eyes of
                  those who know it best.
                </p>

                <div className="mt-8">
                  <button className="bg-[#0f5f82] hover:bg-[#0d556f] text-white font-semibold py-3 px-6 md:px-8 rounded-lg shadow-md uppercase inline-flex items-center">
                    <span className="mr-6" style={{ letterSpacing: "0.28em" }}>
                      READ ME
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="relative p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z"
                      stroke="none"
                      fill="#0f5f82"
                      opacity="0.15"
                    />
                    <path
                      d="M3 12c0-6 4-8 9-8s9 2 9 8-4 8-9 8S3 18 3 12z"
                      stroke="#0f5f82"
                      fill="none"
                    />
                    <path
                      d="M7 12l3-2 4 2 3-2"
                      stroke="#0f5f82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-2 text-gray-800">
                  Tailor-Made Travel Plans
                </h3>
                <p className="text-gray-500 max-w-xs mx-auto">
                  Personalized itineraries designed uniquely for your style and
                  travel goals.
                </p>
                <div
                  className="hidden md:block absolute -right-3 top-6 bottom-6 w-px bg-blue-800 rounded"
                  aria-hidden="true"
                />
              </div>
              <div className="relative p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#0f5f82"
                      fill="none"
                    />
                    <path
                      d="M12 7v5l3 2"
                      stroke="#0f5f82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-2 text-gray-800">
                  Round-the-Clock Support
                </h3>
                <p className="text-gray-500 max-w-xs mx-auto">
                  Available 24/7 to ensure a smooth and safe journey.
                </p>
                <div
                  className="hidden md:block absolute -right-3 top-6 bottom-6 w-px bg-blue-800 rounded"
                  aria-hidden="true"
                />
              </div>

              <div className="relative p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 2v20"
                      stroke="#0f5f82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 8c3-2 5-2 8 0s5 2 8 0"
                      stroke="#0f5f82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-2 text-gray-800">
                  Flexible Travel Options
                </h3>
                <p className="text-gray-500 max-w-xs mx-auto">
                  Travel freely with plans that adapt to your changing needs.
                </p>
                <div
                  className="hidden md:block absolute -right-3 top-6 bottom-6 w-px bg-blue-800 rounded"
                  aria-hidden="true"
                />
              </div>

              <div className="p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 12a3 3 0 100-6 3 3 0 000 6z"
                      stroke="#0f5f82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1"
                      stroke="#0f5f82"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-2 text-gray-800">
                  Local Expertise
                </h3>
                <p className="text-gray-500 max-w-xs mx-auto">
                  Insider knowledge offering authentic experiences across Sri
                  Lanka’s highlights.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="relative w-full"
          style={{ minHeight: "100vh", overflow: "hidden" }}
        >
          <img
            src={beachImg}
            alt="Beach"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: -1 }}
          />

          <div
            className="relative z-10 flex items-center justify-end"
            style={{ minHeight: "60vh" }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 mr-4 md:mr-24 w-full md:w-2/5 max-w-lg mt-40">
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-800 text-center">
                Why Sri Lanka?
              </h2>

              <div className="w-20 h-1 bg-gray-700 mx-auto my-6 rounded"></div>

              <p className="mt-4 text-gray-600 leading-relaxed text-center">
                A land of breathtaking contrasts—Sri Lanka offers serene
                beaches, misty hills, rich heritage, and vibrant wildlife all in
                one compact island. Whether you seek adventure, relaxation, or
                cultural discovery, this tropical gem promises unforgettable
                memories at every turn.
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">
              Explore the Beauty of the Island Paradise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Top Destinations in Sri Lanka
            </h2>
            <div className="w-24 h-1 bg-gray-700 mx-auto my-4 rounded"></div>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover Sri Lanka’s most breathtaking locations — from serene
              beaches and misty hill country to ancient cities and wildlife
              escapes. Perfect spots for every kind of traveler.
            </p>
          </div>
          <div className="container mx-auto px-4 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={gallery1}
                  alt="Gallery 1"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute left-6 bottom-6 text-white text-3xl md:text-4xl font-serif font-bold drop-shadow-lg">
                  Anuradhapura
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={gallery2}
                  alt="Gallery 2"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute left-6 bottom-6 text-white text-3xl md:text-4xl font-serif font-bold drop-shadow-lg">
                  Dambulla
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={gallery3}
                  alt="Gallery 3"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute left-6 bottom-6 text-white text-3xl md:text-4xl font-serif font-bold drop-shadow-lg">
                  Benthota
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={gallery4}
                  alt="Gallery 4"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute left-6 bottom-6 text-white text-3xl md:text-4xl font-serif font-bold drop-shadow-lg">
                  Sigiriya
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={gallery5}
                  alt="Gallery 5"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute left-6 bottom-6 text-white text-3xl md:text-4xl font-serif font-bold drop-shadow-lg">
                  Colombo
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={gallery6}
                  alt="Gallery 6"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute left-6 bottom-6 text-white text-3xl md:text-4xl font-serif font-bold drop-shadow-lg">
                  Nuwaraeliya
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={gallery7}
                  alt="Gallery 7"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute left-6 bottom-6 text-white text-3xl md:text-4xl font-serif font-bold drop-shadow-lg">
                  Galle
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={gallery8}
                  alt="Gallery 8"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute left-6 bottom-6 text-white text-3xl md:text-4xl font-serif font-bold drop-shadow-lg">
                  Arugam Bay
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-[#0f5f82] hover:bg-[#0d556f] text-white font-semibold py-3 px-6 md:px-8 rounded-lg shadow-md uppercase inline-flex items-center">
              <span className="mr-6" style={{ letterSpacing: "0.28em" }}>
                MORE DESTINATIONS
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">
              Crafted for Every Kind of Traveler
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our Tour Packages
            </h2>
            <div className="w-24 h-1 bg-gray-700 mx-auto my-4 rounded"></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <TourCard
                image={gallery4}
                title={`Sri Lanka Scenic Train Odyssey`}
                days={7}
                description={`A 7-day journey through Sri Lanka’s cultural gems and scenic rails. This tour celebrates Sri Lanka’s rich heritage, stunning landscapes, and authentic local experiences.`}
              />

              <TourCard
                image={gallery2}
                title={`Majestic Sri Lanka Heritage Trail`}
                days={9}
                description={`A 9-day odyssey through Sri Lanka’s cultural and natural splendors. Crafted for travelers seeking temples, ancient sites and unforgettable cultural encounters.`}
              />

              <TourCard
                image={gallery3}
                title={`Sri Lanka Cultural and Coastal Quest`}
                days={5}
                description={`Embark on a captivating 5-day journey tailored for travelers seeking coastal charms, lively markets and cultural discovery across Sri Lanka.`}
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-[#0f5f82] hover:bg-[#0d556f] text-white font-semibold py-3 px-6 md:px-8 rounded-lg shadow-md uppercase inline-flex items-center">
              <span className="mr-6" style={{ letterSpacing: "0.28em" }}>
                MORE Packages
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>

        <PhotoCarousel
          items={[
            { src: gallery4, title: "Wildlife Safaris" },
            { src: gallery2, title: "Surfing" },
            { src: gallery7, title: "Tea Plantations Visit" },
            { src: gallery1, title: "Cultural Sites" },
            { src: gallery3, title: "Coastal Adventures" },
            { src: gallery8, title: "Arugam Bay & Beaches" },
          ]}
        />
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">
              Inspiration for Your Next Adventure
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Travel Blog
            </h2>
            <div className="w-24 h-1 bg-gray-700 mx-auto my-4 rounded"></div>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Explore travel tips, destination guides, and insider stories to
              help you plan the perfect trip to Sri Lanka.
            </p>
          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <BlogCard
                image={gallery1}
                date={"2025-10-22"}
                author={"Voyaz"}
                comments={0}
                title={
                  "Sri Lanka’s Moment: Why the Record Tourism Surge is Your Invitation to Visit Now"
                }
                excerpt={
                  "Sri Lanka is experiencing a tourism resurgence—discover what’s driving the surge and why now is the perfect time to plan your visit."
                }
              />

              <BlogCard
                image={gallery2}
                date={"2025-08-27"}
                author={"Voyaz"}
                comments={0}
                title={
                  "The Ultimate Guide to Sri Lanka’s Ella Train Journey: Why This 7–Hour Ride Will Change How You See Travel Forever"
                }
                excerpt={
                  "A detailed guide to the Ella train route, what to expect, best seats, and tips to make the most of this iconic Sri Lanka experience."
                }
              />

              <BlogCard
                image={gallery3}
                date={"2025-08-04"}
                author={"Voyaz"}
                comments={0}
                title={
                  "Walking Through History: The Pekoe Trail’s Journey Into Sri Lanka’s Tea Heart"
                }
                excerpt={
                  "Follow the Pekoe Trail through tea estates and rolling hills—an immersive walk into Sri Lanka’s tea culture and history."
                }
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-[#0f5f82] hover:bg-[#0d556f] text-white font-semibold py-3 px-6 md:px-8 rounded-lg shadow-md uppercase inline-flex items-center">
              <span className="mr-6" style={{ letterSpacing: "0.28em" }}>
                Read More
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-10xl mx-auto">
              <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center md:justify-between gap-6">
                <h2 className="flex-1 min-w-0 text-2xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-800 text-center md:text-left leading-tight whitespace-nowrap">
                  <span>Get in Touch With Voyaz Travel</span>
                </h2>

                <div className="shrink-0">
                  <a href="mailto:info@voyaztravel.com">
                    <button className="bg-[#0f5f82] hover:bg-[#0d556f] text-white font-semibold py-3 px-6 md:px-8 rounded-lg shadow-md uppercase inline-flex items-center">
                      <span
                        className="mr-6"
                        style={{ letterSpacing: "0.28em" }}
                      >
                        CLICK HERE
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M13 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
