import { Button, Alert } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavigationBar() {
  const [isLogout, setIsLogout] = useState(false);
  const router = useRouter();
  const publicURL = process.env.NEXT_PUBLIC_API_URL;
  const handleLogout = async () => {
    const response = await axios.post(`${publicURL}/logout`);
    if (response.status === 200) {
      setIsLogout(true);
      localStorage.removeItem("token");
      setTimeout(() => {
        router.push("/home");
      }, 3000);
    }
  };

  return (
    <div>
      {isLogout && (
        <div className="fixed w-2/5 left-120 z-1000">
          <Alert
            message="Akun Berhasil Keluar"
            description="Anda akan diarahkan ke halaman home..."
            type="success"
            showIcon
          />
        </div>
      )}
      <div className="fixed left-0 right-0 top-0 bg-[#e9f5db] shadow-lg p-3 z-998">
        <nav className="flex h-[8vh] justify-between items-center mx-2">
          <h1 className="text-3xl link font-bold">TemuDataku</h1>
          <Button
            className="w-[77px] mb-2"
            type="primary"
            onClick={handleLogout}
          >
            Keluar
          </Button>
        </nav>
      </div>
    </div>
  );
}
