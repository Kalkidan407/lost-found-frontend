"use client";

import { useState } from "react";
import QuizQuestion from "./QuizQuestion";

const quizQuestions = [
  {
    id: 1,
    question: "What color was the wallet?",
    options: ["Black", "Brown", "Blue", "Red"],
  },
  {
    id: 2,
    question: "Where did you last see it?",
    options: ["Library", "Cafeteria", "Bus", "Dorm"],
  },
];

export default function QuizCard({ itemId }: { itemId: string }) {

  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSelect = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    console.log("Item ID:", itemId);
    console.log("Answers:", answers);
  };

  return (

    <div className="  items-center text-center  max-w-lg bg-white rounded-2xl shadow-lg p-6 mt-10 ">

      <h2 className="text-2xl font-semibold mb-2 ">
        Ownership Verification
      </h2>

      <p className="text-sm text-gray-500 text-center mb-6">
        Please answer honestly. Only the real owner should know these answers.
      </p>

      <div className="space-y-10 text-center">
        {quizQuestions.map((q) => (
          <QuizQuestion
            key={q.id}
            question={q}
            selected={answers[q.id]}
            onSelect={(answer) => handleSelect(q.id, answer)}
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-1/2  bg-emerald-600 text-white py-3 rounded-xl hover:opacity-90 transition"
      >
        Submit Answers
      </button>
    </div>
  );
}
