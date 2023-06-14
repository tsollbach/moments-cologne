import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-left-top bg-no-repeat bg-landing-mobile lg:bg-landing lg:bg-right-top">
     <div className="relative flex place-items-center">
        <Image
          className="relative"
          src="/logo.svg"
          alt="Next.js Logo"
          width={800}
          height={161}
          priority
        />
      </div>
    </main>
  )
}
