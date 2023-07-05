import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGhost, faRobot, faPaw, faSkullCrossbones, faDungeon, faHatWizard} from '@fortawesome/free-solid-svg-icons'

export default function HomeLayout({}) {

    const [animate, setAnimate] = useState([
        {
            name: 'Story',
            label: 'story',
            active: {opacity: 0},
            icon: faGhost,
            animation: {opacity: 1, y: -120},
            type: 'pink',
        },
        {
            name: 'Test2',
            label: 'test2',
            active: {opacity: 0},
            icon: faRobot,
            animation: {opacity: 1, y: -120},
        },
        {
            name: 'Test3',
            label: 'test3',
            active: {opacity: 0},
            icon: faPaw,
            animation: 'Hello',
        },
        {
            name: 'Test4',
            label: 'test2',
            active: {opacity: 0},
            icon: faSkullCrossbones,
            animation: 'Hello',
        },
        {
            name: 'Test5',
            label: 'test3',
            active: {opacity: 0},
            icon: faDungeon,
            animation: 'Hello',
        },
        {
            name: 'Test6',
            label: 'test3',
            active: {opacity: 0},
            icon: faHatWizard,
            animation: 'Hello',
        },
    ])

    function setActiveLink(index, item) {
        const newAnimate = [...animate]
        newAnimate[index].active = item.animation
        setAnimate(newAnimate)
    }

    return (
        <div className={''}>
            <motion.div exit={{opacity: 0}} className={'w-full text-center mb-10'}>
                <h1>Welcome to Storymaker</h1>
                <p>With this application you can create stories with just a few words.</p>

            </motion.div>
            <div className="grid grid-cols-3 md:grid-rows-2 gap-10 w-full home-cards">
                {
                    animate.map((item, index) => {
                        return <Link href={`/prompt/${item.label}`} onClick={() => setActiveLink(index, item)}>
                            <motion.div exit={item.active}
                                        className={`home-cards__block home-cards__block--${item.type} overflow-hidden`}>
                                <div
                                    className={'w-full h-full relative flex items-center justify-center'}
                                >
                                    <FontAwesomeIcon className={'absolute z-20 text-[100px] text-white'}
                                                     icon={item.icon}/>
                                    <Image
                                        src={`/bg-${index + 1}.svg`}
                                        alt="Next.js Logo"
                                        fill
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
