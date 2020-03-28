import { createUseStyles } from 'react-jss'

const templateStyle = createUseStyles({
  '@global': {
    body: {
      fontFamily: 'Verdana, Arial, Helvetica, sans-serif'
    },
    ul: {
      padding: '0'
    },
    li: {
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
      color: '#000'
    },
    h2: {
      fontSize: '18px',
      margin: '0'
    },
    h3 : {
      margin: '0'
    },
    p: {
      fontSize: '14px',
      lineHeight: '30px',
      margin: '0'
    }
  },
  header: {
    gridArea: 'header'
  },
  nav: {
    gridArea: 'nav'
  },
  aside: {
    padding: '0',
    gridArea: 'aside'
  },
  main: {
    gridArea: 'main',
    display: 'grid'
  },
  ul: {
    padding: '0'
  },
  container: {
    display: 'grid',
    gridTemplateAreas: `
      'header header'
      'aside nav'
      'aside main'
    `,
    gridTemplateColumns: `
      200px 1fr
    `,
    gridTemplateRows: `
      125px 50px 1fr
    `,
    gap: '15px 35px'
  }
})

export default templateStyle;
