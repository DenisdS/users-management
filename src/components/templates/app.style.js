import { createUseStyles } from 'react-jss'

const templateStyle = createUseStyles({
  '@global': {
    body: {
      fontFamily: 'Verdana, Arial, Helvetica, sans-serif'
    },
    li: {
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
      color: '#000'
    },
    h2: {
      fontSize: '18px'
    },
    p: {
      fontSize: '14px',
      lineHeight: '20px'
    }
  },
  header: {
    gridArea: 'header'
  },
  nav: {
    gridArea: 'nav'
  },
  aside: {
    gridArea: 'aside'
  },
  main: {
    gridArea: 'main',
    display: 'grid'
  },
  container: {
    display: 'grid',
    gridTemplateAreas: `
      'header header'
      'aside nav'
      'aside main'
    `,
    gridTemplateColumns: `
      '200px 1fr'
    `,
    gridTemplateRows: `    gridTemplateColumns: '200px 1fr'
      125px 1fr
    `
  }
})

export default templateStyle;
