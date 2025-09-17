import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="grid items-center min-h-screen justify-center p-24">
      <div className="text-center">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-orange-600">404</h1>
          <h2>Page not found</h2>
        </div>
        <a className="underline" href="/home">
          Go to home
        </a>
      </div>
    </main>
  );
}
