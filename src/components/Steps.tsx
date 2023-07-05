import Question from "@/components/Question";
import { Button, message, Steps as AntdSteps } from "antd";
import { useState } from "react";
import axios from "axios";

export const Steps = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const [answer1, setAnswer1] = useState(1);
  const [answer2, setAnswer2] = useState(1);
  const [answer3, setAnswer3] = useState(1);

  const steps = [
    {
      title: "Question 1",
      content: (
        <Question
          number={1}
          answer={answer1}
          setAnswer={setAnswer1}
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
          answer={answer2}
          setAnswer={setAnswer2}
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
          answer={answer3}
          setAnswer={setAnswer3}
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
      <div style={{ marginTop: 24, float: "right" }}>
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={async () => {
              message.success("Processing complete!");
              console.log("answer1", answer1);
              console.log("answer2", answer2);
              console.log("answer3", answer3);
              const data = [answer1, answer2, answer3];
              const response = await fetch("/api/sendAnswer", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
              const result = await response.json();
              console.log(result);
            }}
          >
            Done
          </Button>
        )}
      </div>
    </>
  );
};
