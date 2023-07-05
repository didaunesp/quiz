import Question from "@/components/Question";
import { Button, message, Steps as AntdSteps } from "antd";
import { useState } from "react";

const steps = [
  {
    title: "Question 1",
    content: (
      <Question
        number={1}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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

export const Steps = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    textAlign: "left",
    color: "#000",
    backgroundColor: "#fefefe",
    borderRadius: 10,
    padding: "20px",
    border: `1px dashed #000`,
    marginTop: 16,
  };

  return (
    <>
      <AntdSteps current={current} items={items} />
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
};
