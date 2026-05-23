import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/brand/logo-white.png"
              alt="OYT — Outsource Your Tasks"
              width={717}
              height={260}
              unoptimized
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Boutique global staffing for growing companies. We source offshore,
              nearshore, and US local talent and back every hire with a
              12-month replacement warranty.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Pricing", href: "/pricing" },
                { label: "Reviews", href: "/reviews" },
                { label: "Case Studies", href: "/case-studies" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#ef60a3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "/blog" },
                { label: "Featured VAs", href: "/featured-vas" },
                { label: "Scaling ROI", href: "/scaling-roi" },
                { label: "DIY Course", href: "https://howtohirecourse.outsourceyourtasks.com", external: true },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className="text-sm text-gray-400 hover:text-[#ef60a3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Connect</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Contact Us", href: "/contact-us" },
                { label: "Jobs", href: "/jobs" },
                { label: "Apply Now", href: "/apply-now" },
                { label: "Preferred Partners", href: "/our-preferred-partners" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#ef60a3] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Outsource Your Tasks. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-[#ef60a3] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-sm text-gray-500 hover:text-[#ef60a3] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
