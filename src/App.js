import React, { Component } from 'react';

import * as glamor from 'glamor'
import glamorous from 'glamorous'

import Items from "./Components/Items/Items"

const Info = glamorous.div({
  display: 'flex',
  height: 20,
  padding: 5,
  backgroundColor: 'black',
  color: 'white',
  fontSize: 12,
  justifyContent: 'center',
  alignItems: 'center',
})

const TitleContainer = glamorous.div({
  padding: '0 4rem',
  display: 'flex',
  boxShadow: '0 4px 4px #eee',
})

const Title = glamorous.span({
  fontSize: 36,
  padding: '0.5rem 0',
  flex: 1,
})

const MainPromo = glamorous.div({
  height: 500,

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
  margin: '0 0.5rem',
  textTransform: 'uppercase',
  // alignItems: 'center',
})

const SideBar = glamorous.span({

})


class App extends Component {
  render() {
    return (
      <div className="App">
        <Info>
          Free Shipping on orders over $150
        </Info>
        <TitleContainer>
          <Title>Store</Title>
          <Links>
            <Link>Brands</Link>
            <Link>Departments</Link>
            <Link>Journal</Link>
            <Link>Contact</Link>
            <Link>Cart</Link>
          </Links>
        </TitleContainer>
        <MainPromo />
        <SideBar>
          Filter by:
        </SideBar>
        <Items />
      </div>
    );
  }
}

export default App;
