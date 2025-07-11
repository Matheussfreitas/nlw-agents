import { useQuestions } from "@/http/use-questions";
import { QuestionItem } from "./question-item";

interface QuestionListProps {
  roomId: string;
}

export function QuestionList({ roomId }: QuestionListProps) {
  const { data } = useQuestions(roomId);

  return (
    <div className="">
      <div>
        <h2>
          Perguntas & Respostas
        </h2>
      </div>

      {data?.map(questions => {
        return (
          <QuestionItem
            key={questions.id}
            question={questions}
          />
        );
      })}
    </div>
  );
}
