import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h1 className="text-9xl">404</h1>
      <h2 className="text-3xl">Page Not Found</h2>
      <Link href="/" className="bg-blue-700 text-white p-3">
        Back To Home
      </Link>
    </div>
  );
}
