import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spin } from "antd";
import Country from "../../component/Country/index";
import { SpinWrapper } from "./styles";

const Countries = () => (
  <Query
    query={gql`
      {
        continents {
          code
          name
          countries {
            code
            name
            native
            phone
            currency
            emoji
            emojiU
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading)
        return (
          <SpinWrapper>
            <Spin size="large" className="loading" />
          </SpinWrapper>
        );
      if (error) return <p>Error :(</p>;
      return <Country data={data.continents} />;
    }}
  </Query>
);
export default Countries;
