
const products = [
    {
      id: 1,
      name: 'Ultrasonic Car Aroma Scents Diffuser',
      href: '/A807',
      price: '$48',
      imageSrc: '/images/A807.png',
      imageAlt: '',
    },
    {
      id: 2,
      name: 'Waterless Aroma Scents Diffuser',
      href: '/A603',
      price: '$35',
      imageSrc: '/images/A603.png',
      imageAlt: '',
    },
    {
      id: 3,
      name: 'Aroma Scents Diffuser',
      href: '/A313',
      price: '$89',
      imageSrc: '/images/A313.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Magnetic 2-in-1 Wireless Powerbank  ',
      href: 'EQ-PP01',
      price: '$35',
      imageSrc: '/images/EQ-PP01.png',
      imageAlt: '',
    },
    {
      id: 5,
      name: 'Multi-Purpose Vacuuum Cleaner',
      href: 'EQ-P03',
      price: '$35',
      imageSrc: '/images/EQ-P03.png',
      imageAlt: '',
    },
    {
      id: 6,
      name: 'Magnetic Phone Holder with Wireless Fast-Charging and Cooling Tech',
      href: 'EQ-10CS',
      price: '$35',
      imageSrc: '/images/EQ-10CS.png',
      imageAlt: '',
    },
    {
      id: 7,
      name: 'Magnetic Phone Holder with Wireless Fast-Charging and Cooling Tech',
      href: '/EQ-20CS',
      price: '$35',
      imageSrc: '/images/EQ-20CS.png',
      imageAlt: '',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white/[.2] mt-20">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  