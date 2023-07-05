import Question from "@/components/Question";
import { Button, Steps, message } from "antd";
import { useState } from "react";

const steps = [
  {
    title: "Question 1",
    content: (
      <Question
        number={1}
        alternatives={[
          "alternative 1",
          "alternative 2",
          "alternative 3",
          "alternative 4",
        ]}
      />
    ),
  },
  {
    title: "Question 2",
    content: (
      <Question
        number={2}
        alternatives={[
          "alternative 1",
          "alternative 2",
          "alternative 3",
          "alternative 4",
        ]}
      />
    ),
  },
  {
    title: "Question 3",
    content: (
      <Question
        number={3}
        alternatives={[
          "alternative 1",
          "alternative 2",
          "alternative 3",
          "alternative 4",
        ]}
      />
    ),
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: "#000",
    backgroundColor: "#fefefe",
    borderRadius: 100,
    border: `1px dashed #000`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
}
