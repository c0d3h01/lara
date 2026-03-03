import { WalletModal } from "../components/WalletModal";
import { CounterCard } from "../components/CounterCard";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Lara</h1>
        <div className="flex justify-center">
          <WalletModal />
        </div>
        <CounterCard count={count} onIncrement={increment} />
      </div>
    </div>
  );
}