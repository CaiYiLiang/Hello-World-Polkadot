import React, { useState } from 'react';
import { Form, Input, Grid, Label, Icon } from 'semantic-ui-react';
import { TxButton } from './substrate-lib/components';
import { useSubstrate } from './substrate-lib';

export default function Main(props) {
    const [status, setStatus] = useState();
    const [formData, setFormData] = useState({ threshold: 0, otherSignatories: '', addressTo: null, amount: 0 });
    const { api } = useSubstrate();


    const { accountPair } = props;

    const onChange = (_, data) =>
        setFormData(prev => ({ ...prev, [data.state]: data.value }));

    const { threshold, otherSignatories, addressTo, amount } = formData;

    return (
        <Grid.Column width={8}>
            <h1>Multisig Transfer</h1>
            <Form>
                <Form.Field>
                    <Label basic color='teal'>
                        <Icon name='hand point right' />
              1 Unit = 1000000000000
            </Label>
                </Form.Field>
                <Form.Field>Transfer more than the existential amount for account with 0 balance</Form.Field>
                <Form.Field>
                    <Input
                        fluid
                        label='To'
                        type='text'
                        placeholder='address'
                        state='addressTo'
                        onChange={onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                        fluid
                        label='Amount'
                        type='number'
                        state='amount'
                        onChange={onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                        fluid
                        label='Threshold'
                        type='number'
                        placeholder='Max as 10'
                        state='threshold'
                        onChange={onChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Input
                        fluid
                        label='Signatories'
                        type='text'
                        placeholder='Addresses, use comma for break-down'
                        state='otherSignatories'
                        onChange={onChange}
                    />
                </Form.Field>
                <Form.Field style={{ textAlign: 'center' }}>
                    <TxButton
                        accountPair={accountPair}
                        label='Submit'
                        type='SIGNED-TX'
                        setStatus={setStatus}
                        attrs={{
                            palletRpc: 'multisig',
                            callable: 'asMulti',
                            inputParams: [threshold, otherSignatories.split(','), null, api.tx.balances.transfer(addressTo, amount), false, 5000000000],
                            paramFields: [true, true, { optional: true }, true, true, true]
                        }}
                    />
                </Form.Field>
                <div style={{ overflowWrap: 'break-word' }}>{status}</div>
            </Form>
        </Grid.Column>
    );
}
