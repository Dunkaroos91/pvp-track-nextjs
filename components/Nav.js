import Link from 'next/link';
import { auth } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Nav() {
    const [user, loading] = useAuthState(auth);


    return (
        <nav className='flex justify-between items-center py-10'>
            <Link href='/' className='flex items-center gap-2'>
                <img className='w-10 rounded-full cursor-pointer' src="https://www.clipartmax.com/png/small/226-2261836_other-discord-transparent-server-icon-images-world-of-warcraft-discord-logo.png" />
                <button className='text-2xl font-bold text-white'>PvP Tracker</button>
            </Link>
            <ul className='flex items-center gap-3'>
                {user ? (
                    <h1 className='text-base font-medium text-white'>{user.email}</h1>
                ) : (
                    null
                )}
                {!user && (
                    <Link href={'/auth/login'} className='py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8'>
                        Join Now
                    </Link>
                )}
                {user && (
                    <div className='flex items-center gap-2 place-content-end'>
                        <Link href='/dashboard'>
                            <img className='w-12 rounded-full cursor-pointer' src={user.photoURL} />
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    )
}