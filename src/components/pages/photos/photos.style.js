import { createUseStyles } from 'react-jss'

const photosStyle = createUseStyles({
  listThumbnailUrl: {
    '& li': {
      display: 'inline'
    },
    width: '600px',
    overflowX: 'auto',
    whiteSpace: 'nowrap'
  }
})

export default photosStyle;
