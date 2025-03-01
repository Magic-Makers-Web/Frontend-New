import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="z-10 p-4 absolute top-0 left-0 w-full flex justify-between">
        <div>
          <img src="/logo.svg" className="w-[160px]" alt="" />
        </div>
        <div className="text-white text-lg flex gap-8">
          <Link href={"/events"}>Events</Link>
          <Link href={"/artists"}>Artists</Link>
          <Link href={"/reviews"}>Reviews</Link>
          <Link href={"/team"}>Meet the Team</Link>
        </div>
      </nav>
    </>
  );
}
