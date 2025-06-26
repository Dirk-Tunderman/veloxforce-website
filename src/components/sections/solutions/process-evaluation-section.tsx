'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, Users, Zap, Target } from 'lucide-react';

interface Question {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  options: {
    label: string;
    value: string;
    points: number;
  }[];
}

const questions: Question[] = [
  {
    id: 'trainable',
    title: 'Can you train someone to do this process?',
    description: 'If you can explain a step-by-step process, we can automate it perfectly.',
    icon: Users,
    options: [
      { label: 'Yes', value: 'yes', points: 10 },
      { label: 'No', value: 'no', points: 0 }
    ]
  },
  {
    id: 'frequency',
    title: 'Does this happen at least weekly?',
    description: 'Repetitive, predictable work is ideal for Service-as-Software.',
    icon: Clock,
    options: [
      { label: 'Yes', value: 'yes', points: 10 },
      { label: 'No', value: 'no', points: 0 }
    ]
  },
  {
    id: 'consistency',
    title: 'Does it follow consistent steps or rules?',
    description: 'Even complex rules work - we just need consistency.',
    icon: CheckCircle,
    options: [
      { label: 'Yes', value: 'yes', points: 10 },
      { label: 'No', value: 'no', points: 0 }
    ]
  },
  {
    id: 'volume',
    title: 'Is your team spending 5+ hours per week on this?',
    description: 'Enough volume to generate meaningful time savings.',
    icon: Zap,
    options: [
      { label: 'Yes', value: 'yes', points: 10 },
      { label: 'No', value: 'no', points: 0 }
    ]
  },
  {
    id: 'impact',
    title: 'Would automating this create significant value?',
    description: 'High-impact processes deliver the best ROI.',
    icon: Target,
    options: [
      { label: 'Yes', value: 'yes', points: 10 },
      { label: 'No', value: 'no', points: 0 }
    ]
  }
];

export function ProcessEvaluationSection() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateScore = () => {
    return questions.reduce((total, question) => {
      const answer = answers[question.id];
      const option = question.options.find(opt => opt.value === answer);
      return total + (option?.points || 0);
    }, 0);
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;
  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Not Sure Yet?
            <br />
            <span className="text-blue-600">Let's Find Out.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The 5-Question Automation Readiness Assessment
          </p>

          {/* Progress Indicator */}
          <div className="max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-600">Progress</span>
              <span className="text-sm font-semibold text-blue-600">
                {Object.keys(answers).length}/5 Complete
              </span>
            </div>
            <Progress value={progress} className="h-3 bg-gray-200" />
          </div>
        </div>

        {/* Questions Grid */}
        <div className="space-y-8 mb-12">
          {/* First Row - Questions 1 & 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {questions.slice(0, 2).map((question, index) => (
              <QuestionCard
                key={question.id}
                question={question}
                questionNumber={index + 1}
                answer={answers[question.id]}
                onAnswer={handleAnswer}
              />
            ))}
          </div>

          {/* Second Row - Questions 3 & 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {questions.slice(2, 4).map((question, index) => (
              <QuestionCard
                key={question.id}
                question={question}
                questionNumber={index + 3}
                answer={answers[question.id]}
                onAnswer={handleAnswer}
              />
            ))}
          </div>

          {/* Third Row - Question 5 (Centered) */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <QuestionCard
                question={questions[4]}
                questionNumber={5}
                answer={answers[questions[4].id]}
                onAnswer={handleAnswer}
              />
            </div>
          </div>
        </div>

        {/* Results Button */}
        {allAnswered && !showResults && (
          <div className="text-center">
            <Button
              onClick={() => setShowResults(true)}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              See Your Results
            </Button>
          </div>
        )}

        {/* Results Section */}
        {showResults && allAnswered && (
          <ResultsCard score={calculateScore()} />
        )}
      </div>
    </section>
  );
}

// Question Card Component
function QuestionCard({
  question,
  questionNumber,
  answer,
  onAnswer
}: {
  question: Question;
  questionNumber: number;
  answer: string;
  onAnswer: (questionId: string, value: string) => void;
}) {
  const Icon = question.icon;
  const isAnswered = !!answer;

  return (
    <Card className={`group relative overflow-hidden transition-all duration-500 hover:shadow-xl ${
      isAnswered
        ? 'ring-2 ring-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg'
        : 'hover:shadow-lg bg-white'
    }`}>
      <CardContent className="p-8">
        {/* Question Number Badge */}
        <div className="absolute top-4 right-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            isAnswered
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}>
            {questionNumber}
          </div>
        </div>

        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`p-4 rounded-2xl transition-colors duration-300 ${
            isAnswered
              ? 'bg-blue-100 text-blue-600'
              : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-500'
          }`}>
            <Icon className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
              {question.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {question.description}
            </p>
          </div>
        </div>

        {/* Answer Options */}
        <div className="flex gap-4">
          {question.options.map((option) => {
            const isSelected = answer === option.value;
            const isYes = option.value === 'yes';

            return (
              <Button
                key={option.value}
                variant={isSelected ? "default" : "outline"}
                size="lg"
                onClick={() => onAnswer(question.id, option.value)}
                className={`flex-1 py-3 font-semibold transition-all duration-300 ${
                  isSelected
                    ? isYes
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-md'
                      : 'bg-red-500 hover:bg-red-600 text-white shadow-md'
                    : isYes
                      ? 'border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 text-gray-700'
                      : 'border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 text-gray-700'
                }`}
              >
                {option.label}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

// Results Card Component
function ResultsCard({ score }: { score: number }) {
  const getScoreMessage = (score: number) => {
    if (score >= 40) {
      return {
        title: "Perfect Automation Candidate!",
        message: "This process is ideal for our Service-as-Software model and ready for delegation.",
        color: "text-green-600",
        bgColor: "from-green-50 to-emerald-50",
        iconColor: "text-green-600"
      };
    } else if (score >= 30) {
      return {
        title: "Great Automation Potential",
        message: "This process has strong automation potential with some optimization.",
        color: "text-blue-600",
        bgColor: "from-blue-50 to-indigo-50",
        iconColor: "text-blue-600"
      };
    } else if (score >= 20) {
      return {
        title: "Moderate Automation Opportunity",
        message: "This process could benefit from partial automation with some restructuring.",
        color: "text-yellow-600",
        bgColor: "from-yellow-50 to-amber-50",
        iconColor: "text-yellow-600"
      };
    } else {
      return {
        title: "Limited Automation Fit",
        message: "This process may need restructuring before automation. Let's discuss alternative approaches.",
        color: "text-gray-600",
        bgColor: "from-gray-50 to-slate-50",
        iconColor: "text-gray-600"
      };
    }
  };

  const result = getScoreMessage(score);

  return (
    <div className="mt-16 max-w-3xl mx-auto">
      <Card className={`overflow-hidden shadow-2xl bg-gradient-to-br ${result.bgColor}`}>
        <CardContent className="p-12 text-center">
          {/* Score Display */}
          <div className="mb-8">
            <div className="text-7xl font-bold text-blue-600 mb-4">
              {score}/50
            </div>
            <h3 className={`text-3xl font-bold mb-4 ${result.color}`}>
              {result.title}
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {result.message}
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Your Custom Automation Plan
            </Button>
            <p className="text-sm text-gray-600">
              Free 15-minute consultation • No commitment required
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}