import React, {useCallback, useState} from 'react';
import {Button, Modal, TextField, Layout, Checkbox, TextStyle} from '@shopify/polaris';
import Customer from './Customer';
import SelectCustomer from './SelectCustomer';
import SelectProduct from './SelectProduct';
import OrderDate from './OrderDate';

const AddModal = () => {
    const [active, setActive] = useState(false);
    const handleChange = useCallback(() => setActive(!active), [active]);

    const [checked, setChecked] = useState(false);
    const handleChangeCheck = useCallback((newChecked) => setChecked(newChecked), []);

    const activator = <Button onClick={handleChange}>Add new manual sale</Button>;
    return (
        <>
          <div className='mb-3'>
            <Modal
              large
              activator={activator}
              open={active}
              onClose={handleChange}
              title="Reach more shoppers with Instagram product tags"
              primaryAction={{
                content: 'OK',
                onAction: handleChange,
              }}
              secondaryActions={[
                {
                  content: 'Cancel',
                  onAction: handleChange,
                },
              ]}
            >
              <Modal.Section>
                <div className='mb-3'>
                  <Layout>
                      <Layout.Section secondary>
                          <TextStyle variation='strong'>Publish Order</TextStyle>
                      </Layout.Section>
                      <Layout.Section>
                          <Checkbox
                              checked={checked}
                              onChange={handleChangeCheck}
                          />
                      </Layout.Section> 
                  </Layout>
                </div>

                <Customer />

                <SelectCustomer />

                <SelectProduct />

                <OrderDate />

              </Modal.Section>
            </Modal>
          </div>
        </>
    )
}

export default AddModal
