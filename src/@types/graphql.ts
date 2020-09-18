export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDateTime: any;
};

export type Query = {
  __typename?: 'Query';
  getBlog?: Maybe<Blog>;
  listBlogs?: Maybe<ModelBlogConnection>;
  getPost?: Maybe<Post>;
  listPosts?: Maybe<ModelPostConnection>;
  getComment?: Maybe<Comment>;
  listComments?: Maybe<ModelCommentConnection>;
};


export type QueryGetBlogArgs = {
  id: Scalars['ID'];
};


export type QueryListBlogsArgs = {
  filter?: Maybe<ModelBlogFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryListPostsArgs = {
  filter?: Maybe<ModelPostFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryListCommentsArgs = {
  filter?: Maybe<ModelCommentFilterInput>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Blog = {
  __typename?: 'Blog';
  id: Scalars['ID'];
  name: Scalars['String'];
  posts?: Maybe<ModelPostConnection>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};


export type BlogPostsArgs = {
  filter?: Maybe<ModelPostFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelPostConnection = {
  __typename?: 'ModelPostConnection';
  items?: Maybe<Array<Maybe<Post>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  blogID: Scalars['ID'];
  blog?: Maybe<Blog>;
  comments?: Maybe<ModelCommentConnection>;
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};


export type PostCommentsArgs = {
  content?: Maybe<ModelStringKeyConditionInput>;
  filter?: Maybe<ModelCommentFilterInput>;
  sortDirection?: Maybe<ModelSortDirection>;
  limit?: Maybe<Scalars['Int']>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelCommentConnection = {
  __typename?: 'ModelCommentConnection';
  items?: Maybe<Array<Maybe<Comment>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  postID: Scalars['ID'];
  post?: Maybe<Post>;
  content: Scalars['String'];
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};


export type ModelStringKeyConditionInput = {
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  beginsWith?: Maybe<Scalars['String']>;
};

export type ModelCommentFilterInput = {
  id?: Maybe<ModelIdInput>;
  postID?: Maybe<ModelIdInput>;
  content?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelCommentFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelCommentFilterInput>>>;
  not?: Maybe<ModelCommentFilterInput>;
};

export type ModelIdInput = {
  ne?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  contains?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
  beginsWith?: Maybe<Scalars['ID']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export enum ModelAttributeTypes {
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet',
  Null = '_null'
}

export type ModelSizeInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ModelStringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
  beginsWith?: Maybe<Scalars['String']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
  size?: Maybe<ModelSizeInput>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelPostFilterInput = {
  id?: Maybe<ModelIdInput>;
  title?: Maybe<ModelStringInput>;
  blogID?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelPostFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelPostFilterInput>>>;
  not?: Maybe<ModelPostFilterInput>;
};

export type ModelBlogConnection = {
  __typename?: 'ModelBlogConnection';
  items?: Maybe<Array<Maybe<Blog>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelBlogFilterInput = {
  id?: Maybe<ModelIdInput>;
  name?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelBlogFilterInput>>>;
  or?: Maybe<Array<Maybe<ModelBlogFilterInput>>>;
  not?: Maybe<ModelBlogFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog?: Maybe<Blog>;
  updateBlog?: Maybe<Blog>;
  deleteBlog?: Maybe<Blog>;
  createPost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deletePost?: Maybe<Post>;
  createComment?: Maybe<Comment>;
  updateComment?: Maybe<Comment>;
  deleteComment?: Maybe<Comment>;
};


export type MutationCreateBlogArgs = {
  input: CreateBlogInput;
  condition?: Maybe<ModelBlogConditionInput>;
};


export type MutationUpdateBlogArgs = {
  input: UpdateBlogInput;
  condition?: Maybe<ModelBlogConditionInput>;
};


export type MutationDeleteBlogArgs = {
  input: DeleteBlogInput;
  condition?: Maybe<ModelBlogConditionInput>;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
  condition?: Maybe<ModelPostConditionInput>;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
  condition?: Maybe<ModelPostConditionInput>;
};


export type MutationDeletePostArgs = {
  input: DeletePostInput;
  condition?: Maybe<ModelPostConditionInput>;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
  condition?: Maybe<ModelCommentConditionInput>;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
  condition?: Maybe<ModelCommentConditionInput>;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
  condition?: Maybe<ModelCommentConditionInput>;
};

export type CreateBlogInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type ModelBlogConditionInput = {
  name?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelBlogConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelBlogConditionInput>>>;
  not?: Maybe<ModelBlogConditionInput>;
};

export type UpdateBlogInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type DeleteBlogInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CreatePostInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  blogID: Scalars['ID'];
};

export type ModelPostConditionInput = {
  title?: Maybe<ModelStringInput>;
  blogID?: Maybe<ModelIdInput>;
  and?: Maybe<Array<Maybe<ModelPostConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelPostConditionInput>>>;
  not?: Maybe<ModelPostConditionInput>;
};

export type UpdatePostInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  blogID?: Maybe<Scalars['ID']>;
};

export type DeletePostInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CreateCommentInput = {
  id?: Maybe<Scalars['ID']>;
  postID: Scalars['ID'];
  content: Scalars['String'];
};

export type ModelCommentConditionInput = {
  postID?: Maybe<ModelIdInput>;
  content?: Maybe<ModelStringInput>;
  and?: Maybe<Array<Maybe<ModelCommentConditionInput>>>;
  or?: Maybe<Array<Maybe<ModelCommentConditionInput>>>;
  not?: Maybe<ModelCommentConditionInput>;
};

export type UpdateCommentInput = {
  id: Scalars['ID'];
  postID?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
};

export type DeleteCommentInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateBlog?: Maybe<Blog>;
  onUpdateBlog?: Maybe<Blog>;
  onDeleteBlog?: Maybe<Blog>;
  onCreatePost?: Maybe<Post>;
  onUpdatePost?: Maybe<Post>;
  onDeletePost?: Maybe<Post>;
  onCreateComment?: Maybe<Comment>;
  onUpdateComment?: Maybe<Comment>;
  onDeleteComment?: Maybe<Comment>;
};

export type ModelFloatInput = {
  ne?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelIntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};

export type ModelBooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
  attributeExists?: Maybe<Scalars['Boolean']>;
  attributeType?: Maybe<ModelAttributeTypes>;
};
