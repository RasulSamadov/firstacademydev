import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  Menu as MenuIcon,
  Search,
  X,
  ArrowRight,
} from "lucide-react";
import PropTypes from "prop-types";
import clsx from "clsx";

const languages = ["EN", "AZ", "RU"];

export default function Header({ logoSrc }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const MenuList = (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-base font-medium">
      <li><a href="#" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">About Us</a></li>
      <li><a href="#" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Courses</a></li>
      <li><a href="#" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Corporate Training</a></li>
      <li><a href="#" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Projects</a></li>
      <li><a href="#" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Career Center</a></li>
      <li><a href="#" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Resources</a></li>
      <li><a href="#" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Partners</a></li>
      <li><a href="#" className="hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">News</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md">
      <div className="hidden lg:flex flex-col divide-y divide-gray-200">
        {/* Utility Bar */}
        <div className="h-14 flex justify-between items-center px-6 text-[14px]">
          <div className="flex items-center gap-4">
            <img src={logoSrc} alt="First Academy" className="h-10" />
            <div className="flex items-center gap-2 text-blue-700">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+994502906121" className="flex items-center gap-1 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"><Phone size={18} aria-hidden="true" />(+994) 50 290 61 21</a>
            <a href="mailto:info@firstacademy.org" className="flex items-center gap-1 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"><Mail size={18} aria-hidden="true" />info@firstacademy.org</a>
            <Listbox value={language} onChange={setLanguage} as="div" className="relative">
              <Listbox.Button className="px-2 py-1 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                {language}
              </Listbox.Button>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Listbox.Options className="absolute mt-1 right-0 w-20 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none text-sm z-10">
                  {languages.map((lang) => (
                    <Listbox.Option key={lang} value={lang} className={({ active }) => clsx('cursor-pointer px-3 py-1', active && 'bg-gray-100') }>
                      {lang}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
          </div>
        </div>
        {/* Primary Navigation */}
        <div className="h-16 flex justify-between items-center px-6">
          {MenuList}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <Search size={22} />
            </button>
            <button className="bg-[#FF6633] hover:bg-[#e6562a] text-white rounded-full px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600">Apply Now</button>
          </div>
        </div>
      </div>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between h-[60px] px-4">
        <img src={logoSrc} alt="First Academy" className="h-8" />
        <div className="flex items-center gap-3">
          <button aria-label="Open menu" onClick={toggleDrawer} className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <MenuIcon size={24} />
          </button>
          <button aria-label="Apply now" className="p-2 bg-[#FF6633] hover:bg-[#e6562a] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      <div className={clsx('fixed inset-0 bg-black/50 z-40 transition-opacity', mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')} onClick={toggleDrawer} />
      <nav
        className={clsx('fixed top-0 left-0 h-full bg-white w-[80vw] max-w-sm z-50 transform transition-transform', mobileOpen ? 'translate-x-0' : '-translate-x-full')}
        aria-label="Mobile menu"
      >
        <div className="h-[60px] flex items-center justify-between px-4 border-b border-gray-200">
          <img src={logoSrc} alt="First Academy" className="h-8" />
          <button aria-label="Close menu" onClick={toggleDrawer} className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {MenuList}
          <div className="flex flex-col gap-2 text-[14px]">
            <a href="tel:+994502906121" className="flex items-center gap-2 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"><Phone size={18} />(+994) 50 290 61 21</a>
            <a href="mailto:info@firstacademy.org" className="flex items-center gap-2 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"><Mail size={18} />info@firstacademy.org</a>
            <div className="flex gap-2 text-blue-700">
              <a href="#" aria-label="Facebook" className="focus:outline-none focus:ring-2 focus:ring-blue-600"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="focus:outline-none focus:ring-2 focus:ring-blue-600"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="focus:outline-none focus:ring-2 focus:ring-blue-600"><Linkedin size={20} /></a>
              <a href="#" aria-label="YouTube" className="focus:outline-none focus:ring-2 focus:ring-blue-600"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 w-full px-4">
          <button className="w-full bg-[#FF6633] hover:bg-[#e6562a] text-white rounded-full px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600">Apply Now</button>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
};

