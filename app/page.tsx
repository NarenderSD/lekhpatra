import Link from "next/link"
import InvoiceGenerator from "@/components/invoice-generator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="container mx-auto py-6 sm:py-10 px-4">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Invoice Generator Pro – LekhPatra</h1> {/* Updated title */}
        <ThemeToggle />
      </div>
      <InvoiceGenerator />
      <footer className="mt-8 sm:mt-10 text-center text-muted-foreground text-sm pb-4">
        <p>
          Build By{" "}
          <Link
            href="https://www.linkedin.com/in/narendersingh1/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-foreground transition-colors"
          >
            Narender Singh
          </Link>
          .
        </p>
      </footer>
    </main>
  )
}
