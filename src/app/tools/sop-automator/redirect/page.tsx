"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { MainLayout } from "@/components/layout/main-layout"
import { Heading, Text } from "@/components/ui/typography"
import { motion } from "framer-motion"
import { Settings, ArrowRight } from "lucide-react"

export default function SopAutomatorRedirectPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the new Service Quiz with operations focus
    const timer = setTimeout(() => {
      router.push('/tools/business-audit?department=operations')
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [router])
  
  return (
    <MainLayout hideFooter>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-100">
        <div className="text-center space-y-6 max-w-md mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <Heading level="1" className="text-2xl text-orange-900 mb-4">
              Launching SOP Analysis
            </Heading>
            <Text className="text-orange-700">
              Taking you to our operations-focused automation quiz...
            </Text>
          </motion.div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-4 border-orange-600 border-t-transparent rounded-full mx-auto"
          />
        </div>
      </div>
    </MainLayout>
  )
}
