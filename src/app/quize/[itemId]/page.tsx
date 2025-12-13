"use client";

import QuizCard from "@/Components/quiz/QuizCard";

export default function QuizPage({
  params,
}: {
  params: { itemId: string };
}) {
  return (
    <div className="min-h-screen flex  bg-gray-50 p-4">
      <QuizCard itemId={params.itemId} />
    </div>
  );
}