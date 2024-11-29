
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

interface NextDelivery {
    title: string
    message: string
    totalPrice: number
    freeGift: boolean
}

export const Welcome = () => {
    const { userId } = useParams();
    const nextDelivery = useQuery({
        queryKey: ['getNextDelivery', userId],
        queryFn: () => axios.get<NextDelivery>(`http://localhost:2000/comms/your-next-delivery/${userId}`), // this causes cors issues when running locally, I had to install a brower addon to be able to see the page
    });

    return(
        <div className='card'>
            <div>
                <img src={require('./cat.jpg')} className='image'/>
            </div>
            <div style={{alignContent: 'center'}}>
                <h2 style={{color: 'green'}}>{nextDelivery.data?.data.title}</h2>
                <p>{nextDelivery.data?.data.message}</p>
                <h3>Total Price: £{nextDelivery.data?.data.totalPrice}</h3>
            </div>
        </div>
    )
} 

