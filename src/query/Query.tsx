import React from "react";
import { useQuery } from "@apollo/client";

interface IQueryParams {
  children: any;
  query: any;
}

export default function Query(params: IQueryParams) {

  const { data, loading, error } = useQuery(params.query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  
  return params.children({ data });
}
