"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form, Input, Alert } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleFilled,
  EyeFilled,
} from "@ant-design/icons";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasSubmit, setHasSubmitted] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();
  const publicURL = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (values) => {
    setIsLoading(true);
    const response = await axios.post(`${publicURL}/register`, values);
    if (response.status === 200) {
      setIsLoading(false);
      setIsSuccess(true);
      setHasSubmitted(true);
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } else if (response.status === 401) {
      setIsSuccess(false);
      setHasSubmitted(true);
    }
  };
  return (
    <>
      {hasSubmit && isSuccess && (
        <Alert
          message="Pendaftaran berhasil!"
          description="Anda akan diarahkan ke halaman login..."
          type="success"
          showIcon
          closable
          className="absolute w-2/5 top-0 left-120 z-30"
        />
      )}
      {hasSubmit && !isSuccess && (
        <Alert
          message="Pendaftaran gagal!"
          description="Nama pengguna sudah ada yang punya "
          type="error"
          showIcon
          closable
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-2/5 "
        />
      )}
      <div className="flex flex-col justify-center items-center w-full h-screen space-y-4">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-bold">Daftar</h1>
          <p>Sebelum pilih-pilih produk, daftar akun dulu yuk!</p>
        </div>
        <Form
          className="flex flex-col items-center w-1/2"
          onFinish={handleSubmit}
          form={form}
          id="form-register"
          validateMessages={{
            required: "*This field must be filled",
          }}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              { required: true },
              {
                pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{5,20}$/,
                message: "*Username must contain letters and numbers",
              },
            ]}
            className="w-3/4"
          >
            <Input
              placeholder="Username"
              prefix={<UserOutlined className="mr-3" />}
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true }]}
            className="w-3/4"
          >
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined className="mr-3" />}
              iconRender={(visible) => {
                return !visible ? <EyeInvisibleFilled /> : <EyeFilled />;
              }}
              autoComplete="off"
            />
          </Form.Item>
          <Button
            className="w-1/4 mb-2"
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            Daftar
          </Button>
          <p>
            Sudah punya akun? <Link href="/login">Masuk Yuk!</Link>
          </p>
        </Form>
      </div>
    </>
  );
}
