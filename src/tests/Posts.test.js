import React from 'react';
import Posts from '../components/Posts';
import { mount } from 'enzyme';

const props = { match: { params: { id: "movies" }}}

fdescribe('SubReddits Page', () => {
  it('renders', () => {
    const posts = mount(<Posts {...props}/>);
    // console.log(posts.props)
    // console.log('heeeeeeeeeeeeeeeeeeey!!!!!!!!!!!!!!!!!',posts.debug())
    expect(posts.find('div').text()).toEqual('Testing!');
  });
});
