

export default function CharacterInfo({ characterName, realm, rating, wins, losses, faction }) {

    function winRate(wins, losses) {
        return Math.floor((wins / (losses + wins)) * 100)
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-1">
                <div className='text-base text-white font-bold flex items-center gap-1'>
                    {characterName}
                </div>
                <div className='text-sm text-slate-400'>
                    {realm}
                </div>
            </td>
            <td className='px-9 py-5'>
                {faction == 'HORDE' ? (<img className='w-6 rounded-full' src='https://imgur.com/nGerRSJ.png' />) : (<img className='w-6 rounded-full' src='https://imgur.com/LwVHGET.png' />)}
            </td>
            <td className="px-4 py-5 text-base font-bold flex items-center gap-2">
                {rating > 2400 ? (<img className='w-6 rounded-full' src='https://imgur.com/178UcxS.png' />) : rating > 2200 ? (<img className='w-6 rounded-full' src='https://imgur.com/0z8JIwb.png' />) : (<img className='w-6 rounded-full' src='https://imgur.com/0XuIe07.png' />)}
                {rating}
            </td>
            <td className="px-6 py-4 text-green-500">
                {wins}
            </td>
            <td className="px-6 py-4 text-red-600">
                {losses}
            </td>
            <td className="px-6 py-4 text-yellow-300">
                {winRate(wins, losses)}%
            </td>
        </tr>
    )
}