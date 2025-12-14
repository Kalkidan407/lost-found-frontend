

type Question = {
  id: number;
  question: string;
  options: string[];
};

type Props = {
  question: Question;
  selected?: string;
  onSelect: (answer: string) => void;
};

export default function QuizQuestion({
  question,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="w-1/2 sm:w-full ">

      <h3 className="font-medium mb-3">{question.question}</h3>

      <div className="grid grid-cols-2 gap-3  ">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`border rounded-lg py-2 text-sm transition
              ${
                selected === option
                  ? "bg-emerald-600 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            {option}
          </button>
        ))}
      </div>

    </div>
  );
}
