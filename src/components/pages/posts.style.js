import { createUseStyles } from 'react-jss'

const postsStyle = createUseStyles({
  ul:{
    display: 'grid',
    gap: '15px',
    '& li': {
      border: '2px #8DBEEB solid',
      borderRadius: '7px  '
    },
    '& article': {
      display: 'grid',
      gridTemplateColumns: '90%'
    }
  }
})

export default postsStyle;
