import React, { Component } from 'react';

import glamorous from 'glamorous'

const Info = glamorous.div({
  height: 20,
  padding: 5,
  backgroundColor: 'black',
})

const TitleContainer = glamorous.div({
  // height: 80,
  width: '100%',
  padding: '0 2rem',
  display: 'flex',
  boxShadow: '0 4px 4px #eee',
})

const Title = glamorous.span({
  fontSize: 36,
  padding: '0.5rem 0',
  flex: 1,
})

const Links = glamorous.span({
  // justifyContent: 'flex-end',
  display: 'flex',
  flex: 4,
  justifyContent: 'flex-end',
  alignSelf: 'center',
  // padding: '0.5rem 0',
})

const Link = glamorous.span({
  // height: '100%',
  // flexDirection: 'row',
  padding: '0 0.5rem',
  // alignItems: 'center',
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <TitleContainer>
          <Title>Store</Title>
          <Links>
            <Link>Brands</Link>
            <Link>Departments</Link>
            <Link>Journal</Link>
            <Link>Contact</Link>
            <Link>CART</Link>
          </Links>
        </TitleContainer>
      </div>
    );
  }
}

export default App;
