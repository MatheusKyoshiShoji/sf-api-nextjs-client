import { Card } from "./components/card/card";

export default function Home() {
  return (
    <div className="w-11/12 m-auto">
      <div className="p-2 bg-gray-50 shadow-2xl rounded-3xl mt-3">
        <p className="text-black"> Container </p>
        <Card/>
      </div>
    </div>
  );
}