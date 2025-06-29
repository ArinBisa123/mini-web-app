"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import NavigationBar from "@/app/catalogue/Components/NavigationBar";
import { Alert } from "antd";
import products from "./Data/products";
import MentoringCard from "./Components/MentoringCard";
import PracticeCard from "./Components/PracticeCard";
import BootcampCard from "./Components/BootcampCard";

export default function Catalogue() {
  const [user, setUser] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const publicURL = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
          return;
        }

        const response = await axios.get(`${publicURL}/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setLoginSuccess(true);
          setUser(response.data.user.username);
          setTimeout(() => {
            setLoginSuccess(false);
          }, 3000);
        }
      } catch (error) {
        console.error("Token invalid:", error);
        router.push("/login");
      }
    };
    verifyToken();
  }, []);

  return (
    <>
      {loginSuccess && (
        <div className="fixed w-2/5 top-0 left-120 z-999">
          <Alert
            message="Anda Berhasil Masuk"
            description="Selamat datang..."
            type="success"
            showIcon
          />
        </div>
      )}
      <header>
        <NavigationBar />
      </header>
      <main className="z-0">
        <section className="flex h-[80vh] items-center justify-center bg-gradient-to-r from-emerald-100 to-teal-200">
          <article className="w-4/5 py-8 space-y-8">
            <h1 className="text-3xl tracking-wide">
              Halo, {user}... silahkan pilih program kami yang kamu butuhkan yaa
            </h1>
          </article>
        </section>
        <section className="flex min-h-[50vh] space items-center justify-center">
          <article className="w-3/4 py-8 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">Mentoring</h2>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-2xl ">Apa yang akan kamu dapatkan?</h3>
              <span className="text-center">
                Kamu akan mendapatkan sesi mentoring yang kamu mau dengan
                permasalahan yang kamu alami saat ini. Kamu dapat mengajukan
                mentoring untuk bidang Data Analyst, Data Scientist, dan Machine
                Learning Enginer.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              {products
                .filter((p) => p.category === "Mentoring")
                .map((product) => (
                  <MentoringCard key={product.id} product={product} />
                ))}
            </div>
          </article>
        </section>
        <section className="flex min-h-[60vh] items-center justify-center">
          <article className="w-3/4 py-8 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">Practice</h2>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-2xl ">Apa yang akan kamu dapatkan?</h3>
              <span className="text-center">
                Pada practice ini kamu akan mendapatkan pengalaman praktik
                mengolah data secara langsung dengan beragam studi kasus dan
                data yang disediakan
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              {products
                .filter((p) => p.category === "Practice")
                .map((product) => (
                  <PracticeCard key={product.id} product={product} />
                ))}
            </div>
          </article>
        </section>
        <section className="flex min-h-[90vh] items-center justify-center">
          <article className="w-3/4 py-8 space-y-12">
            <div className="mx-auto w-fit space-y-4 border-b-2 border-gray-300 px-4 pb-4">
              <h2 className="text-center text-3xl tracking-wide">Bootcamp</h2>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-2xl ">Apa yang akan kamu dapatkan?</h3>
              <span className="text-center">
                Kamu akan mendapatkan kurikulum yang berbasis industri dan tidak
                hanya teori saja, kamu juga akan mendapatkan seluruh akses
                materi dan akses rekaman selama kelas bootcamp. Tidak hanya itu
                untuk menunjang karir kamu kami siapkan juga proyek untuk
                portofolio dan career bulding diakhir pertemuan. Setelah selesai
                bootcamp pun kamu masih bisa menambah relasi dan pengetahuan
                dengan bergabung TemuDataku Community dan akses course/layanan
                premium khusus community.
              </span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              {products
                .filter((p) => p.category === "Bootcamp")
                .map((product) => (
                  <BootcampCard key={product.id} product={product} />
                ))}
            </div>
          </article>
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
