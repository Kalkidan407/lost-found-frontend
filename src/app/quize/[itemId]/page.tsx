"use client";

import QuizCard from "@/Components/quiz/QuizCard";

export default function QuizPage({
  params,
}: {
  params: { itemId: string };
}) {
  return (
    <div className="m-auto flex  p-6 justify-center ">
      <QuizCard itemId={params.itemId} />
    </div>
  );
}