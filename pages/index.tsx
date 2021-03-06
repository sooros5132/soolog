import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import config from 'site-setting';
import { IResponseSuccess } from 'src-server/types/response';
import NotionRender from 'src/components/modules/NotionRender';
import { IGetNotion, NotionPagesRetrieve } from 'src/types/notion';
import { SWRConfig } from 'swr';

interface HomeProps {
  slug: string;
  notionBlocksChildrenList: IGetNotion;
  pageInfo: NotionPagesRetrieve;
}
const Home: NextPage<HomeProps> = ({ slug, notionBlocksChildrenList, pageInfo }) => {
  // const [query, setQuery] = useState<{
  //   start_cursor?: string;
  //   page_size?: number;
  // }>();

  return (
    <SWRConfig
      value={{
        fallback: {
          ['/notion/blocks/children/list/' + slug]: notionBlocksChildrenList,
          ['/notion/pages/' + slug]: pageInfo
        }
      }}
    >
      <NotionRender slug={slug} />
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const [blocks, pageInfo] = await Promise.all([
      axios
        .get<IResponseSuccess<IGetNotion>>(
          config.path + '/notion/blocks/children/list/' + config.notion.baseBlock
        )
        .then((res) => res.data),
      axios
        .get<IResponseSuccess<NotionPagesRetrieve>>(
          config.path + '/notion/pages/' + config.notion.baseBlock
        )
        .then((res) => res.data)
    ]);

    if (!blocks?.success || !pageInfo?.success) {
      throw '';
    }
    return {
      props: {
        slug: config.notion.baseBlock,
        notionBlocksChildrenList: blocks.result,
        pageInfo: pageInfo.result
      },
      revalidate: 600
    };
  } catch (e) {
    return {
      notFound: true
    };
  }
};

export default Home;
