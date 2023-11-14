import { LinkText } from 'components/Text'
import {
  bwlBlog,
  bwlGitHub,
  contactUs,
  whitepaperLink,
} from 'helpers/constants'

export default function () {
  return (
    <>
      <LinkText url={whitepaperLink}>Whitepaper</LinkText>
      <LinkText url={bwlBlog}>Blog</LinkText>
      <LinkText url={bwlGitHub}>GitHub</LinkText>
      <LinkText url={contactUs}>Contact</LinkText>
    </>
  )
}
