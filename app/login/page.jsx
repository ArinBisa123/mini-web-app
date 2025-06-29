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

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();
  const publicURL = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${publicURL}/login`, values);
      const token = response.data.token;

      if (response.status === 200) {
        localStorage.setItem("token", token);
        router.push("/catalogue");
      }
    } catch (error) {
      setIsLoading(false);
      if (error.response?.status === 401) {
        form.setFields([
          {
            name: "username",
            errors: ["*username doesn’t match our record"],
          },
          {
            name: "password",
            errors: ["*password doesn’t match our record"],
          },
        ]);
      } else {
        console.error("Login failed:", error);
      }
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen space-y-4">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-bold">Halo!</h1>
          <p>Sebelum pilih-pilih produk, masuk dulu yuk!</p>
        </div>
        <Form
          className="flex flex-col items-center w-1/2"
          onFinish={handleSubmit}
          form={form}
          id="form-login"
          validateMessages={{
            required: "*This field must be filled",
          }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true }]}
            className="w-3/4"
          >
            <Input
              placeholder="Username"
              prefix={<UserOutlined className="mr-3" />}
              autoComplete="username"
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
              iconRender={(visible) =>
                visible ? <EyeInvisibleFilled /> : <EyeFilled />
              }
              autoComplete="password"
            />
          </Form.Item>
          <Button
            className="w-1/4 mb-2"
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            Masuk
          </Button>
          <p>
            Belum punya akun? <Link href="/register">Daftar Yuk!</Link>
          </p>
        </Form>
      </div>
    </>
  );
}
