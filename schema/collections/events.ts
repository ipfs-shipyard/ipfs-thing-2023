export const eventCollectionSchema: any = {
  label: "Tracks",
  name: "event",
  path: "content/tracks",
  format: "md",
  fields: [
    {
      label: "Name",
      name: "name",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      label: "Organization",
      name: "org",
      type: "string",
    },
    {
      label: "Event Website",
      name: "website",
      type: "string",
    },
    {
      label: "Directly Responsible Individual",
      name: "dri",
      type: "string",
    },
    {
      label: "Date",
      name: "date",
      type: "datetime",
      ui: {
        dateFormat: "MMMM DD YYYY",
        timeFormat: "hh:mm A",
      },
    },
    {
      label: "Days",
      name: "days",
      type: "number",
    },
    {
      label: "Times",
      name: "times",
      type: "string",
    },
    {
      label: "Venue Name",
      name: "venueName",
      type: "string",
    },
    {
      label: "Venue Address",
      name: "venueAddress",
      type: "string",
    },
    {
      label: "Attendess",
      name: "attendees",
      type: "number",
    },
    {
      label: "Difficulty",
      name: "difficulty",
      type: "string",
    },
    {
      label: "Logo Mark",
      name: "logomark",
      type: "string",
    },
    {
      label: "Description",
      name: "description",
      type: "string",
    },
    {
      label: "Priority",
      name: "priority",
      type: "number",
    },
    {
      label: "Category",
      name: "category",
      type: "string",
      options: [
        {
          label: 'None',
          value: '',
        },
        {
          label: 'PLN Event',
          value: 'PLN Event',
        },
        {
          label: 'Industry Event',
          value: 'Industry Event',
        },
      ],
    },
    {
      label: "Tags",
      name: "tags",
      type: "string",
      list: true,
    },
  ],
}