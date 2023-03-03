import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { fetchPosts, fetchTags } from '../redux/slices/posts';

export const Home = () => {
  // const dispatch = useDispatch();
  // const userData = useSelector((state) => state.auth.data);
  // const { posts, tags } = useSelector((state) => state.posts);

  // const isPostsLoading = posts.status === 'loading';
  // const isTagsLoading = tags.status === 'loading';

  // React.useEffect(() => {
  //   dispatch(fetchPosts());
  //   dispatch(fetchTags());
  // }, []);

  return (
    <>
      <Tabs aria-label="basic tabs example">
    <Tab label="Item One"  />
    <Tab label="Item Two"  />
    <Tab label="Item Three"  />
  </Tabs>
    </>
  );
};
