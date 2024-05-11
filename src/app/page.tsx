import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: "Home",
  description: "Aplikasi untuk belajar next JS",
  authors: [{ name: "Muhammad Bilal" }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Home",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
    </main>
  );
}
