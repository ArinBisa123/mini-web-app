"use client";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 bg-[#e9f5db] shadow-lg p-3 z-999">
        <nav className="flex h-[8vh] justify-between items-center mx-2">
          <Link href="/home" className="text-3xl link font-bold">
            TemuDataku
          </Link>
          <ol className="hover:!text-[#98c9a3] hover:font-semibold">
            <Link href="/login">Masuk</Link>
          </ol>
        </nav>
      </div>
    </>
  );
}
