'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'

const product = {
  name: 'Magnetic 2-in-1 Wireless Powerbank',
  price: 'S$88',
  href: '#',
  images: [
    {
      src: '/images/D1.png',
      alt: '',
    },
    {
      src: '/images/D4.png',
      alt: '',
    },
    {
      src: '/images/D3.png',
      alt: '',
    },
    {
      src: '/images/D2.png',
      alt: '',
    },
  ],
  colors: [
    // { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Silver', class: 'bg-gray-100', selectedClass: 'ring-gray-200' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    { name: 'Blue', class: 'bg-blue-900', selectedClass: 'ring-blue-900' },
  ],

  description:
  'Product Code: EQ-PP01',
  highlights: [
    'Compact and portable design',
    'Allowed to bring on cabin baggage',
    'Strong magnetic adsorption',
    'Fast charging',
    'LED battery indicator light',
    '2-in-1 wired and wireless charging',
    'Type-C input & output',
  ],
  details: [
    'Dimension: 100.9*66.5*10mm',
    'Magnetic Wireless Output: 15W (Max)',
    'Type-C Input: 5V-3A/9V-2A',
    'Type-C Output: 5V-3A/9V-2.22A/12V-1.67A 20W (Max)',
    'Total output: 15W (Max)',
    'Capacity: 5000mAh/18.5Wh',
    'N.W: 118g',
    'Casing: Aluminum alloy shell + silicone',
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function A603() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <>
    <Navbar />
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Link href="/">
 Back to Products</Link>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

           

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Please Contact Us 
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-md">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Specifications</h2>

              <div className="mt-4 space-y-6">
                {/* <p className="text-sm text-gray-600">{product.details}</p> */}
                <ul role="list" className="list-disc space-y-2 pl-4 text-md">
                  {product.details.map((details) => (
                    <li key={details} className="text-gray-400">
                      <span className="text-gray-600">{details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
