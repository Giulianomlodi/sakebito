import Link from "next/link";

export default function Page2() {
    return (
        <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
            <header className="mb-12">
                <nav>
                    <Link href="/" className="text-blue-500 hover:underline">← Back to Home</Link>
                </nav>
            </header>

            <main>
                <h1 className="text-3xl font-bold mb-4">Page 2</h1>
                <p className="text-lg mb-4">This is the content of Page 2.</p>
            </main>
        </div>
    );
}