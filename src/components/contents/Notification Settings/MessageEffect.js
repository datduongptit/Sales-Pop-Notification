import React from 'react'
import {TextStyle, Layout} from '@shopify/polaris';

const MessageEffect = () => {
    return (
        <div className='mb-3'>
            <div className='mb-3'>
            <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Message display effect</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <select style={{width:'250px', height: '30px', margin:0, padding:'5px'}}>
                            <optgroup label='Bouncing Exit'>
                                <option>Bounce</option>
                                <option>Flash</option>
                                <option>Pulse</option>
                                <option>Shake</option>
                                <option>Bounce out up</option>
                            </optgroup>
                        </select> 
                    </Layout.Section> 
            </Layout>
            </div>
            <Layout>
                    <Layout.Section secondary>
                        <TextStyle variation='strong'>Message hidden effect</TextStyle>
                    </Layout.Section>
                    <Layout.Section>
                        <select style={{width:'250px', height: '30px', margin:0, padding:'5px'}}>
                            <optgroup label='Bouncing Exit'>
                                <option>Bounce</option>
                                <option>Flash</option>
                                <option>Pulse</option>
                                <option>Shake</option>
                                <option>Bounce out up</option>
                            </optgroup>
                        </select> 
                    </Layout.Section> 
            </Layout>        
        </div>
    )
}

export default MessageEffect
