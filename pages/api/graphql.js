import { ApolloServer } from "@saeris/apollo-server-vercel";
import { Monster, Blurb, Layout } from "../../models";

const typeDefs = `
type Monster {
    id: String!
    name: String!
    size: String!
    type: String
    alignment: String
    armor_class: Int
    armor_description: String
    hit_points: Int
    hit_dice: String
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    strength_save: Int
    dexterity_save: Int
    constitution_save: Int
    intelligence_save: Int
    wisdom_save: Int
    charisma_save: Int
    challenge_rating: Int
    senses: String
    languages: String
    damage_vulnerabilities: String
    damage_resistances: String
    damage_immunities: String
    condition_immunities: String
    actions: [Action!]!
    reactions: [Action!]
    legendary_actions: [Action!]
    special_abilities: [Action!]
}

type Action {
    name: String!
    desc: String!
}

type Blurb {
    id: String!
    header: String
    body: String!
    important: Boolean
}

type Layout {
    id: String!
    elements: [LayoutElement!]!
}

type LayoutElement {
    id: String!
    type: String!
}

input MonsterInput {
    id: String!
    name: String!
    size: String!
    type: String
    alignment: String
    armor_class: Int
    armor_description: String
    hit_points: Int
    hit_dice: String
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    strength_save: Int
    dexterity_save: Int
    constitution_save: Int
    intelligence_save: Int
    wisdom_save: Int
    charisma_save: Int
    challenge_rating: Int
    senses: String
    languages: String
    damage_vulnerabilities: String
    damage_resistances: String
    damage_immunities: String
    condition_immunities: String
    actions: [ActionInput!]!
    reactions: [ActionInput!]
    legendary_actions: [ActionInput!]
    special_abilities: [ActionInput!]
}

input ActionInput {
    name: String!
    desc: String!
}

input BlurbInput {
    id: String!
    header: String
    body: String!
    important: Boolean
}

input LayoutInput {
    id: String!
    elements: [LayoutElementInput!]!
}

input LayoutElementInput {
    id: String!
    type: String!
}

type Query {
    monsters: [Monster]
    monsterById(id: String): [Monster]
    monsterByCR(challenge_rating: Int): [Monster]

    blurbs: [Blurb]
    blurb(id: String): [Blurb]

    layouts: [Layout]
    layout(id: String): [Layout]
}

type Mutation {
    createMonster(monster: MonsterInput): Monster
    removeMonster(monsterId: String!): Monster

    createBlurb(blurb: BlurbInput): Blurb
    removeBlurb(blurbId: String!): Blurb
    
    createLayout(layout: LayoutInput): Layout
    removeLayout(layoutId: String!): Layout
}
`;

const resolvers = {
  Query: {
    monsters: async () => {
      return Monster.find();
    },
    monsterById: async (parent, { id }) => {
      return Monster.findOne({ id: id });
    },
    monsterByCR: async (parent, { challenge_rating }) => {
      return Monster.findAll({ challenge_rating: challenge_rating });
    },

    blurbs: async () => {
      return Blurb.find();
    },
    blurb: async (parent, { id }) => {
      return Blurb.findOne({ id: id });
    },

    layouts: async () => {
      return Layout.find();
    },
    layout: async (parent, { id }) => {
      return Layout.findOne({ id: id });
    },
  },
  Mutation: {
    createMonster: async (parent, { monster }) => {},
    removeMonster: async (parent, { monsterId }) => {
      return Monster.findOneAndDelete({ id: monsterId });
    },

    createBlurb: async (parent, { blurb }) => {},
    removeBlurb: async (parent, { blurbId }) => {
      return Blurb.findOneAndDelete({ id: blurbId });
    },

    createLayout: async (parent, { layout }) => {},
    removeLayout: async (parent, { layoutId }) => {
      return Layout.findOneAndDelete({ id: layoutId });
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server.createHandler();

// const schema = makeExecutableSchema(typeDefs, resolvers);

// export default async (req, res) => {
//   const { method, body, query: qs } = req;

//   if (method !== "GET" && method !== "POST") {
//     return res
//       .status(405)
//       .setHeader("Allow", "GET,POST")
//       .send("Method not allowed");
//   }

//   if (!qs.query && method === "GET")
//     return res.status(400).json({
//       statusCode: 400,
//       error: "Bad Request",
//       message: "GET query missing",
//     });

//   const { query, variables, operationName } = method === "GET" ? qs : body;

//   const result = await graphql(
//     schema,
//     query,
//     null,
//     null,
//     variables,
//     operationName
//   );

//   res.status(200).json(result);
// };
