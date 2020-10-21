import React from 'react'
import {TextStyle, Layout} from '@shopify/polaris';

const OrderDate = () => {
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
