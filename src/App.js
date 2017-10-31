import React, { Component } from 'react';

import * as glamor from 'glamor'
import glamorous from 'glamorous'

import Items from "./Components/Items/Items"

const TitleContainer = glamorous.div({
  padding: '0 4rem',
  display: 'flex',
  boxShadow: '0 4px 4px #eee',
})

const Title = glamorous.span({
  fontSize: 24,
  padding: '0.5rem 0',
  // flex: 1,
  color: '#3b3838',
})

const Divider = glamor.css({
  // height: 80,
  width: 1,
  backgroundColor: '#989898',
  margin: '12px 2rem',
})

const Links = glamorous.span({
  // justifyContent: 'flex-end',
  // display: 'flex',
  // flex: 4,
  // justifyContent: 'flex-end',
  alignSelf: 'center',

  // padding: '0.5rem 0',
})

const Link = glamorous.a({
  margin: '0 0.5rem',
  color: '#989898',
  textDecoration: 'none',
  ':hover': {
    color: '#3b3838',
  }
  // textTransform: 'uppercase',
})

const MainPromo = glamorous.div({
  height: 500,
  backgroundImage: 'url(./imgs/barcelet.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

const SideBar = glamorous.span({

})


class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleContainer>
          <Title>The Store</Title>
          <div className={`${Divider}`} ></div>
          <Links>
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/support">Support</Link>
          </Links>
          <div><i class="fa fa-shopping-cart" aria-hidden='true'></i></div>
        </TitleContainer>
        <MainPromo>
          <div>New Season Arrivals</div>
          <div>Check out all the new trends</div>
          <div><a href="">Shop Now</a></div>
        </MainPromo>
        <Items />
      </div>
    );
  }
}

export default App;
