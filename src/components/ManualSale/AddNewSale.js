import React from 'react'
import {Button, Page, Card, DataTable} from '@shopify/polaris';
import AddModal from './AddModal';


const AddNewSale = () => {
    const rows = [
    
    ]
    return (
        <div>
            <AddModal />
                <Card>
                    <DataTable
                    columnContentTypes={[
                        'text',
                        'text',
                        'text',
                        'numeric',
                        'numeric',
                        'numeric',
                    ]}
                    headings={[
                        'FIRST NAME',
                        'CITY',
                        'PRODUCT SELECTED',
                        'ORDER DATE/TIME',
                        'CLICKED TIMES',
                        'IGNORED TIMES',
                        'ACTION'
                    ]}
                    rows={rows}
                    />
                </Card>
        </div>
    )
}

export default AddNewSale
