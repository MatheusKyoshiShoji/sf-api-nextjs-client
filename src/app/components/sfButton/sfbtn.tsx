'use client'
export function SfButton() {

    const handleLogin = () => {
        window.location.href = '/api/sf/auth';
    }

    return <button className="bg-[#00a1e0] px-2 py-4 rounded-3xl cursor-pointer" onClick={handleLogin}>Login with Salesforce</button>
}