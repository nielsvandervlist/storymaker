import React, {useState} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/layout/container'
import PromptInput from '@/components/detail/PromptInput'
import {faGhost} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Story() {

    const [completion, setCompletion] = useState(true)

    return (
        <>
            <Container small>
                <div className="grid grid-cols-3 gap-10 w-full home-cards">
                    <div className="home-cards__block home-cards__block--pink overflow-hidden">
                        <motion.div
                            className={'w-full h-full relative flex items-center justify-center'}
                        >
                            <FontAwesomeIcon className={'absolute z-20 text-[100px] text-white'} icon={faGhost} />
                            <Image
                                src={`/bg-1.svg`}
                                alt="Next.js Logo"
                                fill
                                priority
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        className={'col-span-2'}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.3}}
                    >
                        <h1 className={'mb-4'}>Create a story</h1>
                        <p className={'intro mb-8'}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                            consequat massa quis enim.
                        </p>
                        <div>
                            <p className={'underline mb-8'}>For example:</p>

                            <i className={'mb-8 inline-block'}>I want to hear a story about a bear who lost his mother
                                and tried to find her in a scary forest. He eventually succeeds!</i>

                            <PromptInput completion={completion} setCompletion={setCompletion}/>
                        </div>

                    </motion.div>
                </div>
            </Container>
        </>
    )
}
