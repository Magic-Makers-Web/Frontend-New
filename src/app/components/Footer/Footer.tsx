import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="p-8 bg-accent text-white">
        <div className="grid grid-cols-2">
          <div>
            <span className="text-4xl font-semibold">Lets Make it Happen!</span>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto veniam quae itaque eum nobis! Labore similique vero eum
              nemo, perferendis porro consequuntur omnis consectetur alias
              dolore a necessitatibus, quae suscipit.
            </p>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div>
            <p className="text-3xl font-semibold">Contact Us at</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <img src="https://picsum.photos/30" alt="" />
                <Link href={""}>thomasjames@gmail.com</Link>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://picsum.photos/30" alt="" />
                <Link href={""}>thomasjames@gmail.com</Link>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://picsum.photos/30" alt="" />
                <Link href={""}>thomasjames@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Copyright © 2025 | Thomas S James</p>
        </div>
      </footer>
    </>
  );
}
