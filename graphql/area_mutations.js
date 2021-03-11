import gql from "graphql-tag";

const ADD_AREA = gql`
  mutation MyMutation($object: areas_insert_input!) {
    insert_areas_one(object: $object) {
      id
    }
  }
`;

module.exports = {
  ADD_AREA,
};
