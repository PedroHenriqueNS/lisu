import { LibCard } from "./"
import { LottieReactAnimation, FramerMotionAnimation, TanStackAnimation, ReactUSEAnimation, ZustandAnimation, AxiosAnimation } from "../assets/animations"
import { ImageList, ImageListItem } from '@mui/material'

export default function Libs() {

    return (
        <div className="flex justify-center items-center">
            <ImageList
                sx={{ justifyContent: 'center', alignItems: 'center', overflow: 'unset' }}
                variant="masonry"
                cols={3}
                gap={30}
            >
                <ImageListItem>
                    <LibCard
                        animation={LottieReactAnimation}
                        title="Lottie React"
                        description={
                            <>
                                <p>Package for lottie animations</p>
                                <p>You should look at <a
                                    className="font-bold underline py-1 z-10 text-transparent bg-clip-text bg-gradient-to-r from-lottie-300 to-lottie-500 hover:drop-shadow-lottie transition-all ease-in-out duration-500"
                                    href="https://lottiefiles.com/"
                                    target="_blank"
                                >LottieFiles</a></p>
                            </>
                        }
                        link="https://lottiereact.com/"
                        npm="lottie-react"
                    />
                </ImageListItem>
                <ImageListItem>
                    <LibCard
                        animation={FramerMotionAnimation}
                        title="Framer Motion"
                        description={
                            <>
                                <p>Animation for jsx elements</p>
                            </>
                        }
                        link="https://www.framer.com/motion/"
                        npm="framer-motion"
                    />
                </ImageListItem>
                <ImageListItem>
                    <LibCard
                        animation={TanStackAnimation}
                        title="TanStack"
                        description={
                            <>
                                <p>Big lib for <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500"
                                >Query</span>, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-500"
                                >Router</span> and many others</p>
                            </>
                        }
                        link="https://tanstack.com/"
                    />
                </ImageListItem>
                <ImageListItem>
                    <LibCard
                        animation={ReactUSEAnimation}
                        title="React-USE"
                        description={
                            <>
                                <p>Collection of essential <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
                                >React Hooks</span>.</p>
                            </>
                        }
                        link="https://github.com/streamich/react-use"
                        npm="react-use"
                    />
                </ImageListItem>
                <ImageListItem>
                    <LibCard
                        animation={ZustandAnimation}
                        title="Zustand"
                        description={
                            <>
                                <p>A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy API based on hooks, isn't boilerplatey or opinionated.</p>
                            </>
                        }
                        link="https://zustand-demo.pmnd.rs/"
                        npm="zustand"
                    />
                </ImageListItem>
                <ImageListItem>
                    <LibCard
                        animation={AxiosAnimation}
                        title="Axios"
                        description={
                            <>
                                <p><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-500"
                                >Axios</span> is a simple promise based HTTP client for the browser and node.js.</p>
                            </>
                        }
                        link="https://axios-http.com/"
                        npm="zustand"
                    />
                </ImageListItem>
            </ImageList>
        </div>
    )
}