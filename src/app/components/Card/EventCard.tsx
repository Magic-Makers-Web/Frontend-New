interface EventCardProps {
  image: string;
  title: string;
  description: string;
}

export default function EventCard({ event }: { event: EventCardProps }) {
  return (
    <>
      <div className="mx-auto w-[410px] overflow-hidden rounded-3xl border border-black">
        <img src={event.image} className="w-full" alt={event.title} />
        <div className="px-4 py-3">
          <p className="font-semibold uppercase text-3xl text-accent py-2">{event.title}</p>
          <p className="text-lg">{event.description}</p>
        </div>
      </div>
    </>
  );
}
