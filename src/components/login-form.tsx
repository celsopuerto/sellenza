"use client";
import { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LoginFormProps {
  className?: string;
  onSubmit: (email: string, password: string) => void;
  loading: boolean;
}

export function LoginForm({
  className,
  onSubmit,
  loading,
}: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!email && !password) {
      toast.error('Please fill in all fields.');
    } else if(!email) {
      toast.error('Enter your email.');
    } else if(!password) {
      toast.error('Enter your password.');
    }

    onSubmit(email, password)
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
                name="email"
                type="email"
                value={email}
                placeholder="m@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
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
              <a href="/register" className="underline underline-offset-4">
                Register
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

