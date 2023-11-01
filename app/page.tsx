import {
  Baby,
  CircleDollarSign,
  FileSignature,
  Medal,
  PersonStanding,
} from "lucide-react";

export default function Home() {
  return (
    <main className="w-full py-12 flex-grow">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-500">
                Welcome to FMDB
              </h1>
              <p className="max-w-[600px] text-blue-950 md:text-2xl dark:text-zinc-100 mx-auto">
                Your Ultimate Resource for Football Manager Data
              </p>
            </div>
            <div className="w-full max-w-full space-y-4 mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col items-center space-y-1 border-gray-800 p-4 rounded-lg">
                  <Medal size={40} />
                  <h2 className="text-xl font-bold text-black">Best players</h2>
                  <p className="text-blue-950 dark:text-zinc-100">
                    Explore elite talents that can elevate your team&apos;s
                    performance.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-1 border-gray-800 p-4 rounded-lg">
                  <Baby size={40} />
                  <h2 className="text-xl font-bold text-black">Wonderkids</h2>
                  <p className="text-blue-950 dark:text-zinc-100">
                    Unearth football&apos;s rising stars, the young talents with
                    exceptional potential.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-1 border-gray-800 p-4 rounded-lg">
                  <FileSignature size={40} />
                  <h2 className="text-xl font-bold text-black">Free agents</h2>
                  <p className="text-blue-950 dark:text-zinc-100">
                    Sign unattached talents and strengthen your squad with
                    players out of contract.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-1 border-gray-800 p-4 rounded-lg">
                  <CircleDollarSign size={40} />
                  <h2 className="text-xl font-bold text-black">Bargains</h2>
                  <p className="text-blue-950 dark:text-zinc-100">
                    Find hidden gems in the transfer market, offering
                    exceptional value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
