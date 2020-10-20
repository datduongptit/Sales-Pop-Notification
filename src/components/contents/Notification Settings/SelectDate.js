import React, {useState, useCallback} from 'react'
import {TextStyle, Layout, Select} from '@shopify/polaris';

const SelectDate = () => {
    const options = [
        {label: 'Date time', value: 'Date time'},
        {label: 'Time ago', value: 'Time ago'},
    ];

    const [selected, setSelected] = useState('Live Order');

    const handleSelectChange = useCallback((value) => setSelected(value), []);
    return (
        <div className='mb-3'>
          <Layout >
                <Layout.Section secondary>
                    <TextStyle variation='strong'>Select Date Format</TextStyle>
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

export default SelectDate
