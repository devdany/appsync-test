import * as React from "react";
import { createBlog } from "./graphql/mutations";
import { Form } from "./Form";
import { Blogs } from "./Blogs";
import { useMutation } from '@apollo/client'
import { gql } from '@apollo/client'
import { Mutation, MutationCreateBlogArgs } from './@types/graphql'

export default function App() {
  const [createBlogReq] = useMutation<Mutation, MutationCreateBlogArgs>(gql(createBlog))
  const handleSubmit = (input: any) => {
    createBlogReq({
      variables: { input }
    })
      .then(({ data }) => {
        if (data) {
          const result = data.createBlog
          console.log(result)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Form
        onSubmit={handleSubmit}
      />
      <Blogs />
    </div>
  )
}