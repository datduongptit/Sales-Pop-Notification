import React, {useState, useCallback} from 'react'
import {TextStyle, Layout, Select, TextField} from '@shopify/polaris';

const Customer = () => {
    const options = [
        {label: 'Select Customer', value: 'Select Customer'},
        {label: 'Add Customer', value: 'Add Customer'}
    ];

    const [selected, setSelected] = useState('Select Customer');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    return (
        <div className='mb-3'>
          <Layout >
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Customer</TextStyle>
                </Layout.Section>
                <Layout.Section>
                    <div style={{width:'250px'}}>
                        <Select
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                        />
                    </div>
                </Layout.Section>
            </Layout> 
            {selected === 'Add Customer' ? (
                <div className="mt-3">
                    <Layout >
                        <Layout.Section secondary>
                                <TextStyle variation='strong'>Add Customer</TextStyle>
                        </Layout.Section>
                        <Layout.Section>
                            <div className="mb-3">
                                <TextField placeholder='First name' />
                            </div>
                            <div className="mb-3">
                                <TextField placeholder='Last name' />
                            </div>
                            <div className="mb-3">
                                <TextField placeholder='Last name' />
                            </div>
                        </Layout.Section>
                    </Layout>
                </div>
                 
                    ) : ''
                    }  
            </div>
    )
}

export default Customer
