'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="inset-x-0 top-0 lg:p-6 mb-14">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Equinox-sg</span>
              <Image
                className="lg:h-9 lg:w-auto sm:h-4"
                src="equinox-sg-logo.svg"
                width='160'
                height='0'
                alt="Equinox-sg Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
          <Link
                href='/'
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Home
                </Link>
             <Link
                href='/feature'
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Features
                </Link>
             <Link
                href='/contact'
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Contact
                </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <span className="text-slate-500 text-[9px] self-center p-2">Powered By</span>
              <span className="sr-only">united-automobile-logo</span>
          <a href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-8 w-auto"
                src="united-automobile-logo.svg"
                width='120'
                height='20'
                alt="United Automobile Logo"
              />
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Equinox-sg</span>
              <Image
                className="h-6 w-auto"
                src="equinox-sg-logo.svg"
                width='145'
                height='34'
                alt="Equinox-sg Logo"
              />
            </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
             <Link
                href='/'
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Home
                </Link>
             <Link
                href='/feature'
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Features
                </Link>
             <Link
                href='/contact'
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >Contact
                </Link>
                  
                </div>
                <div className="py-6"> 
                <span className="text-slate-500 text-[9px] self-center p-2">Powered By</span>
                <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Equinox-sg</span>
              <Image
                className="h-8 w-auto"
                src="united-automobile-logo.svg"
                width='145'
                height='34'
                alt="Equinox-sg Logo"
              />
            </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#cccccc] to-[#9a9a9a] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 90.1%)',
            }}
          />
        </div>
      </header>

      {/* section */}

      
    </>
  )
}
