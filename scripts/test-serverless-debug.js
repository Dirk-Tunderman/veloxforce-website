#!/usr/bin/env node

/**
 * Test script to verify serverless-compatible debug logging
 */

// Simulate serverless environment
process.env.VERCEL = 'true'

const { DebugLogger } = require('../src/lib/debug-logger.ts')

async function testServerlessDebugLogging() {
  console.log('🧪 Testing Serverless Debug Logging')
  console.log('='.repeat(50))
  
  const debugLogger = new DebugLogger()
  
  // Test session initialization
  console.log('\n1. Testing session initialization...')
  const session = await debugLogger.initSession({
    company_name: 'Test Company',
    business_email: 'test@example.com'
  })
  
  console.log('✅ Session initialized:', session.sessionId)
  
  // Test timing operations
  console.log('\n2. Testing timing operations...')
  debugLogger.startTiming('test_operation')
  
  // Simulate some work
  await new Promise(resolve => setTimeout(resolve, 100))
  
  debugLogger.endTiming('test_operation')
  console.log('✅ Timing operations completed')
  
  // Test data logging
  console.log('\n3. Testing data logging...')
  await debugLogger.logQuizInput({
    quizAnswers: {
      question1: 'answer1',
      question2: ['answer2a', 'answer2b']
    }
  })
  console.log('✅ Quiz input logging completed')
  
  // Test summary generation
  console.log('\n4. Testing summary generation...')
  await debugLogger.saveDebugSummary()
  console.log('✅ Summary generation completed')
  
  console.log('\n🎉 All serverless debug logging tests passed!')
  console.log('📋 The system should work correctly in Vercel environment')
}

// Run the test
testServerlessDebugLogging().catch(console.error)
