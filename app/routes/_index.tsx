import type { MetaFunction } from "@remix-run/node";
import { Chart } from "~/Components/Charts/LineChart";

export const meta: MetaFunction = () => {
  return [
    { title: "Bitcoin.live" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen h-full px-5">
      <Chart />
    </div>
  );
}
