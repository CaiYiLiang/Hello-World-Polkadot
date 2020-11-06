import React from 'react';

import {
    Menu,
    Container,
    Image,
    Label,
} from 'semantic-ui-react';


function Main() {
    return (
        <Menu
            attached='top'
            tabular
            style={{
                backgroundColor: '#fff',
                borderColor: '#fff',
                paddingBottom: '1em',
            }}
        >
            <Container>
                <Menu.Menu position='right' style={{ alignItems: 'center' }}>
                    <Label
                        as='a'
                        href='https://github.com/CaiYiLiang/Polkablocks-FE-Hackathon'
                        color='pink'
                        target='_blank'
                    >
                        Multisig challenge - Hello World Hackathon
            <Label.Detail>By CherryLiang</Label.Detail>
                    </Label>
                </Menu.Menu>
            </Container>
        </Menu>
    );
}

export default function NameLabel() {
    return <Main />;
}
