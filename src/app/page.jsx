'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { LevelCalculator } from '@/components/level-calculator'
import { CardUpgradeCalculator } from '@/components/card-upgrade-calculator'


export default function Home() {
  const [showLevelModal, setShowLevelModal] = useState(false)
  const [showCardModal, setShowCardModal] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    (<main
      className="flex min-h-screen flex-col items-center justify-center p-8 bg-black">
      <motion.h1
        className="text-4xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        The Ragnarok Calculator
      </motion.h1>
      <motion.div
        className="flex flex-col md:flex-row gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={cardVariants} whileHover="hover" whileTap="tap">
          <Card
            className="w-64 h-64 cursor-pointer bg-white/10 backdrop-blur-lg border-white/20"
            onClick={() => setShowLevelModal(true)}>
            <CardContent className="flex items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-center text-white">คำนวณเลเวลถัดไป</h2>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={cardVariants} whileHover="hover" whileTap="tap">
          <Card
            className="w-64 h-64 cursor-pointer bg-white/10 backdrop-blur-lg border-white/20"
            onClick={() => setShowCardModal(true)}>
            <CardContent className="flex items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-center text-white">ตารางการอัพการ์ด</h2>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      <LevelCalculator isOpen={showLevelModal} onClose={() => setShowLevelModal(false)} />
      <CardUpgradeCalculator isOpen={showCardModal} onClose={() => setShowCardModal(false)} />
    </main>)
  );
}

