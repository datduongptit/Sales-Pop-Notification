import React, {useState} from 'react'
import {TextStyle, Layout, OptionList} from '@shopify/polaris';

const OrderStatus = () => {
    const [selected, setSelected] = useState('');
    return (
        <div className='mb-3'>
            <Layout>
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Order status</TextStyle>
                </Layout.Section>
                <Layout.Section>
                    <OptionList
                    onChange={setSelected}
                    options={[
                      {value: 'online_store', label: 'Online Store'},
                      {value: 'messenger', label: 'Messenger'},
                      {value: 'facebook', label: 'Facebook'},
                    ]}
                    selected={selected}
                    allowMultiple>
                    </OptionList>

                </Layout.Section> 
            </Layout>
        </div>
    )
}

export default OrderStatus
