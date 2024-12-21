"use client"

import { useState, useEffect } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";

export function useAuth() {
  const [user, setUser] = useState<User | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      setUser(data || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
