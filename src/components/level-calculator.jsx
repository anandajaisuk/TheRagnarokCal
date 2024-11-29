'use client';
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function LevelCalculator({
  isOpen,
  onClose
}) {
  const [nextLevelExp, setNextLevelExp] = useState('')
  const [currentExp, setCurrentExp] = useState('')
  const [monsterExp, setMonsterExp] = useState('')
  const [monstersPerTenSec, setMonstersPerTenSec] = useState('')
  const [result, setResult] = useState('')

  const calculateTime = () => {
    const expNeeded = parseInt(nextLevelExp) - parseInt(currentExp)
    const monstersPerMin = parseInt(monstersPerTenSec) * 6
    const expPerMinute = parseInt(monsterExp) * monstersPerMin
    const totalMinutes = Math.ceil(expNeeded / expPerMinute)
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    setResult(`ต้องใช้เวลาประมาณ ${hours} ชั่วโมง ${minutes} นาที`)
  }

  return (
    (<AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[400px] bg-black text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-white">คำนวณเลเวลถัดไป</DialogTitle>
            </DialogHeader>
            <motion.div
              className="flex flex-col items-center gap-6 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}>
              <div className="flex flex-col items-center gap-2 w-full">
                <Label htmlFor="nextLevelExp" className="text-white">
                  EXP เลเวลถัดไป (ดูจากโปรไฟล์ในเกมซ้ายบน)
                </Label>
                <Input
                  id="nextLevelExp"
                  value={nextLevelExp}
                  onChange={(e) => setNextLevelExp(e.target.value)}
                  className="w-64 bg-white/10 text-white placeholder-white/50" />
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <Label htmlFor="currentExp" className="text-white">
                  EXP ปัจจุบัน (ดูจากโปรไฟล์ในเกมซ้ายบน)
                </Label>
                <Input
                  id="currentExp"
                  value={currentExp}
                  onChange={(e) => setCurrentExp(e.target.value)}
                  className="w-64 bg-white/10 text-white placeholder-white/50" />
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <Label htmlFor="monsterExp" className="text-white">
                  EXP ต่อมอนสเตอร์
                </Label>
                <Input
                  id="monsterExp"
                  value={monsterExp}
                  onChange={(e) => setMonsterExp(e.target.value)}
                  className="w-64 bg-white/10 text-white placeholder-white/50" />
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <Label htmlFor="monstersPerTenSec" className="text-white">
                  มอนสเตอร์ต่อ 10 วินาที (10 วิฆ่าได้กี่ตัว)
                </Label>
                <Input
                  id="monstersPerTenSec"
                  value={monstersPerTenSec}
                  onChange={(e) => setMonstersPerTenSec(e.target.value)}
                  className="w-64 bg-white/10 text-white placeholder-white/50" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}>
              <Button
                onClick={calculateTime}
                className="w-full bg-white text-black hover:bg-white/90">คำนวณ</Button>
            </motion.div>
            <AnimatePresence>
              {result && (
                <motion.p
                  className="mt-4 text-center font-bold text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}>
                  {result}
                </motion.p>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>)
  );
}