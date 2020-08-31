import React, { FunctionComponent} from 'react';
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";


interface ScoreProps {
    score: number,
    quizEnded: boolean
}

const Score:FunctionComponent<ScoreProps> = ({score, quizEnded}) => {

    const history = useHistory();

    if(!quizEnded){
        history.push("/")
    }

    return <div>
        {score}
    </div>
}

const mapStateToProps = (state: any) => ({
    score: state.score,
    quizEnded: state.quizEnded
})

export default connect(mapStateToProps)(Score);