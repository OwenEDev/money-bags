import Image from "next/image";
import Moneybag from "./components/moneyBag";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
      <h1 className='text-4xl font-medium'>Money Bags</h1>
      <div className='border-t-4 border-[#4BC789] w-[210px]'></div>
      </div>
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
        <Moneybag name={'Groceries'}/>
        <Moneybag name={'Entertainment'}></Moneybag>
        <div className="flex items-center justify-center content-center h-[250px] w-[200px]">
          <button className="border-2 hover:bg-[#82D9AD] font-medium px-1 rounded">Add Money bag</button>
        </div>
      </main>
    </div>
  );
}
