import { motion } from 'framer-motion'
import { useAppStore } from '@/store/useAppStore'

export function CaptainMascot() {
  const teacherMode = useAppStore((state) => state.teacherMode)

  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-6xl"
      >
        ⛵
      </motion.div>

      {teacherMode === 'gentil' && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 text-2xl"
        >
          💙
        </motion.div>
      )}

      {teacherMode === 'exigeant' && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 text-2xl"
        >
          💪
        </motion.div>
      )}
    </motion.div>
  )
}
