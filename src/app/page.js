import Image from "next/image";
import Moneybag from "./components/moneyBag";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
      <h1 className='text-4xl font-medium'>Money Bags</h1>
      <div className='border-t-4 border-[#4BC789] w-[210px]'></div>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Moneybag name={'Groceries'}/>
      </main>
    </div>
  );
}
