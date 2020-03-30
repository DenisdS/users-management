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
      fontSize: '14px',
      margin: '0',
      lineHeight: '20px'
    },
    h3 : {
      fontSize: '14px',
      margin: '0',
      lineHeight: '20px'
    },
    h4: {
      fontSize: '14px'
    },
    p: {
      fontSize: '14px',
      lineHeight: '20px',
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
    gridArea: 'main'
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
      220px 1fr
    `,
    gridTemplateRows: `
      125px 50px 1fr
    `,
    gap: '15px 35px'
  }
})

export default templateStyle;
