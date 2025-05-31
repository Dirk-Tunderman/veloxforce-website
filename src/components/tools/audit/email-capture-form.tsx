"use client"

import { useState } from "react"
import { Loader2, Mail, Globe, User, Building, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heading, Text } from "@/components/ui/typography"
import { ContactDetails, QuizAnswers } from "@/types/audit-tool"

interface EmailCaptureFormProps {
  onSubmit: (contactDetails: ContactDetails) => void
  isLoading?: boolean
  quizAnswers?: Partial<QuizAnswers>
}

export function EmailCaptureForm({ onSubmit, isLoading, quizAnswers }: EmailCaptureFormProps) {
  // Form state
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [role, setRole] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [website, setWebsite] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Business email validation
  const isBusinessEmail = (email: string): boolean => {
    const businessDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com']
    const domain = email.split('@')[1]?.toLowerCase()
    return domain ? !businessDomains.includes(domain) : false
  }

  // Website URL validation
  const isValidWebsite = (url: string): boolean => {
    if (!url) return true // Optional field
    try {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`)
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
    } catch {
      return false
    }
  }

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Required fields
    if (!email) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email"
    else if (!isBusinessEmail(email)) newErrors.email = "Please use your business email address"

    if (!fullName) newErrors.fullName = "Full name is required"
    if (!role) newErrors.role = "Role is required"
    if (!companyName) newErrors.companyName = "Company name is required"
    if (!website) newErrors.website = "Website is required"
    else if (!isValidWebsite(website)) newErrors.website = "Please enter a valid website URL"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }



  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      return
    }

    // Log all quiz answers and form data for validation
    console.log('=== QUIZ SUBMISSION DATA ===')
    console.log('Quiz Answers:', quizAnswers)
    console.log('Contact Details:', {
      email,
      fullName,
      role,
      companyName,
      website,
      phoneNumber
    })
    console.log('============================')

    // Format website URL
    const formattedWebsite = website.startsWith('http') ? website : `https://${website}`

    // Prepare contact details
    const contactDetails: ContactDetails = {
      email,
      fullName,
      role,
      companyName,
      website: formattedWebsite,
      phoneNumber: phoneNumber || undefined,
    }

    // Call the onSubmit handler
    onSubmit(contactDetails)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-deep-blue/10">
            <Mail className="h-10 w-10 text-blue-600 transition-all duration-200" />
          </div>
        </div>

        <div>
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            See Your Automation ROI Analysis
          </Heading>
          <Text className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your personalized automation assessment delivered to your inbox within minutes
          </Text>
        </div>

        {/* Benefits Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-deep-blue rounded-full"></div>
              <Text className="font-medium text-deep-blue">Detailed cost breakdown</Text>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-success-green rounded-full"></div>
              <Text className="font-medium text-success-green">Savings calculation</Text>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-urgency-orange rounded-full"></div>
              <Text className="font-medium text-urgency-orange">Implementation timeline</Text>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <Text className="font-medium text-purple-600">Industry comparison</Text>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Business Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-700 transition-all duration-200" />
              Business Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@yourcompany.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <Text className="text-sm text-red-600">{errors.email}</Text>
            )}
            <Text className="text-xs text-muted-foreground">
              Please use your business email (not Gmail, Yahoo, etc.)
            </Text>
          </div>

          {/* Full Name and Role - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-700 transition-all duration-200" />
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Smith"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={errors.fullName ? 'border-red-500' : ''}
              />
              {errors.fullName && (
                <Text className="text-sm text-red-600">{errors.fullName}</Text>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="flex items-center gap-2">
                <Building className="h-4 w-4 text-gray-700 transition-all duration-200" />
                Your Role *
              </Label>
              <Input
                id="role"
                type="text"
                placeholder="CEO, Operations Manager, etc."
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={errors.role ? 'border-red-500' : ''}
              />
              {errors.role && (
                <Text className="text-sm text-red-600">{errors.role}</Text>
              )}
            </div>
          </div>

          {/* Company Name and Website - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="flex items-center gap-2">
                <Building className="h-4 w-4 text-gray-700 transition-all duration-200" />
                Company Name *
              </Label>
              <Input
                id="companyName"
                type="text"
                placeholder="Your Company Ltd."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={errors.companyName ? 'border-red-500' : ''}
              />
              {errors.companyName && (
                <Text className="text-sm text-red-600">{errors.companyName}</Text>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-gray-700 transition-all duration-200" />
                Company Website *
              </Label>
              <Input
                id="website"
                type="url"
                placeholder="yourcompany.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className={errors.website ? 'border-red-500' : ''}
              />
              {errors.website && (
                <Text className="text-sm text-red-600">{errors.website}</Text>
              )}
            </div>
          </div>

          {/* Phone Number - Optional */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-700 transition-all duration-200" />
              Phone Number (Optional)
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="space-y-4 pt-4">
            <Button
              type="submit"
              className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white font-semibold"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
                  Preparing Your Analysis...
                </>
              ) : (
                "Get My Results →"
              )}
            </Button>

            <div className="text-center space-y-2">
              <Text className="text-xs text-muted-foreground">
                🔒 We respect your privacy. No spam, ever.
              </Text>
              <Text className="text-xs text-muted-foreground">
                Your analysis will be delivered within 5 minutes
              </Text>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
