import './App.css'
import { Libs } from './components'
import { BsGithub } from 'react-icons/bs'

export default function App() {

  return (
    <main className='flex flex-col justify-center'>
      <div className='flex flex-row justify-end items-center m-8 mx-20'>
        <a
          className='text-gray-300 text-1xl flex justify-center items-center gap-1'
          href='https://github.com/PedroHenriqueNS'
          target='_blank'
        ><BsGithub />GitHub</a>
      </div>
      <div className='w-full flex justify-center items-center m-10 mb-20'>
          <h1 className='w-max font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400' >Libs <span className="that-title">that</span> I Should Use</h1>
      </div>

      <h2 className='flex w-max justify-start m-6 ml-28 font-bold text-2xl'>General</h2>
      <Libs />

      <h2 className='flex w-max justify-start m-6 mt-28 ml-28 font-bold text-2xl'>Mobile</h2>
      <p className='flex w-max justify-start m-1 mb-10 ml-28'>(developing)</p>
    </main>
  )
}