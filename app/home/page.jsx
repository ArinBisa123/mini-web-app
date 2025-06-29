import NavigationBar from "./Components/NavigationBar";
// import SkinTypeCard from "@/home/Components/SkinTypeCard";
// import Highlights from "./Components/Highlights";
// import UseInstructions from "./Components/UseInstructions";
import { Button } from "antd";
import { metadata } from "@/app/layout";

export default function Welcome() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main className="z-0">
        <section className="flex min-h-screen items-center justify-center bg-gradient-to-r from-emerald-100 to-teal-200">
          <article className="w-4/5 sm:w-2/3 lg:w-1/2 py-8 space-y-8">
            <h1 className="text-3xl font-caveat tracking-wide">
              <span className="font-caveat text-4xl font-bold">
                {metadata.title}{" "}
              </span>
              : {metadata.tagline}
            </h1>

            <div className="w-fit">
              <Button
                type="primary"
                size="large"
                className="!px-8 !py-6 !bg-[#77bfa3] hover:!bg-[#98c9a3]"
                href="/login"
              >
                Mulai Sekarang!
              </Button>
            </div>
          </article>
        </section>

        <section className="flex min-h-[80vh] items-center justify-center">
          <article className="w-3/4 py-8 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">
                <span className="font-caveat text-4xl font-bold">
                  Layanan TemuDataku{" "}
                </span>
              </h2>
            </div>
          </article>
        </section>
        <section className="flex min-h-[80vh] items-center justify-center">
          <article className="w-3/4 py-8 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">
                <span className="font-caveat text-4xl font-bold">
                  Tentang TemuDataku
                </span>
              </h2>
            </div>
            <p className="text-lg">
              <span className="font-caveat text-4xl font-bold">
                {metadata.title}{" "}
              </span>
              {metadata.description}
            </p>
          </article>
        </section>
        <section className="flex h-[30vh] flex-col items-center justify-center space-y-3 b-[# bg-gradient-to-r from-emerald-100 to-teal-200]">
          <div className="flex flex-col items-center">
            <h2>Bangun Portofolio dengan Data Science Practice</h2>
            <p>
              Tersedia berbagai macam studi kasus yang bisa kamu coba dan
              explore untuk membangun portofolio kamu
            </p>
          </div>
          <Button
            type="primary"
            size="large"
            className="!px-8 !py-6 !bg-[#77bfa3] hover:!bg-[#98c9a3]"
            href="/login"
          >
            Gabung Yuk!
          </Button>
        </section>
      </main>
      <footer className="flex h-[5vh] items-center justify-center !bg-[#77bfa3] text-gray-50">
        <span className="text-xs">
          &copy; 2025 TemuDataku by Arin. All rights reserved.
        </span>
      </footer>
    </>
  );
}
