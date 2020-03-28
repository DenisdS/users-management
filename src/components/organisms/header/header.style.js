import { createUseStyles } from 'react-jss'

const headerStyle = createUseStyles({
  header: {
    gridArea: 'header',
    display: 'grid',
    background: '#7AB0FF',
    justifyContent: 'center',
    padding: '10px 0'
  }
})

export default headerStyle;
