"use client"

import { useRouter } from 'next/navigation';
import { RegisterForm } from "@/components/register-form"
import { auth, db } from '@/firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (email: string, password: string) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
      })

      if (user) {
        toast.success('Registration successful!');
        router.push('/login');
      }
    } catch (error) {
      toast.success('Registration failed!');
      console.log("Error: ",error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col mt-16 items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-md dark:bg-zinc-950 bg-zinc-100 rounded-xl p-8 border-[1px] border-zinc-300 dark:border-zinc-800">
        <RegisterForm onSubmit={handleRegister} loading={loading}/>
      </div>
    </div>
  )
}