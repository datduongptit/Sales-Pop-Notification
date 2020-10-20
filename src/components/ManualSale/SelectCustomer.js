import React, {useState, useCallback} from 'react'
import {TextStyle, Layout, Select, FormLayout, TextField} from '@shopify/polaris';
const SelectCustomer = () => {
    const options = [];

    const [selected, setSelected] = useState('');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    return (
        <div>
            <Layout >
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Select Customer</TextStyle>
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
        </div>
    )
}

export default SelectCustomer
