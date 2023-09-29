import * as grpcWeb from 'grpc-web';

import * as recipe_pb from './recipe_pb';


export class RecipeServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getRecipe(
    request: recipe_pb.GetRecipeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: recipe_pb.RecipeResponse) => void
  ): grpcWeb.ClientReadableStream<recipe_pb.RecipeResponse>;

  searchRecipes(
    request: recipe_pb.SearchRecipesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: recipe_pb.SearchRecipesResponse) => void
  ): grpcWeb.ClientReadableStream<recipe_pb.SearchRecipesResponse>;

}

export class RecipeServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getRecipe(
    request: recipe_pb.GetRecipeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<recipe_pb.RecipeResponse>;

  searchRecipes(
    request: recipe_pb.SearchRecipesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<recipe_pb.SearchRecipesResponse>;

}

