import { createUseStyles } from 'react-jss'

const listStyle = createUseStyles({
  aside: {
    gridArea: 'aside',
    display: 'grid',
    background: '#E6F2F5',
    borderLeft: '15px #fff solid',
    justifyContent: 'center',
    '& li': {
      width: '165px',
      background: '#8DBEEB',
      padding: '0 10px 0 10px',
      marginTop: '15px',
      '& a':{
        fontSize: '12px',
        padding: '15px 163px 12px 162px',
        '& h4': {
          margin: '0'
        },
        '& p': {
          lineHeight: '25px',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }
      }
    },
    '& li:first-child': {
      marginTop: '0'
    }
  }
})

export default listStyle;
