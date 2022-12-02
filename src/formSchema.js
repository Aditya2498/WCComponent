export const formSchema = {
  type: "object",
  properties: {
    page_label: { type: "string" },
    fields: {
      type: "array",
      maxItems: 100,
      items: {
        type:"object",
        properties: {
          field_id: { type: "string" },
          field_label: { type: "string" },
          field_mandatory: { type: "string" },
          field_placeholder: { type: "string" },
          field_type: { type: "string" },
          field_regex: { type: "string" },
          field_value: { type: "string" },
          field_options: {
            type: "array",
            maxItems: 100,
            items: {
              type:"object",
              properties: {
                option_label: { type: "string" },
              },
            },
          },
        },
      },
    },
  },
};
