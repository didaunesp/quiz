import { Radio, RadioChangeEvent, Space } from "antd";

interface QuestionProps {
  number: number;
  answer: number;
  setAnswer: (answer: number) => void;
  alternatives: string[];
  description: string;
}

export default function Question({
  number,
  answer,
  setAnswer,
  alternatives,
  description,
}: QuestionProps) {
  return (
    <>
      <h2>Question {number}</h2>
      <p>{description}</p>
      <Alternatives
        alternatives={alternatives}
        answer={answer}
        setAnswer={setAnswer}
      />
    </>
  );
}

interface AlternativesProps {
  alternatives: string[];
  answer: number;
  setAnswer: (answer: number) => void;
}

const Alternatives = ({
  alternatives,
  answer,
  setAnswer,
}: AlternativesProps) => {
  const onChange = (e: RadioChangeEvent) => {
    setAnswer(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={answer}>
      <Space direction="vertical">
        {alternatives.map((alternative, idx) => (
          <Radio key={idx} value={idx + 1}>
            {alternative}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};
