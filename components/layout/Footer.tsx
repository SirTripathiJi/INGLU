import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#1A0040] text-white py-20 px-4 md:px-6 border-t border-white/5">
            <div className="max-w-[1440px] mx-auto grid lg:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="space-y-6 lg:col-span-1">
                    <Link href="/" className="block">
                        <img
                            src="/inglu-logo.png"
                            alt="INGLU Logo"
                            className="h-16 w-auto object-contain brightness-0 invert"
                        />
                    </Link>
                    <p className="text-lg leading-relaxed text-[#E9B3FB]/80 font-medium max-w-xs">
                        INGLU Is One Of The Fastest Growing Global Youth Community
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-[#6F00FF]">Quick Links</h4>
                    <ul className="space-y-3">
                        {['Home', 'About', 'Careers', 'Shop', 'Blog', 'Contact', 'Support'].map(link => (
                            <li key={link}>
                                <Link
                                    href={link === 'Home' ? '/' : link === 'About' ? '/about-us' : '#'}
                                    className="text-sm font-medium text-[#E9B3FB]/70 hover:text-white transition-colors"
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal */}
                <div className="space-y-6">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-[#6F00FF]">Legal</h4>
                    <ul className="space-y-3">
                        {['Privacy Policy', 'Terms & Conditions', 'Disclaimer', 'FAQ'].map(link => (
                            <li key={link}>
                                <Link href="#" className="text-sm font-medium text-[#E9B3FB]/70 hover:text-white transition-colors">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-6">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-[#6F00FF]">Contact</h4>
                    <div className="space-y-3 text-sm text-[#E9B3FB]/70 font-medium">
                        <p className="hover:text-white transition-colors">info@ingluglobal.in</p>
                        <p className="hover:text-white transition-colors">+91 7827808413</p>
                        <p>82, Satya Niketan, First Floor,<br />New Delhi – 110021</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
