import React, {useState, useCallback} from 'react'
import {TextStyle, Layout, Select, FormLayout, TextField} from '@shopify/polaris';
const SelectProduct = () => {
    const options = [
        {label: 'Select Customer', value: 'Select Customer'},
        {label: 'Waiting API', value: 'Waiting API'},
        {label: 'Waiting API', value: 'Waiting API'},
        {label: 'Waiting API', value: 'Waiting API'},
        {label: 'Waiting API', value: 'Waiting API'},
        {label: 'Waiting API', value: 'Waiting API'},
    ];

    const [selected, setSelected] = useState('');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    return (
        <div className='mt-3'>
            <Layout >
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Select Products</TextStyle>
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

export default SelectProduct
