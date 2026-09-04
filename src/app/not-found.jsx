import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-serif text-charcoal font-bold mb-4">404</h1>
      <p className="text-xl text-charcoal/70 mb-8">
        Oops! The article or page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-sage text-white px-6 py-3 rounded-full hover:bg-sage/90 transition-colors font-medium text-sm"
      >
        Return to Home
      </Link>
    </div>
  );
}
