import * as jspb from 'google-protobuf'



export class Recipe extends jspb.Message {
  getIdmeal(): string;
  setIdmeal(value: string): Recipe;

  getStrmeal(): string;
  setStrmeal(value: string): Recipe;

  getStrmealthumb(): string;
  setStrmealthumb(value: string): Recipe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recipe.AsObject;
  static toObject(includeInstance: boolean, msg: Recipe): Recipe.AsObject;
  static serializeBinaryToWriter(message: Recipe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recipe;
  static deserializeBinaryFromReader(message: Recipe, reader: jspb.BinaryReader): Recipe;
}

export namespace Recipe {
  export type AsObject = {
    idmeal: string,
    strmeal: string,
    strmealthumb: string,
  }
}

export class GetRecipeRequest extends jspb.Message {
  getStrmeal(): string;
  setStrmeal(value: string): GetRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeRequest): GetRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeRequest;
  static deserializeBinaryFromReader(message: GetRecipeRequest, reader: jspb.BinaryReader): GetRecipeRequest;
}

export namespace GetRecipeRequest {
  export type AsObject = {
    strmeal: string,
  }
}

export class RecipeResponse extends jspb.Message {
  getRecipe(): Recipe | undefined;
  setRecipe(value?: Recipe): RecipeResponse;
  hasRecipe(): boolean;
  clearRecipe(): RecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecipeResponse): RecipeResponse.AsObject;
  static serializeBinaryToWriter(message: RecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecipeResponse;
  static deserializeBinaryFromReader(message: RecipeResponse, reader: jspb.BinaryReader): RecipeResponse;
}

export namespace RecipeResponse {
  export type AsObject = {
    recipe?: Recipe.AsObject,
  }
}

export class SearchRecipesRequest extends jspb.Message {
  getStrmeal(): string;
  setStrmeal(value: string): SearchRecipesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRecipesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRecipesRequest): SearchRecipesRequest.AsObject;
  static serializeBinaryToWriter(message: SearchRecipesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRecipesRequest;
  static deserializeBinaryFromReader(message: SearchRecipesRequest, reader: jspb.BinaryReader): SearchRecipesRequest;
}

export namespace SearchRecipesRequest {
  export type AsObject = {
    strmeal: string,
  }
}

export class SearchRecipesResponse extends jspb.Message {
  getRecipesList(): Array<Recipe>;
  setRecipesList(value: Array<Recipe>): SearchRecipesResponse;
  clearRecipesList(): SearchRecipesResponse;
  addRecipes(value?: Recipe, index?: number): Recipe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRecipesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRecipesResponse): SearchRecipesResponse.AsObject;
  static serializeBinaryToWriter(message: SearchRecipesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRecipesResponse;
  static deserializeBinaryFromReader(message: SearchRecipesResponse, reader: jspb.BinaryReader): SearchRecipesResponse;
}

export namespace SearchRecipesResponse {
  export type AsObject = {
    recipesList: Array<Recipe.AsObject>,
  }
}

