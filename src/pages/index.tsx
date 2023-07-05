import Question from "@/components/Question";
import { Button } from "antd";

export default function Home() {
  return (
    <div style={{ padding: "10px" }}>
      <h1>Quiz</h1>
      <Question
        number={1}
        alternatives={[
          "alternative 1",
          "alternative 2",
          "alternative 3",
          "alternative 4",
        ]}
      />
      <Button type="primary">Submit</Button>
    </div>
  );
}
