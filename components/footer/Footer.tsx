import Link from "next/link";
import { LanguageSelector } from "@/components/navbar/LanguageSelector";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-16 bg-black text-gray-400">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-6">
          <p className="text-base">
            Questions? Call <Link href="tel:0801-000-723" className="underline hover:text-white">0801-000-723</Link>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 mb-8">
          {FOOTER_LINKS.map((link, index) => (
            <div key={index}>
              <Link href={link.href} className="text-sm hover:underline hover:text-white">
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="mb-6 max-w-[140px]">
          <LanguageSelector />
        </div>

        <div className="text-sm">
          <p>Netflix Clone</p>
        </div>
      </div>
    </footer>
  );
}