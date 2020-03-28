import { createUseStyles } from 'react-jss'

const listStyle = createUseStyles({
  aside: {
    gridArea: 'aside',
    display: 'grid',
    background: '#E6F2F5',
    justifyContent: 'end',
    '& li': {
      background: '#8DBEEB'
    }
  }
})

export default listStyle;
