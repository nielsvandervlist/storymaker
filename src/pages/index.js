import {useAuth} from '@/hooks/auth'
import React from 'react'
import HomeLayout from '@/components/layout/home-layout'
import Container from '@/components/layout/container'

export default function Home() {
    const {user} = useAuth({middleware: 'guest'})
    return <>
        <Container small>
            <HomeLayout/>
        </Container>
    </>
}
