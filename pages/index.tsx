import type { NextPage } from 'next'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
            <button onClick={() => setTheme('light')} className='text-white dark:text-black'>light mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>

      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>
      <button onClick={() => setTheme('dark')} className='text-black dark:text-white'>dark mode</button>


    </div>
  )
}

export default Home;