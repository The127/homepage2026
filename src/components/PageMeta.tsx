import { Meta, Title } from '@solidjs/meta';

const SITE_NAME = 'Karolin Kostial';

interface Props {
  /** Leave it out on the home page, which uses the site name alone. */
  title?: string;
  description: string;
}

/** Sets the page title and the description that search results and link previews show. */
export default function PageMeta(props: Props) {
  const fullTitle = () => (props.title ? `${props.title} · ${SITE_NAME}` : SITE_NAME);
  return (
    <>
      <Title>{fullTitle()}</Title>
      <Meta name="description" content={props.description} />
      <Meta property="og:title" content={fullTitle()} />
      <Meta property="og:description" content={props.description} />
    </>
  );
}
