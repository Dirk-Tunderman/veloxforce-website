"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Text } from "@/components/ui/typography"
import { Users, TrendingUp, Clock, Calculator, Target } from "lucide-react"

interface TeamRole {
  id: string
  label: string
  hourlyRate: number
  description?: string
}

interface ServiceTeamEfficiencyBuilderProps {
  teamRoles: TeamRole[]
  value: Record<string, { enabled: boolean; count: number; hoursPerWeek?: number }>
  onChange: (value: Record<string, { enabled: boolean; count: number; hoursPerWeek?: number }>) => void
  realTimeCalculation?: boolean
  calculationMessage?: string
}

export function ServiceTeamEfficiencyBuilder({
  teamRoles,
  value,
  onChange,
  realTimeCalculation = false,
  calculationMessage
}: ServiceTeamEfficiencyBuilderProps) {
  const [teamData, setTeamData] = useState(value || {})

  useEffect(() => {
    onChange(teamData)
  }, [teamData, onChange])

  const handleRoleChange = (roleId: string, field: string, newValue: any) => {
    setTeamData(prev => ({
      ...prev,
      [roleId]: {
        ...prev[roleId],
        [field]: newValue
      }
    }))
  }

  const calculateTeamMetrics = () => {
    let totalMonthlyCost = 0
    let totalFTE = 0
    let teamSize = 0

    Object.entries(teamData).forEach(([roleId, data]) => {
      if (data.enabled) {
        const role = teamRoles.find(r => r.id === roleId)
        if (role) {
          const count = data.count || 1
          const hoursPerWeek = data.hoursPerWeek || 40
          const weeklyCost = count * hoursPerWeek * role.hourlyRate
          const monthlyCost = weeklyCost * 4.33 // 4.33 weeks per month

          totalMonthlyCost += monthlyCost
          totalFTE += (count * hoursPerWeek) / 40
          teamSize += count
        }
      }
    })

    const automationSavings = totalMonthlyCost * 0.6 // 60% potential savings
    const paybackPeriod = automationSavings > 0 ? Math.ceil(15000 / automationSavings) : 0

    return {
      totalMonthlyCost,
      totalFTE,
      teamSize,
      automationSavings,
      paybackPeriod
    }
  }

  const metrics = calculateTeamMetrics()
  const hasTeamMembers = Object.values(teamData).some(data => data.enabled)

  return (
    <div className="space-y-6">
      {/* Team Role Configuration */}
      <div className="space-y-4">
        {teamRoles.map((role) => {
          const roleData = teamData[role.id] || { enabled: false, count: 1, hoursPerWeek: 40 }
          
          return (
            <motion.div 
              key={role.id}
              className={`border-2 rounded-lg p-4 transition-all duration-200 ${
                roleData.enabled ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-gray-50'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: teamRoles.indexOf(role) * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    checked={roleData.enabled}
                    onCheckedChange={(checked) => 
                      handleRoleChange(role.id, 'enabled', checked)
                    }
                    className="mt-1"
                  />
                  <div>
                    <Label className="font-medium text-gray-800">{role.label}</Label>
                    {role.description && (
                      <Text className="text-sm text-gray-600 mt-1">{role.description}</Text>
                    )}
                    <Text className="text-xs text-blue-600 font-medium">
                      €{role.hourlyRate}/hour
                    </Text>
                  </div>
                </div>
              </div>
              
              {roleData.enabled && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                >
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Number of People</Label>
                    <Select
                      value={roleData.count?.toString() || '1'}
                      onValueChange={(value) =>
                        handleRoleChange(role.id, 'count', parseInt(value))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select count" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {role.label}{num > 1 ? 's' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 block">Hours per Week</Label>
                    <Select
                      value={roleData.hoursPerWeek?.toString() || '40'}
                      onValueChange={(value) =>
                        handleRoleChange(role.id, 'hoursPerWeek', parseInt(value))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select hours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 hours (Part-time)</SelectItem>
                        <SelectItem value="20">20 hours (Half-time)</SelectItem>
                        <SelectItem value="30">30 hours (3/4 time)</SelectItem>
                        <SelectItem value="40">40 hours (Full-time)</SelectItem>
                        <SelectItem value="50">50 hours (Overtime)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Team Metrics Dashboard */}
      {hasTeamMembers && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-blue-600" />
            <Text className="font-bold text-blue-800">Team Cost Analysis</Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800">
                {metrics.teamSize}
              </div>
              <Text className="text-sm text-blue-600">Team Members</Text>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800">
                {metrics.totalFTE.toFixed(1)}
              </div>
              <Text className="text-sm text-blue-600">Full-Time Equivalent</Text>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800">
                €{Math.round(metrics.totalMonthlyCost).toLocaleString()}
              </div>
              <Text className="text-sm text-blue-600">Monthly Cost</Text>
            </div>
          </div>

          {/* Automation Opportunity */}
          {metrics.totalMonthlyCost > 3000 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border-t border-blue-200 pt-4 mt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  <div>
                    <Text className="text-sm font-medium text-blue-800">
                      Automation Savings Potential
                    </Text>
                    <Text className="text-sm text-blue-600">
                      €{Math.round(metrics.automationSavings).toLocaleString()}/month (60% reduction)
                    </Text>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <div>
                    <Text className="text-sm font-medium text-blue-800">
                      Investment Payback
                    </Text>
                    <Text className="text-sm text-blue-600">
                      {metrics.paybackPeriod} months typical ROI timeline
                    </Text>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Real-time Calculation Display */}
      {realTimeCalculation && calculationMessage && hasTeamMembers && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 justify-center">
            <Calculator className="h-5 w-5 text-blue-600" />
            <Text className="text-blue-800 font-medium text-center">
              {calculationMessage
                .replace('[MONTHLY_COST]', `€${Math.round(metrics.totalMonthlyCost).toLocaleString()}`)
                .replace('[TEAM_SIZE]', metrics.teamSize.toString())
                .replace('[FTE]', metrics.totalFTE.toFixed(1))}
            </Text>
          </div>
        </motion.div>
      )}

      {/* Efficiency Insights */}
      {hasTeamMembers && metrics.totalFTE > 1.5 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-start gap-2">
            <TrendingUp className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <strong>Efficiency Opportunity:</strong> With {metrics.totalFTE.toFixed(1)} FTE in customer service, 
              automation could free up {(metrics.totalFTE * 0.6).toFixed(1)} FTE worth of time for strategic 
              initiatives, saving €{Math.round(metrics.automationSavings).toLocaleString()}/month.
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}