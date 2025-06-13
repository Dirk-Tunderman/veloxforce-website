#!/usr/bin/env node

/**
 * Test script for debug logging functionality
 * This script simulates a quiz submission to test the debug logging system
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

// Sample quiz submission data
const testSubmission = {
  contactDetails: {
    full_name: "John Doe",
    business_email: "john@testcompany.com",
    company_name: "Test Company Inc",
    phone_number: "+1234567890",
    website: "https://example.com"
  },
  departmentRoute: "sales",
  quizAnswers: {
    q1_timeSpent: "5-10 hours",
    q2_teamSize: "3-5 people",
    q3_mainChallenge: "Too much manual work",
    q4_currentTools: ["CRM", "Email"],
    q5_priority: "Increase efficiency"
  },
  summary: {
    calculatedScore: 75,
    resultCategory: "High Automation Potential"
  }
}

async function testQuizSubmission() {
  console.log('🧪 Testing quiz submission with debug logging...')
  console.log(`📍 Target URL: ${BASE_URL}/api/submit-quiz`)
  
  try {
    const response = await fetch(`${BASE_URL}/api/submit-quiz`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testSubmission)
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const result = await response.json()
    console.log('✅ Quiz submission successful!')
    console.log('📊 Response:', JSON.stringify(result, null, 2))

    if (result.debug?.debugSessionId) {
      console.log(`\n🎯 Debug session created: ${result.debug.debugSessionId}`)
      console.log('📁 Check the debug-logs directory for detailed logs')
    }

    return result
  } catch (error) {
    console.error('❌ Quiz submission failed:', error.message)
    return null
  }
}

async function testReportGeneration() {
  console.log('\n🧪 Testing report generation with debug logging...')
  console.log(`📍 Target URL: ${BASE_URL}/api/generate-report`)
  
  try {
    const response = await fetch(`${BASE_URL}/api/generate-report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testSubmission)
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const result = await response.json()
    console.log('✅ Report generation successful!')
    console.log('📊 Response:', JSON.stringify(result, null, 2))

    if (result.debug?.debugSessionId) {
      console.log(`\n🎯 Debug session created: ${result.debug.debugSessionId}`)
      console.log('📁 Check the debug-logs directory for detailed logs')
    }

    return result
  } catch (error) {
    console.error('❌ Report generation failed:', error.message)
    return null
  }
}

async function checkDebugDirectory() {
  console.log('\n📁 Checking debug-logs directory...')
  
  try {
    const fs = require('fs').promises
    const path = require('path')
    
    const debugDir = path.join(process.cwd(), 'debug-logs')
    
    try {
      const entries = await fs.readdir(debugDir)
      
      if (entries.length === 0) {
        console.log('📂 Debug directory is empty')
        return
      }
      
      console.log(`📂 Found ${entries.length} debug sessions:`)
      
      for (const entry of entries.slice(0, 5)) { // Show max 5 recent sessions
        const entryPath = path.join(debugDir, entry)
        const stats = await fs.stat(entryPath)
        
        if (stats.isDirectory()) {
          const files = await fs.readdir(entryPath)
          console.log(`  📁 ${entry} (${files.length} files)`)
          
          // List the files in the most recent session
          if (entry === entries[0]) {
            files.forEach(file => {
              console.log(`    📄 ${file}`)
            })
          }
        }
      }
    } catch (readError) {
      console.log('📂 Debug directory not found (this is normal on first run)')
    }
  } catch (error) {
    console.error('❌ Error checking debug directory:', error.message)
  }
}

async function main() {
  console.log('🚀 Debug Logging Test Suite')
  console.log('===========================\n')

  // Check if server is running
  try {
    const healthCheck = await fetch(`${BASE_URL}/api/generate-report`, { method: 'GET' })
    if (healthCheck.ok) {
      console.log('✅ Server is running and accessible\n')
    }
  } catch (error) {
    console.error('❌ Server not accessible. Make sure the dev server is running with `npm run dev`')
    console.error('🔧 Start the server and try again\n')
    process.exit(1)
  }

  await checkDebugDirectory()

  console.log('\n' + '='.repeat(50))
  console.log('🧪 TESTING QUIZ SUBMISSION')
  console.log('='.repeat(50))
  
  const quizResult = await testQuizSubmission()
  
  if (quizResult && quizResult.reportGenerated) {
    console.log('\n⏳ Report generation was triggered automatically...')
    console.log('📧 Check your email and debug logs for the full report')
  } else if (quizResult) {
    console.log('\n' + '='.repeat(50))
    console.log('🧪 TESTING REPORT GENERATION')
    console.log('='.repeat(50))
    
    await testReportGeneration()
  }

  console.log('\n' + '='.repeat(50))
  console.log('📁 FINAL DEBUG DIRECTORY CHECK')
  console.log('='.repeat(50))
  
  await checkDebugDirectory()

  console.log('\n✅ Debug logging test completed!')
  console.log('📋 Summary:')
  console.log('   - Quiz submission API tested')
  console.log('   - Report generation API tested')  
  console.log('   - Debug logs should be available in debug-logs directory')
  console.log('   - Console output shows real-time progress with emojis')
  console.log('\n🎯 Next steps:')
  console.log('   1. Submit a real quiz to test the full flow')
  console.log('   2. Check the generated debug files')
  console.log('   3. Compare email content with PDF content')
  console.log('   4. Verify AI prompts and responses are captured')
}

// Handle command line execution
if (require.main === module) {
  main().catch(error => {
    console.error('💥 Test suite failed:', error)
    process.exit(1)
  })
}

module.exports = { testQuizSubmission, testReportGeneration, checkDebugDirectory }