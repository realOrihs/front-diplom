import React from 'react';
import {BlogSection} from '~widgets/BlogSection';
import {PageWrapper} from '~app/page-wrapper';
import {client} from '~shared/api/Client';
import {IPost} from '~shared/types/IPost';
import {Head} from 'next/document';
import {Metadata} from 'next';

async function _getPosts(): Promise<IPost[] | []> {
  try {
    const response = await client.blog.getPosts();
    return response.data;
  } catch (e) {
    return [];
  }
}

export const metadata: Metadata = {
  title: 'RSC - блог',
};

export const dynamic = 'force-dynamic';

export default async function Blog() {
  const posts = await _getPosts();
  return (
    <>
      <PageWrapper>
        <BlogSection posts={posts} />
      </PageWrapper>
    </>
  );
}
