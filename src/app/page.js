import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-100 bg-gradient-to-b from-zinc-50 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-100 lg:p-4 lg:dark:bg-zinc-200/10">
          Generating Cutting-Edge Poducts&nbsp;
          <code className="font-mono font-bold">equinox-sg.com</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/united-automobile-logo.svg"
              alt="United Automobile Logo"
              className="dark:invert"
              width={120}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[800px] before:w-[880px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-white before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-[340px] after:translate-x-1/3 after:bg-gradient-conic after:from-zinc-500 after:via-zinc-100 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/equinox-sg-logo.svg"
          alt="Equinox Sg Logo"
          width={382}
          height={37}
          priority
        />
      </div>

      <div className="mb-52 grid text-center lg:w-full lg:mb-0 lg:text-center mx-auto">

          <p className={`text-base opacity-80`}>
            Coming Soon...
          </p>
        
      </div>
    </main>
  )
}
