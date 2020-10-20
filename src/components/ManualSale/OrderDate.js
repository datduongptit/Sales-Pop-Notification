import React, {useCallback, useState} from 'react'
import {TextStyle, Layout, TextField, DatePicker} from '@shopify/polaris';

const OrderDate = () => {
    const [{month, year}, setDate] = useState({month: 1, year: 2018});
    
    const [selectedDates, setSelectedDates] = useState({
        start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
        end: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    });

    const handleMonthChange = useCallback(
        (month, year) => setDate({month, year}),
        [],
    );
    return (
        <div className='mt-3'>
           <Layout>
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Custom Text</TextStyle>
                </Layout.Section>
                <Layout.Section>
                    <input style={{width: '90%', height: '40px'}} type='date' />
                </Layout.Section> 
            </Layout> 
        </div>
    )
}

export default OrderDate
