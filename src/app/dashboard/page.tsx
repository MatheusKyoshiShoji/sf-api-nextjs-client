import { cookies } from "next/headers";
import { Card } from "../components/card/card";

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('sf_access_token');

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sf/metadata`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId: accessToken?.value}),
    })

    return (
    <div className="w-11/12 m-auto">
        <div className="p-2 bg-gray-50 shadow-2xl rounded-3xl mt-3">
          <h3 className="text-black text-3xl mb-2"> Metadados </h3>
          <div className="grid grid-cols-5 grid-rows-2 gap-4 w-full my-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    )
}