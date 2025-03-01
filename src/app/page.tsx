import EventCard from "./components/Card/EventCard";

const eventTitles = [
  {
    image: "/eve.png",
    title: "Events",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae accusamus temporibus explicabo non!? jebfoubherw'gbwiue ehv iubef iigo buoegbub vbri;ghewb",
  },
  {
    image: "/eve.png",
    title: "Brand Activation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae accusamus temporibus explicabo non!? jebfoubherw'gbwiue ehv iubef iigo buoegbub vbri;ghewb",
  },
  {
    image: "/eve.png",
    title: "EXHIBITION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae accusamus temporibus explicabo non!? jebfoubherw'gbwiue ehv iubef iigo buoegbub vbri;ghewb",
  },
];

export default function page() {
  return (
    <>
      <main className="relative">
        <div className="relative w-full">
          <img src="/hero.png" className="w-full" alt="" />
          <div className="absolute inset-0 bg-[#353535]/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="max-w-lg flex flex-col gap-8">
              <h1
                className="text-[2.6vw] font-bold text-left"
                style={{ textShadow: "2px 4px 8px rgba(0, 0, 0, 1)" }}
              >
                Your Go-To Event
                <br />
                Management Experts!
              </h1>
              <p className="mt-4 text-[1.1vw] text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </main>
      <section className="mx-[6%] my-8">
        <h3 className="font-semibold text-accent text-[2vw] my-8">
          LOREM IPSUM
        </h3>
        <div className="grid grid-cols-3 gap-6">
          {eventTitles.map((event, idx) => (
            <EventCard key={idx} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}
