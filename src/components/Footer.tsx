import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                <Image src="/logo.svg" alt="Jeżyk Buduje" width={80} height={80} className="invert brightness-200" />
              </div>
              <div>
                <span className="text-xl font-bold">Jeżyk Buduje</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Budowa, wykończenia pod klucz i sprzedaż domów gotowych do
              zamieszkania. Działamy z pasją od 1995 roku.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Szybkie linki</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/o-nas"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  O nas
                </Link>
              </li>
<li>
                <Link
                  href="/domy-na-sprzedaz"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Domy na sprzedaż
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nasze usługi</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Sprzedaż domów</li>
              <li className="text-gray-400 text-sm">Wykończenia pod klucz</li>
              <li className="text-gray-400 text-sm">Budowa domów</li>
              <li className="text-gray-400 text-sm">Doradztwo budowlane</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+48530222266"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +48 530-222-266
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:kontakt@jezykbuduje.pl"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  kontakt@jezykbuduje.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Jeżyk Buduje. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
