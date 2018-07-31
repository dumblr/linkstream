import React from 'react';
import moment from 'moment';
import {
  ListWrapper,
  EachListItem,
  LinkTitle,
  LinkDescription,
  LinkTag,
  LinkDelete,
  LinkTime
} from './styles';

const LinkList = ({ links, isOwner, deleteFn }) => (
  <ListWrapper>
    {links.map((link, i) => (
      <EachListItem key={i}>
        <LinkTitle>
          <LinkTag href={`${link.titleContent}`}>{link.titleContent}</LinkTag>
        </LinkTitle>
        <LinkDescription>{link.textContent}</LinkDescription>
        <LinkTime>
          {moment(link.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}
        </LinkTime>
        {isOwner && (
          <LinkDelete onClick={() => deleteFn(link.postId)}>Delete</LinkDelete>
        )}
      </EachListItem>
    ))}
  </ListWrapper>
);

export default LinkList;
