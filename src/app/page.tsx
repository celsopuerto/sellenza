import Image from 'next/image';
// Attendance
export default function Home() {
  return (
    <div className="flex flex-col items-center h-[40rem] space-y-6">
      <div className="w-full flex justify-center min-h-[31rem]">
        <div className="w-full grid grid-cols-3 gap-4 px-4 pt-2 ">
          {/* Large box on the left */}
          <div className="col-span-2 bg-background border-[1px] border-zinc-200 hover:border-zinc-500 dark:border-zinc-800 dark:hover:border-blue-600 text-primary p-6 rounded-lg">
            <h1 className="text-xl font-bold">Large Box</h1>
            <p>This is the large box on the left.</p>
          </div>

          {/* Two smaller boxes on the right */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-background border-[1px] border-zinc-200 hover:border-zinc-500 dark:border-zinc-800 dark:hover:border-blue-600 text-primary p-6 rounded-lg">
              <h2 className="text-lg text-primary font-semibold">Small Box 1</h2>
              <p>This is the first small box.</p>
            </div>
            <div className="bg-background border-[1px] border-zinc-200 hover:border-zinc-500 dark:border-zinc-800 dark:hover:border-blue-600 text-primary p-6 rounded-lg">
              <h2 className="text-lg font-semibold">Small Box 2</h2>
              <p>This is the second small box.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated product showcase */}
      <div className="relative w-full overflow-hidden min-h-[12rem]">
        <div className="flex animate-scroll" style={{ width: "fit-content" }}>
          {/* Product Images */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-[28rem] h-[12rem] bg-background border-[1px] border-zinc-200 hover:border-zinc-500 dark:border-zinc-800 dark:hover:border-blue-600 text-primary rounded-lg flex-shrink-0 mx-2"
              style={{
                backgroundImage: `url(/path-to-product-${i + 1}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          {/* Duplicate to ensure smooth scrolling */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`duplicate-${i}`}
              className="w-[28rem] h-[12rem] bg-background border-[1px] border-zinc-200 hover:border-zinc-500 dark:border-zinc-800 dark:hover:border-blue-600 text-primary rounded-lg flex-shrink-0 mx-2"
              style={{
                backgroundImage: `url(/path-to-product-${i + 1}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </div>

      <footer className="w-full text-primary pb-5">
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 container mx-auto px-6 md:px-12">
          {/* Footer Top: Navigation links */}
          <div className="grid grid-cols-2 md:grid-cols-7 gap-0 mb-6">
            {/* Customer Service Links */}
            <div className="flex items-center space-x-2">
              <Image src="/sellenza-logo.png" alt="sellenza" width={40} height={40} className="mr-2 border-[1px] border-zinc-800 rounded-lg"/>
              <h4 className="text-lg font-semibold">Sellenza</h4>
            </div>

            {/* Navigation Links */}
            <div className="space-y-5 text-sm">
              <ul className="space-y-4 dark:text-zinc-400">
                <li><a href="/home" className="hover:text-blue-500">Home</a></li>
                <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
                <li><a href="/terms" className="hover:text-blue-500">Terms & Conditions</a></li>
                <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-3">
            <div className="mt-2 text-sm space-x-4">
              <a className="text-sm">© 2023-2024 ACME, Inc. All rights reserved.</a>
              <a href="/terms" className="hover:text-blue-500">Terms & Conditions</a>
              <a href="/privacy" className="hover:text-blue-500">Privacy Policy</a>
              <a href="/shipping" className="hover:text-blue-500">Shipping & Returns</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
