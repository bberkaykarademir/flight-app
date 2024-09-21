import React from 'react'
import SortMyFlights from '@/app/components/myFlights/SortMyFlights'
import MyFlights from '@/app/components/myFlights/MyFlights'

const MyFlightsList = () => {
  return (
    <div className="wrapper flex-grow pt-7 flex flex-col gap-10">
        <SortMyFlights />
        <MyFlights />
      </div>
  )
}

export default MyFlightsList