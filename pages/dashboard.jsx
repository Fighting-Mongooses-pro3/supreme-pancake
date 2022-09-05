import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { Page } from '../components'

const Dashboard = (props) => {
  const { user } = useUser()


  return (
    <Page currentPage="Dashboard">
    {
      user ? (
        <div className="">

        </div>
        ) 
        
        : null       
      }
      </Page>
  )
}

export default Dashboard