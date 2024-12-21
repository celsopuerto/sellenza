"use client"

import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from 'lucide-react';

interface RegisterFormProps {
  className?: string;
  onSubmit: (email: string, password: string) => void;
  loading: boolean;
}

export function RegisterForm({
  className,
  onSubmit,
  loading,
}: RegisterFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!email && !password) {
      toast.error('Please fill in all fields.');
      return;
    } else if(!email) {
      toast.error('Enter your email.');
      return;
    } else if(!password) {
      toast.error('Enter your password.');
      return;
    }

    onSubmit(email, password);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <Image src="/sellenza-logo.png" alt="sellenza" width={40} height={40} className="border-[1px] border-zinc-800 rounded-lg" />
              </div>
              <span className="sr-only">Sellenza</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Sellenza</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" /> {/* Spinner animation */}
                <p>Please wait</p> {/* Loading text */}
              </div>
            ) : (
              'Register'
            )}
            </Button>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/login" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

