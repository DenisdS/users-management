import { createUseStyles } from 'react-jss'

const menuStyle = createUseStyles({
  nav: {
    gridArea: 'nav',
    background: '#E6F2F5',
    '& ul': {
      columnGap: '10px',
      display: 'grid',
      gridTemplateColumns: '75px 75px',
    },
    '& li': {
      display: 'inline',
      textAlign: 'center',
      fontSize: '12px',
      fontWeight: 'bold',
      '& a:hover, & a:focus': {
        borderTop: '16px #8DBEEB solid'
      }
    }
  }
})

export default menuStyle;
