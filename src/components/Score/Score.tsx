import React, { FunctionComponent} from 'react';
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";
import { List, ListItem, ListItemText, ListItemIcon, Typography } from "@material-ui/core";
import AnswersModel from '../../models/AnswerModel'

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import { createStyles, Theme, makeStyles, useTheme } from "@material-ui/core/styles";

const styles = makeStyles((theme:Theme) => ({
    correct:{
        color:"#2ECC40"
    },
    incorrect:{
        color: "#FF4136"
    }
}))


interface ScoreProps {
    score: number,
    quizEnded: boolean,
    answers: AnswersModel[];
}

const Score:FunctionComponent<ScoreProps> = ({score, quizEnded, answers}) => {

    const history = useHistory();
    const classes = styles();

    if(!quizEnded){
        history.push("/")
    }
    const displayAnswers = answers.map(answer => {
        return <ListItem divider key={answer.question}>
            <ListItemText>{answer.question}: 
            <ListItemIcon>
            {answer.correct ?
             <CheckIcon classes={{root:classes.correct}}/> :
              <CloseIcon classes={{root:classes.incorrect}}/>}
            </ListItemIcon>
            </ListItemText>
        </ListItem>
    })

    return <div>
        <List>
            {displayAnswers}
        </List>
        <Typography variant="h6">Dina poäng: {score}</Typography>
        
    </div>
}

const mapStateToProps = (state: any) => ({
    score: state.score,
    quizEnded: state.quizEnded,
    answers: state.answers
})

export default connect(mapStateToProps)(Score);