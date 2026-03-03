import { Dialog } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

const wallets = [
  { name: "Phantom", icon: "👻" },
  { name: "Solflare", icon: "🔥" },
  { name: "Ledger", icon: "🔐" },
];

export function WalletModal() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:opacity-90 transition">
          Connect Wallet
        </button>
      </Dialog.Trigger>
      <Dialog.Content className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg w-80"
        >
          <h2 className="text-xl font-semibold mb-4">Connect Wallet</h2>
          <div className="grid grid-cols-2 gap-4">
            {wallets.map((wallet) => (
              <button
                key={wallet.name}
                className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <span className="text-2xl mb-2">{wallet.icon}</span>
                <span>{wallet.name}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </Dialog.Content>
    </Dialog>
  );
}