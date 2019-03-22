import React from 'react';
import Posts from '../components/Posts';
import { shallow, mount } from 'enzyme';

const props = { match: { params: { id: "movies" }}}

describe('SubReddits Page', () => {
  it('renders', () => {
    const component = shallow(<Posts {...props}/>);
    expect(component.length).toBe(1);
  });

  it('displays the correct subreddit title', () => {
    const component = mount(<Posts {...props}/>);
    component.setState({ loading: false });
    expect(component.find('h3').text()).toBe('r/movies');
  });

  it('displays Cards', () => {
    const posts = [
      {
        postedBy: 'mugen',
        postedAt: 1234894732,
        thumbnail: 'http://classictoonami.com/pics/mugen.jpg',
        title: 'war of the words',
        url: 'http://www.reddit.com/r/anime/posts/12345'
      },
      {
        postedBy: 'jin',
        postedAt: 1234894780,
        thumbnail: 'http://classictoonami.com/pics/jin.jpg',
        title: 'war of the words',
        url: 'http://www.reddit.com/r/anime/posts/12347'
      }
    ];
    const component = mount(<Posts {...props}/>);
    component.setState({ loading: false, posts });
    expect(component.find('Card').length).toBe(2);
  });
});
