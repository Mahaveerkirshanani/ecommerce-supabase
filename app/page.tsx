import HeroSection from '@/components/HeroSection'
import MainLayout from '@/components/Layout/MainLayout'
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import React from 'react'
import { logout } from './logout/action'

const Home = async () => {


  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  console.log(`data:${data}, error:${error}`)

  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <MainLayout>
     <HeroSection/>
     <div className='absolute top-[70%]'>
      
      <form action={logout}>
        <Button type='submit'>Logout</Button>
      </form>
     </div>
    </MainLayout>
  )
}

export default Home