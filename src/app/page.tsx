'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/boxes');
  }, [router]);
  
  return <div>Cargando...</div>;
}
