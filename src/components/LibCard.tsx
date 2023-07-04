import { useState } from 'react'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'
import { LuClipboardCopy, LuClipboardCheck } from 'react-icons/lu'

interface ILibCard {
    animation: unknown
    title: string
    description: JSX.Element
    link: string
    npm?: string
}

export default function LibCard({ animation, title, description, link, npm }: ILibCard) {

    const [isMouseOver, setIsMouseOver] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const [clipboardActive, setClipboardActive] = useState(false)
    const [isMouseOverClipboard, setIsMouseOverClipboard] = useState(false)

    const copyToClipboard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()

        navigator.clipboard.writeText(`npm install ${npm}`)
        setClipboardActive(true)
        setTimeout(() => {
            setClipboardActive(false)
        }, 2000)
    }

    return (
        <motion.a
            className='flex flex-col rounded-xl h-auto overflow-hidden border border-zinc-900 z-0'
            animate={{ width: isMouseOver ? '28vw' : '23vw', height: 'auto' }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationEnd={() => setIsAnimating(false)}
            href={link}
            target='_blank'
        >
            <div className='flex w-full h-52 justify-center items-center bg-zinc-900'>
                <Lottie animationData={animation} style={{ height: 'inherit' }} />
            </div>

            <div className='flex justify-between items-center bg-zinc-800 h-12 p-5'>
                <h1 className='font-bold whitespace-nowrap'>{title}</h1>
                {npm &&
                    <motion.div
                        className='flex flex-row gap-1 items-center cursor-pointer z-10 py-2'
                        animate={{ opacity: isMouseOver ? isMouseOverClipboard ? 1 : 0.5 : 0, visibility: isMouseOver ? 'visible' : isAnimating ? 'visible' : 'hidden' }}
                        transition={{ ease: "easeInOut", duration: 0.5 }}
                        onClick={copyToClipboard}
                        onMouseEnter={() => setIsMouseOverClipboard(true)}
                        onMouseLeave={() => setIsMouseOverClipboard(false)}
                    >
                        <p className='text-xs' style={{ color: clipboardActive ? 'lightgreen' : 'white' }}>npm install {npm}</p>
                        {clipboardActive ?
                            <LuClipboardCheck color='lightgreen' />
                            :
                            <LuClipboardCopy color='white' />
                        }
                    </motion.div>
                }
            </div>

            <motion.div
                className='flex overflow-hidden bg-zinc-800'
                animate={{ height: isMouseOver ? 'auto' : 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
            >
                <span className='p-5'>{description}</span>
            </motion.div>
        </motion.a>
    )
}