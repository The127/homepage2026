import { Link, Meta, Title } from '@solidjs/meta';
import { useLocation } from '@solidjs/router';
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, type Image } from '~/site';

interface Props {
  /** Leave it out on the home page, which uses the site name alone. */
  title?: string;
  description: string;
  /** A 1200x630 image for link previews. Without one, the site's image is used. */
  image?: Image;
}

/**
 * Sets the page title and everything link previews read, for example in
 * Discord, Mastodon or Slack: Open Graph and Twitter card tags with an
 * absolute URL and image.
 */
export default function PageMeta(props: Props) {
  const location = useLocation();
  const fullTitle = () => (props.title ? `${props.title} · ${SITE_NAME}` : SITE_NAME);
  const url = () => SITE_URL + location.pathname;
  const image = () => props.image ?? DEFAULT_IMAGE;
  const imageUrl = () => SITE_URL + image().src;

  return (
    <>
      <Title>{fullTitle()}</Title>
      <Meta name="description" content={props.description} />
      <Link rel="canonical" href={url()} />

      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" content={SITE_NAME} />
      <Meta property="og:url" content={url()} />
      <Meta property="og:title" content={fullTitle()} />
      <Meta property="og:description" content={props.description} />
      <Meta property="og:image" content={imageUrl()} />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:image:alt" content={image().alt} />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={fullTitle()} />
      <Meta name="twitter:description" content={props.description} />
      <Meta name="twitter:image" content={imageUrl()} />
    </>
  );
}
