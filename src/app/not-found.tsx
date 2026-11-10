import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF8F1] text-[#22201F] px-4 text-center">
      <h1 className="text-6xl font-extrabold text-[#B87320] mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-3">Page Not Found</h2>
      <p className="text-[#554F49] max-w-md mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-[#D7A257] via-[#B87320] to-[#8F520E] hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  );
}
