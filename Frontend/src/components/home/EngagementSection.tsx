import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import Ballpit from '../ui/Ballpit';

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
};

const EngagementSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "What programming language is often used for web development?",
      options: ["Java", "JavaScript", "C++", "Swift"],
      answer: 1,
    },
    {
      id: 2,
      question: "Which of these is NOT a frontend framework/library?",
      options: ["React", "Vue", "Express", "Angular"],
      answer: 2,
    },
    {
      id: 3,
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Automated Program Integration",
        "Application Process Integration",
        "Advanced Programming Interface"
      ],
      answer: 0,
    },
    {
      id: 4,
      question: "Which company created TypeScript?",
      options: ["Google", "Facebook", "Microsoft", "Amazon"],
      answer: 2,
    },
    {
      id: 5,
      question: "Which of these is NOT a database system?",
      options: ["MongoDB", "MySQL", "Apache", "PostgreSQL"],
      answer: 2,
    },
  ];

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctAnswers++;
      }
    });

    const finalScore = Math.round((correctAnswers / questions.length) * 100);
    setScore(finalScore);

    if (finalScore > 70) {
      toast.success("Great job! You're a tech wizard! 🧙‍♂️");
    } else {
      toast.info("Not bad! Join us to learn more about tech 😊");
    }
  };

  const handleRestartQuiz = () => {
    setActiveQuestion(0);
    setSelectedAnswers([]);
    setScore(null);
  };

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5b?auto=format&fit=crop&q=80&w=150",
      quote: "Joining Tech Society was the best career decision I've made. I've met amazing people and learned so much!",
    },
    {
      name: "Sarah Williams",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
      quote: "The workshops and events organized by Tech Society have helped me grow professionally and personally.",
    },
    {
      name: "David Chen",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=150",
      quote: "I found my current job through a networking event at Tech Society. The community here is incredible!",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Ballpit as background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Ballpit
          count={40}
          gravity={0.3}
          friction={0.9975}
          wallBounce={1.00}
          followCursor={false}
        />
      </div>

      {/* Soft glow background */}
      <div className="absolute right-1/4 -bottom-40 w-96 h-96 bg-tech-pink/10 rounded-full blur-3xl -z-20" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-6">
            <div className="bg-accent px-4 py-1.5 rounded-full">
              <span className="text-sm font-medium text-accent-foreground">
                Get Engaged
              </span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Interactive experiences with our <span className="text-tech-purple text-glow">community</span>
          </h2>

          <p className="text-muted-foreground">
            Test your knowledge, hear from our members, or chat with us directly.
          </p>
        </div>

        <Tabs defaultValue="quiz" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="quiz">Tech Quiz</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          </TabsList>

          <TabsContent value="quiz">
            <Card className="p-6 md:p-10">
              {score !== null ? (
                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold mb-4">Your Score: {score}%</h3>
                  <div className="w-full bg-secondary h-4 rounded-full mb-6">
                    <div
                      className="bg-gradient-to-r from-tech-purple to-tech-blue h-full rounded-full"
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    {score > 70
                      ? "Amazing! You have a solid tech knowledge. You'd be a great addition to our community!"
                      : "Great effort! Join our community to enhance your tech knowledge and skills."}
                  </p>
                  <Button onClick={handleRestartQuiz}>Take Quiz Again</Button>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="font-display font-semibold">
                      Question {activeQuestion + 1}/{questions.length}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      Test your tech knowledge
                    </span>
                  </div>

                  <h4 className="text-xl font-medium mb-6">{questions[activeQuestion].question}</h4>

                  <div className="space-y-3 mb-8">
                    {questions[activeQuestion].options.map((option, index) => (
                      <div
                        key={index}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedAnswers[activeQuestion] === index
                            ? 'border-tech-purple bg-accent'
                            : 'hover:border-tech-purple/50'
                        }`}
                        onClick={() => handleAnswerSelect(activeQuestion, index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                            selectedAnswers[activeQuestion] === index
                              ? 'border-tech-purple bg-tech-purple text-white'
                              : 'border-muted-foreground'
                          }`}>
                            {selectedAnswers[activeQuestion] === index && '✓'}
                          </div>
                          <span>{option}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handlePrevQuestion}
                      disabled={activeQuestion === 0}
                    >
                      Previous
                    </Button>

                    {activeQuestion === questions.length - 1 ? (
                      <Button
                        onClick={handleSubmitQuiz}
                        disabled={selectedAnswers[activeQuestion] === undefined}
                      >
                        Submit Quiz
                      </Button>
                    ) : (
                      <Button
                        onClick={handleNextQuestion}
                        disabled={selectedAnswers[activeQuestion] === undefined}
                      >
                        Next Question
                      </Button>
                    )}
                  </div>
                </>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="testimonials">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    </div>
                    <div className="mt-6 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 fill-tech-purple"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EngagementSection;
