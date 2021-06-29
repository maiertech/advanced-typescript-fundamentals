type SerializationOptions = {
  formatting?: {
    getIndent?: () => number;
  };
};

function serializeJSON(value: any, options?: SerializationOptions) {
  const indent = options?.formatting?.getIndent?.();
  return JSON.stringify(value, null, indent);
}

const user = {
  name: 'Thilo Maier',
  twitter: 'maiertech',
};

const json = serializeJSON(user, { formatting: { getIndent: () => 2 } });

console.log(json);
