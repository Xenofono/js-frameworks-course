import { createStyles, Theme, makeStyles, useTheme } from "@material-ui/core/styles";


export const classesCommon = makeStyles((theme:Theme) => 
  createStyles({
    root:{
      width:'90%',
      margin: 'auto'
    },
    list:{
      width:'50%',
      margin: 'auto'
    }
    ,
    itemRoot: {
      '&$disabled': {
        opacity: 1
      },
      '&:hover' :{
        backgroundColor : '#eee !important'
      }
    },
    correct: {
      backgroundColor: "#2ECC40",
  
    },
    incorrect: {
      backgroundColor: "#FF4136",
  
    },
    listItemIconHidden:{
      display: 'none'
    },
    listItemIconShow:{
      display: 'block'
    }
    ,
    iconCorrect:{
      color: "#2ECC40"
    },
    iconIncorrect:{
      color: "#FF4136"
    },
    innerDiv:{},
    disabled: {}
    
  })
)

export const classesMobile = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      margin: 'auto',
    },
    list:{
      width:'100%',
      margin: 'auto'
    },
    innerDiv:{},
    
  })
);

export const classesLandscape = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-even'
    },
    innerDiv:{width:'50%',
  margin: '2rem'},
    
  })
);