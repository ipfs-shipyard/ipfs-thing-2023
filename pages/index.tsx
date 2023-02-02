import { Blocks } from "../components/blocks-renderer";
import { useTina } from "tinacms/dist/react";
import { Layout } from "../components/layout";
import { client } from "../.tina/__generated__/client";

export default function IndexPage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const eventsData = props.events.eventConnection.edges
  const eventList = eventsData.map(event => {
    return (
      {
        name: event.node?.name,
        org: event.node?.org,
        dri: event.node?.dri,
        website: event.node?.website,
        date: event.node?.date,
        days: event.node?.days,
        times: event.node?.times,
        venueName: event.node?.venueName,
        venueAddress: event.node?.venueAddress,
        attendees: event.node?.attendees,
        difficulty: event.node?.difficulty,
        logomark: event.node?.logomark,
        description: event.node?.description,
        priority: event.node?.priority,
        tag: event.node?.tag,
      }
    )
  })

  return (
    /* TODO: needs ts type */
    <Layout rawData={data}>
      <Blocks {...data.page } events={eventList} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: `index.md`,
  });
  const eventsListData = await client.queries.eventConnection();
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
      events: eventsListData.data
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
