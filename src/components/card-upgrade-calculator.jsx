'use client';
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const cardData = {
  1: { 'การ์ดตัวมันเอง': 2, 'การ์ดขยะ': 2 },
  2: { 'การ์ดตัวมันเอง': 4, 'การ์ดขยะ': 8 },
  3: { 'การ์ดตัวมันเอง': 8, 'การ์ดขยะ': 18 },
  4: { 'การ์ดตัวมันเอง': 16, 'การ์ดขยะ': 32 },
  5: { 'การ์ดตัวมันเอง': 32, 'การ์ดขยะ': 50 },
  6: { 'การ์ดตัวมันเอง': 64, 'การ์ดขยะ': 72 },
  7: { 'การ์ดตัวมันเอง': 128, 'การ์ดขยะ': 98 },
}

export function CardUpgradeCalculator({
  isOpen,
  onClose
}) {
  return (
    (<AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[600px] max-h-[80vh] bg-black text-white overflow-y-scroll">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-white">ตารางการอัพการ์ด</DialogTitle>
              <motion.img
                src='LunaticCard.webp'
                className='w-[40%] mx-auto pt-4'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </DialogHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] text-white">ระดับดาว</TableHead>
                    <TableHead className="text-white">การ์ดตัวมันเอง (ไม่มีดาว)</TableHead>
                    <TableHead className="text-white">การ์ดขยะ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(cardData).map(([star, data], index) => (
                    <motion.tr
                      key={star}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}>
                      <TableCell className="font-medium text-white">{star}</TableCell>
                      <TableCell className="text-white">{data['การ์ดตัวมันเอง']}</TableCell>
                      <TableCell className="text-white">{data['การ์ดขยะ']}</TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>)
  );
}

