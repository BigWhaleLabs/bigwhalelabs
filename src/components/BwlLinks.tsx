import { LinkText } from 'components/Text'
import { bwlBlog, bwlGitHub, contactUs } from 'helpers/constants'

export default function () {
  return (
    <>
      <LinkText url={bwlBlog}>Blog</LinkText>
      <LinkText url={bwlGitHub}>GitHub</LinkText>
      <LinkText url={contactUs}>Contact</LinkText>
      <LinkText url="https://eggs.fun">Eggs?</LinkText>
    </>
  )
}
