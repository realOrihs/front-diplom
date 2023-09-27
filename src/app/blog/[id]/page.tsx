import React from 'react';
import {IGameInfo} from '~shared/types/IGameInfo';
import {BreadcrumbsSection} from '~widgets/BreadcrumbsSection';
import {IBreadcrumb} from '~shared/types/IBreadcrumb';
import {Navigate} from '~shared/ui/Navigate/Navigate';
import {PageWrapper} from '~app/page-wrapper';
import {PostSection} from '~widgets/PostSection';
import {IPost} from '~shared/types/IPost';
import {client} from '~shared/api/Client';
import {Head} from 'next/document';
import {Metadata} from 'next';

interface GameProps {
  params: {id: string};
}

async function _getPostById(id: string): Promise<IPost | null> {
  try {
    const response = await client.blog.getPostById(id);
    return response.data;
  } catch (e) {
    return null;
  }
}

export async function generateMetadata({params}: GameProps): Promise<Metadata> {
  const post = await _getPostById(params.id);
  if (post?.attributes) {
    return {
      title: 'RSC - ' + post?.attributes.title,
    };
  }
  return {
    title: 'RSC',
  };
}

export default async function PostPage({params}: GameProps) {
  const post = await _getPostById(params.id);

  if (!post) return <Navigate to={'/'} />;

  const breadcrumbsItems: IBreadcrumb[] = [
    {label: 'Блог', url: '/blog'},
    {label: post.attributes.title, url: `/blog/${params.id}`},
  ];

  return (
    <>
      <PageWrapper>
        <BreadcrumbsSection items={breadcrumbsItems} />
        <PostSection post={post} />
      </PageWrapper>
    </>
  );
}
