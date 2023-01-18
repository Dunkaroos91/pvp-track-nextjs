import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";



export default function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();

    useEffect(() => {
        if (!user) {
            route.push('/');
        } else {
            console.log('login')
        }
    }, [user])

    return (
        <div>
            <h1 className='text-lg'>Dashboard</h1>
            <button className='font-medium text-white bg-gray-800 py-2 px-4 my-6' onClick={() => auth.signOut()}>
                Sign out
            </button>
        </div>
    )
}