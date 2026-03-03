import { motion } from "framer-motion";

export function CounterCard({ count, onIncrement }: { count: number; onIncrement: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/20 dark:bg-gray-800/20 p-6 rounded-2xl backdrop-blur-sm border border-gray-200/10"
    >
      <h3 className="text-lg font-medium mb-2">Counter</h3>
      <p className="text-3xl font-bold mb-4">{count}</p>
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={onIncrement}
        className="w-full py-2 bg-blue-600 text-white rounded-full"
      >
        Increment
      </motion.button>
    </motion.div>
  );
}