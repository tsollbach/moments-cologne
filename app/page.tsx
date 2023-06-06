import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-landing">
     <div className="relative flex place-items-center">
        <Image
          className="relative"
          src="/logo.svg"
          alt="Next.js Logo"
          width={600}
          height={161}
          priority
        />
      </div>
    </main>
  )
}
