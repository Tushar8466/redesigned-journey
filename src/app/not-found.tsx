import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 w-full h-full bg-black mask-[radial-gradient(transparent,white)] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center p-4">
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-linear-to-b from-neutral-50 to-neutral-400 opacity-50">
                    404
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold mt-4">Page Not Found</h2>
                <p className="text-neutral-400 mt-4 max-w-lg text-lg">
                    Oops! The page you are looking for does not exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
