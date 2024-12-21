"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LoginForm } from "@/components/login-form"
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        toast.success("Login successful!");
        router.push("/");
      }
    } catch (error) {
      toast.error("Invalid Credentials!");
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col mt-16 items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-md dark:bg-zinc-950 bg-zinc-100 rounded-xl p-8 border-[1px] border-zinc-300 dark:border-zinc-800">
        <LoginForm onSubmit={handleLogin} loading={loading}/>
      </div>
    </div>
  )
}