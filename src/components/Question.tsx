import { Input, Radio, RadioChangeEvent, Space } from "antd";
import { useState } from "react";

interface QuestionProps {
  number: number;
  alternatives: string[];
}

export default function Question({ number, alternatives }: QuestionProps) {
  return (
    <>
      <h2>Question {number}</h2>
      <Alternatives alternatives={alternatives} />
    </>
  );
}

interface AlternativesProps {
  alternatives: string[];
}

const Alternatives = ({ alternatives }: AlternativesProps) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
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
