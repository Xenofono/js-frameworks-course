import React, {FunctionComponent} from 'react';
import Form from '../../components/Form/Form'

interface StartProps {
    setGameDetails: Function
}

const Start: FunctionComponent<StartProps> = ({setGameDetails}) => {


    return <div>
        <Form setGameDetails={setGameDetails}></Form>
    </div>
}


export default Start;