
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Case
 * 
 */
export type Case = $Result.DefaultSelection<Prisma.$CasePayload>
/**
 * Model Evidence
 * 
 */
export type Evidence = $Result.DefaultSelection<Prisma.$EvidencePayload>
/**
 * Model MapNode
 * 
 */
export type MapNode = $Result.DefaultSelection<Prisma.$MapNodePayload>
/**
 * Model MapEdge
 * 
 */
export type MapEdge = $Result.DefaultSelection<Prisma.$MapEdgePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cases
 * const cases = await prisma.case.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cases
   * const cases = await prisma.case.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.case`: Exposes CRUD operations for the **Case** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cases
    * const cases = await prisma.case.findMany()
    * ```
    */
  get case(): Prisma.CaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evidence`: Exposes CRUD operations for the **Evidence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evidences
    * const evidences = await prisma.evidence.findMany()
    * ```
    */
  get evidence(): Prisma.EvidenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapNode`: Exposes CRUD operations for the **MapNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapNodes
    * const mapNodes = await prisma.mapNode.findMany()
    * ```
    */
  get mapNode(): Prisma.MapNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapEdge`: Exposes CRUD operations for the **MapEdge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapEdges
    * const mapEdges = await prisma.mapEdge.findMany()
    * ```
    */
  get mapEdge(): Prisma.MapEdgeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Case: 'Case',
    Evidence: 'Evidence',
    MapNode: 'MapNode',
    MapEdge: 'MapEdge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "case" | "evidence" | "mapNode" | "mapEdge"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Case: {
        payload: Prisma.$CasePayload<ExtArgs>
        fields: Prisma.CaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findFirst: {
            args: Prisma.CaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findMany: {
            args: Prisma.CaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          create: {
            args: Prisma.CaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          createMany: {
            args: Prisma.CaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          delete: {
            args: Prisma.CaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          update: {
            args: Prisma.CaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          deleteMany: {
            args: Prisma.CaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          upsert: {
            args: Prisma.CaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          aggregate: {
            args: Prisma.CaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCase>
          }
          groupBy: {
            args: Prisma.CaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseCountArgs<ExtArgs>
            result: $Utils.Optional<CaseCountAggregateOutputType> | number
          }
        }
      }
      Evidence: {
        payload: Prisma.$EvidencePayload<ExtArgs>
        fields: Prisma.EvidenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvidenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvidenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          findFirst: {
            args: Prisma.EvidenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvidenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          findMany: {
            args: Prisma.EvidenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          create: {
            args: Prisma.EvidenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          createMany: {
            args: Prisma.EvidenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvidenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          delete: {
            args: Prisma.EvidenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          update: {
            args: Prisma.EvidenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          deleteMany: {
            args: Prisma.EvidenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvidenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvidenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          upsert: {
            args: Prisma.EvidenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          aggregate: {
            args: Prisma.EvidenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvidence>
          }
          groupBy: {
            args: Prisma.EvidenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvidenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvidenceCountArgs<ExtArgs>
            result: $Utils.Optional<EvidenceCountAggregateOutputType> | number
          }
        }
      }
      MapNode: {
        payload: Prisma.$MapNodePayload<ExtArgs>
        fields: Prisma.MapNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          findFirst: {
            args: Prisma.MapNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          findMany: {
            args: Prisma.MapNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>[]
          }
          create: {
            args: Prisma.MapNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          createMany: {
            args: Prisma.MapNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>[]
          }
          delete: {
            args: Prisma.MapNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          update: {
            args: Prisma.MapNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          deleteMany: {
            args: Prisma.MapNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>[]
          }
          upsert: {
            args: Prisma.MapNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapNodePayload>
          }
          aggregate: {
            args: Prisma.MapNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapNode>
          }
          groupBy: {
            args: Prisma.MapNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapNodeCountArgs<ExtArgs>
            result: $Utils.Optional<MapNodeCountAggregateOutputType> | number
          }
        }
      }
      MapEdge: {
        payload: Prisma.$MapEdgePayload<ExtArgs>
        fields: Prisma.MapEdgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapEdgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapEdgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload>
          }
          findFirst: {
            args: Prisma.MapEdgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapEdgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload>
          }
          findMany: {
            args: Prisma.MapEdgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload>[]
          }
          create: {
            args: Prisma.MapEdgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload>
          }
          createMany: {
            args: Prisma.MapEdgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapEdgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload>[]
          }
          delete: {
            args: Prisma.MapEdgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload>
          }
          update: {
            args: Prisma.MapEdgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload>
          }
          deleteMany: {
            args: Prisma.MapEdgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapEdgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapEdgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload>[]
          }
          upsert: {
            args: Prisma.MapEdgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapEdgePayload>
          }
          aggregate: {
            args: Prisma.MapEdgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapEdge>
          }
          groupBy: {
            args: Prisma.MapEdgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapEdgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapEdgeCountArgs<ExtArgs>
            result: $Utils.Optional<MapEdgeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    case?: CaseOmit
    evidence?: EvidenceOmit
    mapNode?: MapNodeOmit
    mapEdge?: MapEdgeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CaseCountOutputType
   */

  export type CaseCountOutputType = {
    evidence: number
    mapNodes: number
    mapEdges: number
  }

  export type CaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evidence?: boolean | CaseCountOutputTypeCountEvidenceArgs
    mapNodes?: boolean | CaseCountOutputTypeCountMapNodesArgs
    mapEdges?: boolean | CaseCountOutputTypeCountMapEdgesArgs
  }

  // Custom InputTypes
  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseCountOutputType
     */
    select?: CaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountEvidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountMapNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapNodeWhereInput
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountMapEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapEdgeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Case
   */

  export type AggregateCase = {
    _count: CaseCountAggregateOutputType | null
    _avg: CaseAvgAggregateOutputType | null
    _sum: CaseSumAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  export type CaseAvgAggregateOutputType = {
    id: number | null
  }

  export type CaseSumAggregateOutputType = {
    id: number | null
  }

  export type CaseMinAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    status: string | null
    category: string | null
    suspect: string | null
    officer: string | null
    notes: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    status: string | null
    category: string | null
    suspect: string | null
    officer: string | null
    notes: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaseCountAggregateOutputType = {
    id: number
    title: number
    type: number
    status: number
    category: number
    suspect: number
    officer: number
    notes: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CaseAvgAggregateInputType = {
    id?: true
  }

  export type CaseSumAggregateInputType = {
    id?: true
  }

  export type CaseMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    status?: true
    category?: true
    suspect?: true
    officer?: true
    notes?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaseMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    status?: true
    category?: true
    suspect?: true
    officer?: true
    notes?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaseCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    status?: true
    category?: true
    suspect?: true
    officer?: true
    notes?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Case to aggregate.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cases
    **/
    _count?: true | CaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseMaxAggregateInputType
  }

  export type GetCaseAggregateType<T extends CaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCase[P]>
      : GetScalarType<T[P], AggregateCase[P]>
  }




  export type CaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithAggregationInput | CaseOrderByWithAggregationInput[]
    by: CaseScalarFieldEnum[] | CaseScalarFieldEnum
    having?: CaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseCountAggregateInputType | true
    _avg?: CaseAvgAggregateInputType
    _sum?: CaseSumAggregateInputType
    _min?: CaseMinAggregateInputType
    _max?: CaseMaxAggregateInputType
  }

  export type CaseGroupByOutputType = {
    id: number
    title: string
    type: string
    status: string
    category: string
    suspect: string
    officer: string
    notes: string | null
    description: string
    createdAt: Date
    updatedAt: Date
    _count: CaseCountAggregateOutputType | null
    _avg: CaseAvgAggregateOutputType | null
    _sum: CaseSumAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  type GetCaseGroupByPayload<T extends CaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseGroupByOutputType[P]>
            : GetScalarType<T[P], CaseGroupByOutputType[P]>
        }
      >
    >


  export type CaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    status?: boolean
    category?: boolean
    suspect?: boolean
    officer?: boolean
    notes?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evidence?: boolean | Case$evidenceArgs<ExtArgs>
    mapNodes?: boolean | Case$mapNodesArgs<ExtArgs>
    mapEdges?: boolean | Case$mapEdgesArgs<ExtArgs>
    _count?: boolean | CaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>

  export type CaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    status?: boolean
    category?: boolean
    suspect?: boolean
    officer?: boolean
    notes?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["case"]>

  export type CaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    status?: boolean
    category?: boolean
    suspect?: boolean
    officer?: boolean
    notes?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["case"]>

  export type CaseSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    status?: boolean
    category?: boolean
    suspect?: boolean
    officer?: boolean
    notes?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "status" | "category" | "suspect" | "officer" | "notes" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["case"]>
  export type CaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evidence?: boolean | Case$evidenceArgs<ExtArgs>
    mapNodes?: boolean | Case$mapNodesArgs<ExtArgs>
    mapEdges?: boolean | Case$mapEdgesArgs<ExtArgs>
    _count?: boolean | CaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Case"
    objects: {
      evidence: Prisma.$EvidencePayload<ExtArgs>[]
      mapNodes: Prisma.$MapNodePayload<ExtArgs>[]
      mapEdges: Prisma.$MapEdgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      type: string
      status: string
      category: string
      suspect: string
      officer: string
      notes: string | null
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["case"]>
    composites: {}
  }

  type CaseGetPayload<S extends boolean | null | undefined | CaseDefaultArgs> = $Result.GetResult<Prisma.$CasePayload, S>

  type CaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseCountAggregateInputType | true
    }

  export interface CaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Case'], meta: { name: 'Case' } }
    /**
     * Find zero or one Case that matches the filter.
     * @param {CaseFindUniqueArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseFindUniqueArgs>(args: SelectSubset<T, CaseFindUniqueArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Case that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseFindUniqueOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseFindFirstArgs>(args?: SelectSubset<T, CaseFindFirstArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cases
     * const cases = await prisma.case.findMany()
     * 
     * // Get first 10 Cases
     * const cases = await prisma.case.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseWithIdOnly = await prisma.case.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseFindManyArgs>(args?: SelectSubset<T, CaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Case.
     * @param {CaseCreateArgs} args - Arguments to create a Case.
     * @example
     * // Create one Case
     * const Case = await prisma.case.create({
     *   data: {
     *     // ... data to create a Case
     *   }
     * })
     * 
     */
    create<T extends CaseCreateArgs>(args: SelectSubset<T, CaseCreateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cases.
     * @param {CaseCreateManyArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseCreateManyArgs>(args?: SelectSubset<T, CaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cases and returns the data saved in the database.
     * @param {CaseCreateManyAndReturnArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cases and only return the `id`
     * const caseWithIdOnly = await prisma.case.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Case.
     * @param {CaseDeleteArgs} args - Arguments to delete one Case.
     * @example
     * // Delete one Case
     * const Case = await prisma.case.delete({
     *   where: {
     *     // ... filter to delete one Case
     *   }
     * })
     * 
     */
    delete<T extends CaseDeleteArgs>(args: SelectSubset<T, CaseDeleteArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Case.
     * @param {CaseUpdateArgs} args - Arguments to update one Case.
     * @example
     * // Update one Case
     * const case = await prisma.case.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseUpdateArgs>(args: SelectSubset<T, CaseUpdateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cases.
     * @param {CaseDeleteManyArgs} args - Arguments to filter Cases to delete.
     * @example
     * // Delete a few Cases
     * const { count } = await prisma.case.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseDeleteManyArgs>(args?: SelectSubset<T, CaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseUpdateManyArgs>(args: SelectSubset<T, CaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases and returns the data updated in the database.
     * @param {CaseUpdateManyAndReturnArgs} args - Arguments to update many Cases.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cases and only return the `id`
     * const caseWithIdOnly = await prisma.case.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaseUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Case.
     * @param {CaseUpsertArgs} args - Arguments to update or create a Case.
     * @example
     * // Update or create a Case
     * const case = await prisma.case.upsert({
     *   create: {
     *     // ... data to create a Case
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Case we want to update
     *   }
     * })
     */
    upsert<T extends CaseUpsertArgs>(args: SelectSubset<T, CaseUpsertArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseCountArgs} args - Arguments to filter Cases to count.
     * @example
     * // Count the number of Cases
     * const count = await prisma.case.count({
     *   where: {
     *     // ... the filter for the Cases we want to count
     *   }
     * })
    **/
    count<T extends CaseCountArgs>(
      args?: Subset<T, CaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaseAggregateArgs>(args: Subset<T, CaseAggregateArgs>): Prisma.PrismaPromise<GetCaseAggregateType<T>>

    /**
     * Group by Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseGroupByArgs['orderBy'] }
        : { orderBy?: CaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Case model
   */
  readonly fields: CaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Case.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evidence<T extends Case$evidenceArgs<ExtArgs> = {}>(args?: Subset<T, Case$evidenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapNodes<T extends Case$mapNodesArgs<ExtArgs> = {}>(args?: Subset<T, Case$mapNodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapEdges<T extends Case$mapEdgesArgs<ExtArgs> = {}>(args?: Subset<T, Case$mapEdgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Case model
   */
  interface CaseFieldRefs {
    readonly id: FieldRef<"Case", 'Int'>
    readonly title: FieldRef<"Case", 'String'>
    readonly type: FieldRef<"Case", 'String'>
    readonly status: FieldRef<"Case", 'String'>
    readonly category: FieldRef<"Case", 'String'>
    readonly suspect: FieldRef<"Case", 'String'>
    readonly officer: FieldRef<"Case", 'String'>
    readonly notes: FieldRef<"Case", 'String'>
    readonly description: FieldRef<"Case", 'String'>
    readonly createdAt: FieldRef<"Case", 'DateTime'>
    readonly updatedAt: FieldRef<"Case", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Case findUnique
   */
  export type CaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findUniqueOrThrow
   */
  export type CaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findFirst
   */
  export type CaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findFirstOrThrow
   */
  export type CaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findMany
   */
  export type CaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case create
   */
  export type CaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Case.
     */
    data: XOR<CaseCreateInput, CaseUncheckedCreateInput>
  }

  /**
   * Case createMany
   */
  export type CaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
  }

  /**
   * Case createManyAndReturn
   */
  export type CaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
  }

  /**
   * Case update
   */
  export type CaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Case.
     */
    data: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
    /**
     * Choose, which Case to update.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case updateMany
   */
  export type CaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
  }

  /**
   * Case updateManyAndReturn
   */
  export type CaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
  }

  /**
   * Case upsert
   */
  export type CaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Case to update in case it exists.
     */
    where: CaseWhereUniqueInput
    /**
     * In case the Case found by the `where` argument doesn't exist, create a new Case with this data.
     */
    create: XOR<CaseCreateInput, CaseUncheckedCreateInput>
    /**
     * In case the Case was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
  }

  /**
   * Case delete
   */
  export type CaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter which Case to delete.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case deleteMany
   */
  export type CaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cases to delete
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to delete.
     */
    limit?: number
  }

  /**
   * Case.evidence
   */
  export type Case$evidenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    cursor?: EvidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Case.mapNodes
   */
  export type Case$mapNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    where?: MapNodeWhereInput
    orderBy?: MapNodeOrderByWithRelationInput | MapNodeOrderByWithRelationInput[]
    cursor?: MapNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapNodeScalarFieldEnum | MapNodeScalarFieldEnum[]
  }

  /**
   * Case.mapEdges
   */
  export type Case$mapEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
    where?: MapEdgeWhereInput
    orderBy?: MapEdgeOrderByWithRelationInput | MapEdgeOrderByWithRelationInput[]
    cursor?: MapEdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapEdgeScalarFieldEnum | MapEdgeScalarFieldEnum[]
  }

  /**
   * Case without action
   */
  export type CaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
  }


  /**
   * Model Evidence
   */

  export type AggregateEvidence = {
    _count: EvidenceCountAggregateOutputType | null
    _avg: EvidenceAvgAggregateOutputType | null
    _sum: EvidenceSumAggregateOutputType | null
    _min: EvidenceMinAggregateOutputType | null
    _max: EvidenceMaxAggregateOutputType | null
  }

  export type EvidenceAvgAggregateOutputType = {
    id: number | null
    caseId: number | null
  }

  export type EvidenceSumAggregateOutputType = {
    id: number | null
    caseId: number | null
  }

  export type EvidenceMinAggregateOutputType = {
    id: number | null
    filename: string | null
    mimetype: string | null
    url: string | null
    caseId: number | null
    uploadedAt: Date | null
  }

  export type EvidenceMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    mimetype: string | null
    url: string | null
    caseId: number | null
    uploadedAt: Date | null
  }

  export type EvidenceCountAggregateOutputType = {
    id: number
    filename: number
    mimetype: number
    url: number
    caseId: number
    uploadedAt: number
    _all: number
  }


  export type EvidenceAvgAggregateInputType = {
    id?: true
    caseId?: true
  }

  export type EvidenceSumAggregateInputType = {
    id?: true
    caseId?: true
  }

  export type EvidenceMinAggregateInputType = {
    id?: true
    filename?: true
    mimetype?: true
    url?: true
    caseId?: true
    uploadedAt?: true
  }

  export type EvidenceMaxAggregateInputType = {
    id?: true
    filename?: true
    mimetype?: true
    url?: true
    caseId?: true
    uploadedAt?: true
  }

  export type EvidenceCountAggregateInputType = {
    id?: true
    filename?: true
    mimetype?: true
    url?: true
    caseId?: true
    uploadedAt?: true
    _all?: true
  }

  export type EvidenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evidence to aggregate.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evidences
    **/
    _count?: true | EvidenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvidenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvidenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvidenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvidenceMaxAggregateInputType
  }

  export type GetEvidenceAggregateType<T extends EvidenceAggregateArgs> = {
        [P in keyof T & keyof AggregateEvidence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvidence[P]>
      : GetScalarType<T[P], AggregateEvidence[P]>
  }




  export type EvidenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithAggregationInput | EvidenceOrderByWithAggregationInput[]
    by: EvidenceScalarFieldEnum[] | EvidenceScalarFieldEnum
    having?: EvidenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvidenceCountAggregateInputType | true
    _avg?: EvidenceAvgAggregateInputType
    _sum?: EvidenceSumAggregateInputType
    _min?: EvidenceMinAggregateInputType
    _max?: EvidenceMaxAggregateInputType
  }

  export type EvidenceGroupByOutputType = {
    id: number
    filename: string
    mimetype: string
    url: string
    caseId: number
    uploadedAt: Date
    _count: EvidenceCountAggregateOutputType | null
    _avg: EvidenceAvgAggregateOutputType | null
    _sum: EvidenceSumAggregateOutputType | null
    _min: EvidenceMinAggregateOutputType | null
    _max: EvidenceMaxAggregateOutputType | null
  }

  type GetEvidenceGroupByPayload<T extends EvidenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvidenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvidenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvidenceGroupByOutputType[P]>
            : GetScalarType<T[P], EvidenceGroupByOutputType[P]>
        }
      >
    >


  export type EvidenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    mimetype?: boolean
    url?: boolean
    caseId?: boolean
    uploadedAt?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    mimetype?: boolean
    url?: boolean
    caseId?: boolean
    uploadedAt?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    mimetype?: boolean
    url?: boolean
    caseId?: boolean
    uploadedAt?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectScalar = {
    id?: boolean
    filename?: boolean
    mimetype?: boolean
    url?: boolean
    caseId?: boolean
    uploadedAt?: boolean
  }

  export type EvidenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "mimetype" | "url" | "caseId" | "uploadedAt", ExtArgs["result"]["evidence"]>
  export type EvidenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type EvidenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type EvidenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $EvidencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evidence"
    objects: {
      case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      mimetype: string
      url: string
      caseId: number
      uploadedAt: Date
    }, ExtArgs["result"]["evidence"]>
    composites: {}
  }

  type EvidenceGetPayload<S extends boolean | null | undefined | EvidenceDefaultArgs> = $Result.GetResult<Prisma.$EvidencePayload, S>

  type EvidenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvidenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvidenceCountAggregateInputType | true
    }

  export interface EvidenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evidence'], meta: { name: 'Evidence' } }
    /**
     * Find zero or one Evidence that matches the filter.
     * @param {EvidenceFindUniqueArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvidenceFindUniqueArgs>(args: SelectSubset<T, EvidenceFindUniqueArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evidence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvidenceFindUniqueOrThrowArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvidenceFindUniqueOrThrowArgs>(args: SelectSubset<T, EvidenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evidence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindFirstArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvidenceFindFirstArgs>(args?: SelectSubset<T, EvidenceFindFirstArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evidence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindFirstOrThrowArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvidenceFindFirstOrThrowArgs>(args?: SelectSubset<T, EvidenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evidences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evidences
     * const evidences = await prisma.evidence.findMany()
     * 
     * // Get first 10 Evidences
     * const evidences = await prisma.evidence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evidenceWithIdOnly = await prisma.evidence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvidenceFindManyArgs>(args?: SelectSubset<T, EvidenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evidence.
     * @param {EvidenceCreateArgs} args - Arguments to create a Evidence.
     * @example
     * // Create one Evidence
     * const Evidence = await prisma.evidence.create({
     *   data: {
     *     // ... data to create a Evidence
     *   }
     * })
     * 
     */
    create<T extends EvidenceCreateArgs>(args: SelectSubset<T, EvidenceCreateArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evidences.
     * @param {EvidenceCreateManyArgs} args - Arguments to create many Evidences.
     * @example
     * // Create many Evidences
     * const evidence = await prisma.evidence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvidenceCreateManyArgs>(args?: SelectSubset<T, EvidenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evidences and returns the data saved in the database.
     * @param {EvidenceCreateManyAndReturnArgs} args - Arguments to create many Evidences.
     * @example
     * // Create many Evidences
     * const evidence = await prisma.evidence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evidences and only return the `id`
     * const evidenceWithIdOnly = await prisma.evidence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvidenceCreateManyAndReturnArgs>(args?: SelectSubset<T, EvidenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evidence.
     * @param {EvidenceDeleteArgs} args - Arguments to delete one Evidence.
     * @example
     * // Delete one Evidence
     * const Evidence = await prisma.evidence.delete({
     *   where: {
     *     // ... filter to delete one Evidence
     *   }
     * })
     * 
     */
    delete<T extends EvidenceDeleteArgs>(args: SelectSubset<T, EvidenceDeleteArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evidence.
     * @param {EvidenceUpdateArgs} args - Arguments to update one Evidence.
     * @example
     * // Update one Evidence
     * const evidence = await prisma.evidence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvidenceUpdateArgs>(args: SelectSubset<T, EvidenceUpdateArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evidences.
     * @param {EvidenceDeleteManyArgs} args - Arguments to filter Evidences to delete.
     * @example
     * // Delete a few Evidences
     * const { count } = await prisma.evidence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvidenceDeleteManyArgs>(args?: SelectSubset<T, EvidenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evidences
     * const evidence = await prisma.evidence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvidenceUpdateManyArgs>(args: SelectSubset<T, EvidenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evidences and returns the data updated in the database.
     * @param {EvidenceUpdateManyAndReturnArgs} args - Arguments to update many Evidences.
     * @example
     * // Update many Evidences
     * const evidence = await prisma.evidence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evidences and only return the `id`
     * const evidenceWithIdOnly = await prisma.evidence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvidenceUpdateManyAndReturnArgs>(args: SelectSubset<T, EvidenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evidence.
     * @param {EvidenceUpsertArgs} args - Arguments to update or create a Evidence.
     * @example
     * // Update or create a Evidence
     * const evidence = await prisma.evidence.upsert({
     *   create: {
     *     // ... data to create a Evidence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evidence we want to update
     *   }
     * })
     */
    upsert<T extends EvidenceUpsertArgs>(args: SelectSubset<T, EvidenceUpsertArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceCountArgs} args - Arguments to filter Evidences to count.
     * @example
     * // Count the number of Evidences
     * const count = await prisma.evidence.count({
     *   where: {
     *     // ... the filter for the Evidences we want to count
     *   }
     * })
    **/
    count<T extends EvidenceCountArgs>(
      args?: Subset<T, EvidenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvidenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvidenceAggregateArgs>(args: Subset<T, EvidenceAggregateArgs>): Prisma.PrismaPromise<GetEvidenceAggregateType<T>>

    /**
     * Group by Evidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvidenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvidenceGroupByArgs['orderBy'] }
        : { orderBy?: EvidenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvidenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvidenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evidence model
   */
  readonly fields: EvidenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evidence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvidenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evidence model
   */
  interface EvidenceFieldRefs {
    readonly id: FieldRef<"Evidence", 'Int'>
    readonly filename: FieldRef<"Evidence", 'String'>
    readonly mimetype: FieldRef<"Evidence", 'String'>
    readonly url: FieldRef<"Evidence", 'String'>
    readonly caseId: FieldRef<"Evidence", 'Int'>
    readonly uploadedAt: FieldRef<"Evidence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evidence findUnique
   */
  export type EvidenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence findUniqueOrThrow
   */
  export type EvidenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence findFirst
   */
  export type EvidenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence findFirstOrThrow
   */
  export type EvidenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence findMany
   */
  export type EvidenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidences to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence create
   */
  export type EvidenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Evidence.
     */
    data: XOR<EvidenceCreateInput, EvidenceUncheckedCreateInput>
  }

  /**
   * Evidence createMany
   */
  export type EvidenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evidences.
     */
    data: EvidenceCreateManyInput | EvidenceCreateManyInput[]
  }

  /**
   * Evidence createManyAndReturn
   */
  export type EvidenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * The data used to create many Evidences.
     */
    data: EvidenceCreateManyInput | EvidenceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evidence update
   */
  export type EvidenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Evidence.
     */
    data: XOR<EvidenceUpdateInput, EvidenceUncheckedUpdateInput>
    /**
     * Choose, which Evidence to update.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence updateMany
   */
  export type EvidenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evidences.
     */
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyInput>
    /**
     * Filter which Evidences to update
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to update.
     */
    limit?: number
  }

  /**
   * Evidence updateManyAndReturn
   */
  export type EvidenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * The data used to update Evidences.
     */
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyInput>
    /**
     * Filter which Evidences to update
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evidence upsert
   */
  export type EvidenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Evidence to update in case it exists.
     */
    where: EvidenceWhereUniqueInput
    /**
     * In case the Evidence found by the `where` argument doesn't exist, create a new Evidence with this data.
     */
    create: XOR<EvidenceCreateInput, EvidenceUncheckedCreateInput>
    /**
     * In case the Evidence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvidenceUpdateInput, EvidenceUncheckedUpdateInput>
  }

  /**
   * Evidence delete
   */
  export type EvidenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter which Evidence to delete.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence deleteMany
   */
  export type EvidenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evidences to delete
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to delete.
     */
    limit?: number
  }

  /**
   * Evidence without action
   */
  export type EvidenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
  }


  /**
   * Model MapNode
   */

  export type AggregateMapNode = {
    _count: MapNodeCountAggregateOutputType | null
    _avg: MapNodeAvgAggregateOutputType | null
    _sum: MapNodeSumAggregateOutputType | null
    _min: MapNodeMinAggregateOutputType | null
    _max: MapNodeMaxAggregateOutputType | null
  }

  export type MapNodeAvgAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    caseId: number | null
  }

  export type MapNodeSumAggregateOutputType = {
    id: number | null
    x: number | null
    y: number | null
    caseId: number | null
  }

  export type MapNodeMinAggregateOutputType = {
    id: number | null
    label: string | null
    x: number | null
    y: number | null
    caseId: number | null
  }

  export type MapNodeMaxAggregateOutputType = {
    id: number | null
    label: string | null
    x: number | null
    y: number | null
    caseId: number | null
  }

  export type MapNodeCountAggregateOutputType = {
    id: number
    label: number
    x: number
    y: number
    caseId: number
    _all: number
  }


  export type MapNodeAvgAggregateInputType = {
    id?: true
    x?: true
    y?: true
    caseId?: true
  }

  export type MapNodeSumAggregateInputType = {
    id?: true
    x?: true
    y?: true
    caseId?: true
  }

  export type MapNodeMinAggregateInputType = {
    id?: true
    label?: true
    x?: true
    y?: true
    caseId?: true
  }

  export type MapNodeMaxAggregateInputType = {
    id?: true
    label?: true
    x?: true
    y?: true
    caseId?: true
  }

  export type MapNodeCountAggregateInputType = {
    id?: true
    label?: true
    x?: true
    y?: true
    caseId?: true
    _all?: true
  }

  export type MapNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapNode to aggregate.
     */
    where?: MapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodes to fetch.
     */
    orderBy?: MapNodeOrderByWithRelationInput | MapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapNodes
    **/
    _count?: true | MapNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapNodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapNodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapNodeMaxAggregateInputType
  }

  export type GetMapNodeAggregateType<T extends MapNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateMapNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapNode[P]>
      : GetScalarType<T[P], AggregateMapNode[P]>
  }




  export type MapNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapNodeWhereInput
    orderBy?: MapNodeOrderByWithAggregationInput | MapNodeOrderByWithAggregationInput[]
    by: MapNodeScalarFieldEnum[] | MapNodeScalarFieldEnum
    having?: MapNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapNodeCountAggregateInputType | true
    _avg?: MapNodeAvgAggregateInputType
    _sum?: MapNodeSumAggregateInputType
    _min?: MapNodeMinAggregateInputType
    _max?: MapNodeMaxAggregateInputType
  }

  export type MapNodeGroupByOutputType = {
    id: number
    label: string
    x: number
    y: number
    caseId: number
    _count: MapNodeCountAggregateOutputType | null
    _avg: MapNodeAvgAggregateOutputType | null
    _sum: MapNodeSumAggregateOutputType | null
    _min: MapNodeMinAggregateOutputType | null
    _max: MapNodeMaxAggregateOutputType | null
  }

  type GetMapNodeGroupByPayload<T extends MapNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapNodeGroupByOutputType[P]>
            : GetScalarType<T[P], MapNodeGroupByOutputType[P]>
        }
      >
    >


  export type MapNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    x?: boolean
    y?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNode"]>

  export type MapNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    x?: boolean
    y?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNode"]>

  export type MapNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    x?: boolean
    y?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapNode"]>

  export type MapNodeSelectScalar = {
    id?: boolean
    label?: boolean
    x?: boolean
    y?: boolean
    caseId?: boolean
  }

  export type MapNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "x" | "y" | "caseId", ExtArgs["result"]["mapNode"]>
  export type MapNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type MapNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type MapNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $MapNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapNode"
    objects: {
      case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      x: number
      y: number
      caseId: number
    }, ExtArgs["result"]["mapNode"]>
    composites: {}
  }

  type MapNodeGetPayload<S extends boolean | null | undefined | MapNodeDefaultArgs> = $Result.GetResult<Prisma.$MapNodePayload, S>

  type MapNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapNodeCountAggregateInputType | true
    }

  export interface MapNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapNode'], meta: { name: 'MapNode' } }
    /**
     * Find zero or one MapNode that matches the filter.
     * @param {MapNodeFindUniqueArgs} args - Arguments to find a MapNode
     * @example
     * // Get one MapNode
     * const mapNode = await prisma.mapNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapNodeFindUniqueArgs>(args: SelectSubset<T, MapNodeFindUniqueArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapNodeFindUniqueOrThrowArgs} args - Arguments to find a MapNode
     * @example
     * // Get one MapNode
     * const mapNode = await prisma.mapNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, MapNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFindFirstArgs} args - Arguments to find a MapNode
     * @example
     * // Get one MapNode
     * const mapNode = await prisma.mapNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapNodeFindFirstArgs>(args?: SelectSubset<T, MapNodeFindFirstArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFindFirstOrThrowArgs} args - Arguments to find a MapNode
     * @example
     * // Get one MapNode
     * const mapNode = await prisma.mapNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, MapNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapNodes
     * const mapNodes = await prisma.mapNode.findMany()
     * 
     * // Get first 10 MapNodes
     * const mapNodes = await prisma.mapNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapNodeWithIdOnly = await prisma.mapNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapNodeFindManyArgs>(args?: SelectSubset<T, MapNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapNode.
     * @param {MapNodeCreateArgs} args - Arguments to create a MapNode.
     * @example
     * // Create one MapNode
     * const MapNode = await prisma.mapNode.create({
     *   data: {
     *     // ... data to create a MapNode
     *   }
     * })
     * 
     */
    create<T extends MapNodeCreateArgs>(args: SelectSubset<T, MapNodeCreateArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapNodes.
     * @param {MapNodeCreateManyArgs} args - Arguments to create many MapNodes.
     * @example
     * // Create many MapNodes
     * const mapNode = await prisma.mapNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapNodeCreateManyArgs>(args?: SelectSubset<T, MapNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapNodes and returns the data saved in the database.
     * @param {MapNodeCreateManyAndReturnArgs} args - Arguments to create many MapNodes.
     * @example
     * // Create many MapNodes
     * const mapNode = await prisma.mapNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapNodes and only return the `id`
     * const mapNodeWithIdOnly = await prisma.mapNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, MapNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapNode.
     * @param {MapNodeDeleteArgs} args - Arguments to delete one MapNode.
     * @example
     * // Delete one MapNode
     * const MapNode = await prisma.mapNode.delete({
     *   where: {
     *     // ... filter to delete one MapNode
     *   }
     * })
     * 
     */
    delete<T extends MapNodeDeleteArgs>(args: SelectSubset<T, MapNodeDeleteArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapNode.
     * @param {MapNodeUpdateArgs} args - Arguments to update one MapNode.
     * @example
     * // Update one MapNode
     * const mapNode = await prisma.mapNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapNodeUpdateArgs>(args: SelectSubset<T, MapNodeUpdateArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapNodes.
     * @param {MapNodeDeleteManyArgs} args - Arguments to filter MapNodes to delete.
     * @example
     * // Delete a few MapNodes
     * const { count } = await prisma.mapNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapNodeDeleteManyArgs>(args?: SelectSubset<T, MapNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapNodes
     * const mapNode = await prisma.mapNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapNodeUpdateManyArgs>(args: SelectSubset<T, MapNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapNodes and returns the data updated in the database.
     * @param {MapNodeUpdateManyAndReturnArgs} args - Arguments to update many MapNodes.
     * @example
     * // Update many MapNodes
     * const mapNode = await prisma.mapNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapNodes and only return the `id`
     * const mapNodeWithIdOnly = await prisma.mapNode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MapNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, MapNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapNode.
     * @param {MapNodeUpsertArgs} args - Arguments to update or create a MapNode.
     * @example
     * // Update or create a MapNode
     * const mapNode = await prisma.mapNode.upsert({
     *   create: {
     *     // ... data to create a MapNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapNode we want to update
     *   }
     * })
     */
    upsert<T extends MapNodeUpsertArgs>(args: SelectSubset<T, MapNodeUpsertArgs<ExtArgs>>): Prisma__MapNodeClient<$Result.GetResult<Prisma.$MapNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeCountArgs} args - Arguments to filter MapNodes to count.
     * @example
     * // Count the number of MapNodes
     * const count = await prisma.mapNode.count({
     *   where: {
     *     // ... the filter for the MapNodes we want to count
     *   }
     * })
    **/
    count<T extends MapNodeCountArgs>(
      args?: Subset<T, MapNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MapNodeAggregateArgs>(args: Subset<T, MapNodeAggregateArgs>): Prisma.PrismaPromise<GetMapNodeAggregateType<T>>

    /**
     * Group by MapNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MapNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapNodeGroupByArgs['orderBy'] }
        : { orderBy?: MapNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MapNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapNode model
   */
  readonly fields: MapNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MapNode model
   */
  interface MapNodeFieldRefs {
    readonly id: FieldRef<"MapNode", 'Int'>
    readonly label: FieldRef<"MapNode", 'String'>
    readonly x: FieldRef<"MapNode", 'Int'>
    readonly y: FieldRef<"MapNode", 'Int'>
    readonly caseId: FieldRef<"MapNode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MapNode findUnique
   */
  export type MapNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter, which MapNode to fetch.
     */
    where: MapNodeWhereUniqueInput
  }

  /**
   * MapNode findUniqueOrThrow
   */
  export type MapNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter, which MapNode to fetch.
     */
    where: MapNodeWhereUniqueInput
  }

  /**
   * MapNode findFirst
   */
  export type MapNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter, which MapNode to fetch.
     */
    where?: MapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodes to fetch.
     */
    orderBy?: MapNodeOrderByWithRelationInput | MapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapNodes.
     */
    cursor?: MapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapNodes.
     */
    distinct?: MapNodeScalarFieldEnum | MapNodeScalarFieldEnum[]
  }

  /**
   * MapNode findFirstOrThrow
   */
  export type MapNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter, which MapNode to fetch.
     */
    where?: MapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodes to fetch.
     */
    orderBy?: MapNodeOrderByWithRelationInput | MapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapNodes.
     */
    cursor?: MapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapNodes.
     */
    distinct?: MapNodeScalarFieldEnum | MapNodeScalarFieldEnum[]
  }

  /**
   * MapNode findMany
   */
  export type MapNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter, which MapNodes to fetch.
     */
    where?: MapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapNodes to fetch.
     */
    orderBy?: MapNodeOrderByWithRelationInput | MapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapNodes.
     */
    cursor?: MapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapNodes.
     */
    skip?: number
    distinct?: MapNodeScalarFieldEnum | MapNodeScalarFieldEnum[]
  }

  /**
   * MapNode create
   */
  export type MapNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a MapNode.
     */
    data: XOR<MapNodeCreateInput, MapNodeUncheckedCreateInput>
  }

  /**
   * MapNode createMany
   */
  export type MapNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapNodes.
     */
    data: MapNodeCreateManyInput | MapNodeCreateManyInput[]
  }

  /**
   * MapNode createManyAndReturn
   */
  export type MapNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * The data used to create many MapNodes.
     */
    data: MapNodeCreateManyInput | MapNodeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapNode update
   */
  export type MapNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a MapNode.
     */
    data: XOR<MapNodeUpdateInput, MapNodeUncheckedUpdateInput>
    /**
     * Choose, which MapNode to update.
     */
    where: MapNodeWhereUniqueInput
  }

  /**
   * MapNode updateMany
   */
  export type MapNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapNodes.
     */
    data: XOR<MapNodeUpdateManyMutationInput, MapNodeUncheckedUpdateManyInput>
    /**
     * Filter which MapNodes to update
     */
    where?: MapNodeWhereInput
    /**
     * Limit how many MapNodes to update.
     */
    limit?: number
  }

  /**
   * MapNode updateManyAndReturn
   */
  export type MapNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * The data used to update MapNodes.
     */
    data: XOR<MapNodeUpdateManyMutationInput, MapNodeUncheckedUpdateManyInput>
    /**
     * Filter which MapNodes to update
     */
    where?: MapNodeWhereInput
    /**
     * Limit how many MapNodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapNode upsert
   */
  export type MapNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the MapNode to update in case it exists.
     */
    where: MapNodeWhereUniqueInput
    /**
     * In case the MapNode found by the `where` argument doesn't exist, create a new MapNode with this data.
     */
    create: XOR<MapNodeCreateInput, MapNodeUncheckedCreateInput>
    /**
     * In case the MapNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapNodeUpdateInput, MapNodeUncheckedUpdateInput>
  }

  /**
   * MapNode delete
   */
  export type MapNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
    /**
     * Filter which MapNode to delete.
     */
    where: MapNodeWhereUniqueInput
  }

  /**
   * MapNode deleteMany
   */
  export type MapNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapNodes to delete
     */
    where?: MapNodeWhereInput
    /**
     * Limit how many MapNodes to delete.
     */
    limit?: number
  }

  /**
   * MapNode without action
   */
  export type MapNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapNode
     */
    select?: MapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapNode
     */
    omit?: MapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapNodeInclude<ExtArgs> | null
  }


  /**
   * Model MapEdge
   */

  export type AggregateMapEdge = {
    _count: MapEdgeCountAggregateOutputType | null
    _avg: MapEdgeAvgAggregateOutputType | null
    _sum: MapEdgeSumAggregateOutputType | null
    _min: MapEdgeMinAggregateOutputType | null
    _max: MapEdgeMaxAggregateOutputType | null
  }

  export type MapEdgeAvgAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    caseId: number | null
  }

  export type MapEdgeSumAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    caseId: number | null
  }

  export type MapEdgeMinAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    caseId: number | null
  }

  export type MapEdgeMaxAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    caseId: number | null
  }

  export type MapEdgeCountAggregateOutputType = {
    id: number
    fromId: number
    toId: number
    caseId: number
    _all: number
  }


  export type MapEdgeAvgAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    caseId?: true
  }

  export type MapEdgeSumAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    caseId?: true
  }

  export type MapEdgeMinAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    caseId?: true
  }

  export type MapEdgeMaxAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    caseId?: true
  }

  export type MapEdgeCountAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    caseId?: true
    _all?: true
  }

  export type MapEdgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapEdge to aggregate.
     */
    where?: MapEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapEdges to fetch.
     */
    orderBy?: MapEdgeOrderByWithRelationInput | MapEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapEdges
    **/
    _count?: true | MapEdgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapEdgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapEdgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapEdgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapEdgeMaxAggregateInputType
  }

  export type GetMapEdgeAggregateType<T extends MapEdgeAggregateArgs> = {
        [P in keyof T & keyof AggregateMapEdge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapEdge[P]>
      : GetScalarType<T[P], AggregateMapEdge[P]>
  }




  export type MapEdgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapEdgeWhereInput
    orderBy?: MapEdgeOrderByWithAggregationInput | MapEdgeOrderByWithAggregationInput[]
    by: MapEdgeScalarFieldEnum[] | MapEdgeScalarFieldEnum
    having?: MapEdgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapEdgeCountAggregateInputType | true
    _avg?: MapEdgeAvgAggregateInputType
    _sum?: MapEdgeSumAggregateInputType
    _min?: MapEdgeMinAggregateInputType
    _max?: MapEdgeMaxAggregateInputType
  }

  export type MapEdgeGroupByOutputType = {
    id: number
    fromId: number
    toId: number
    caseId: number
    _count: MapEdgeCountAggregateOutputType | null
    _avg: MapEdgeAvgAggregateOutputType | null
    _sum: MapEdgeSumAggregateOutputType | null
    _min: MapEdgeMinAggregateOutputType | null
    _max: MapEdgeMaxAggregateOutputType | null
  }

  type GetMapEdgeGroupByPayload<T extends MapEdgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapEdgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapEdgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapEdgeGroupByOutputType[P]>
            : GetScalarType<T[P], MapEdgeGroupByOutputType[P]>
        }
      >
    >


  export type MapEdgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapEdge"]>

  export type MapEdgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapEdge"]>

  export type MapEdgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    caseId?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapEdge"]>

  export type MapEdgeSelectScalar = {
    id?: boolean
    fromId?: boolean
    toId?: boolean
    caseId?: boolean
  }

  export type MapEdgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromId" | "toId" | "caseId", ExtArgs["result"]["mapEdge"]>
  export type MapEdgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type MapEdgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }
  export type MapEdgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $MapEdgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapEdge"
    objects: {
      case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fromId: number
      toId: number
      caseId: number
    }, ExtArgs["result"]["mapEdge"]>
    composites: {}
  }

  type MapEdgeGetPayload<S extends boolean | null | undefined | MapEdgeDefaultArgs> = $Result.GetResult<Prisma.$MapEdgePayload, S>

  type MapEdgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapEdgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapEdgeCountAggregateInputType | true
    }

  export interface MapEdgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapEdge'], meta: { name: 'MapEdge' } }
    /**
     * Find zero or one MapEdge that matches the filter.
     * @param {MapEdgeFindUniqueArgs} args - Arguments to find a MapEdge
     * @example
     * // Get one MapEdge
     * const mapEdge = await prisma.mapEdge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapEdgeFindUniqueArgs>(args: SelectSubset<T, MapEdgeFindUniqueArgs<ExtArgs>>): Prisma__MapEdgeClient<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapEdge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapEdgeFindUniqueOrThrowArgs} args - Arguments to find a MapEdge
     * @example
     * // Get one MapEdge
     * const mapEdge = await prisma.mapEdge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapEdgeFindUniqueOrThrowArgs>(args: SelectSubset<T, MapEdgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapEdgeClient<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapEdge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapEdgeFindFirstArgs} args - Arguments to find a MapEdge
     * @example
     * // Get one MapEdge
     * const mapEdge = await prisma.mapEdge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapEdgeFindFirstArgs>(args?: SelectSubset<T, MapEdgeFindFirstArgs<ExtArgs>>): Prisma__MapEdgeClient<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapEdge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapEdgeFindFirstOrThrowArgs} args - Arguments to find a MapEdge
     * @example
     * // Get one MapEdge
     * const mapEdge = await prisma.mapEdge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapEdgeFindFirstOrThrowArgs>(args?: SelectSubset<T, MapEdgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapEdgeClient<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapEdges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapEdgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapEdges
     * const mapEdges = await prisma.mapEdge.findMany()
     * 
     * // Get first 10 MapEdges
     * const mapEdges = await prisma.mapEdge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapEdgeWithIdOnly = await prisma.mapEdge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapEdgeFindManyArgs>(args?: SelectSubset<T, MapEdgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapEdge.
     * @param {MapEdgeCreateArgs} args - Arguments to create a MapEdge.
     * @example
     * // Create one MapEdge
     * const MapEdge = await prisma.mapEdge.create({
     *   data: {
     *     // ... data to create a MapEdge
     *   }
     * })
     * 
     */
    create<T extends MapEdgeCreateArgs>(args: SelectSubset<T, MapEdgeCreateArgs<ExtArgs>>): Prisma__MapEdgeClient<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapEdges.
     * @param {MapEdgeCreateManyArgs} args - Arguments to create many MapEdges.
     * @example
     * // Create many MapEdges
     * const mapEdge = await prisma.mapEdge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapEdgeCreateManyArgs>(args?: SelectSubset<T, MapEdgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapEdges and returns the data saved in the database.
     * @param {MapEdgeCreateManyAndReturnArgs} args - Arguments to create many MapEdges.
     * @example
     * // Create many MapEdges
     * const mapEdge = await prisma.mapEdge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapEdges and only return the `id`
     * const mapEdgeWithIdOnly = await prisma.mapEdge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapEdgeCreateManyAndReturnArgs>(args?: SelectSubset<T, MapEdgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapEdge.
     * @param {MapEdgeDeleteArgs} args - Arguments to delete one MapEdge.
     * @example
     * // Delete one MapEdge
     * const MapEdge = await prisma.mapEdge.delete({
     *   where: {
     *     // ... filter to delete one MapEdge
     *   }
     * })
     * 
     */
    delete<T extends MapEdgeDeleteArgs>(args: SelectSubset<T, MapEdgeDeleteArgs<ExtArgs>>): Prisma__MapEdgeClient<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapEdge.
     * @param {MapEdgeUpdateArgs} args - Arguments to update one MapEdge.
     * @example
     * // Update one MapEdge
     * const mapEdge = await prisma.mapEdge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapEdgeUpdateArgs>(args: SelectSubset<T, MapEdgeUpdateArgs<ExtArgs>>): Prisma__MapEdgeClient<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapEdges.
     * @param {MapEdgeDeleteManyArgs} args - Arguments to filter MapEdges to delete.
     * @example
     * // Delete a few MapEdges
     * const { count } = await prisma.mapEdge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapEdgeDeleteManyArgs>(args?: SelectSubset<T, MapEdgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapEdgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapEdges
     * const mapEdge = await prisma.mapEdge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapEdgeUpdateManyArgs>(args: SelectSubset<T, MapEdgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapEdges and returns the data updated in the database.
     * @param {MapEdgeUpdateManyAndReturnArgs} args - Arguments to update many MapEdges.
     * @example
     * // Update many MapEdges
     * const mapEdge = await prisma.mapEdge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapEdges and only return the `id`
     * const mapEdgeWithIdOnly = await prisma.mapEdge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MapEdgeUpdateManyAndReturnArgs>(args: SelectSubset<T, MapEdgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapEdge.
     * @param {MapEdgeUpsertArgs} args - Arguments to update or create a MapEdge.
     * @example
     * // Update or create a MapEdge
     * const mapEdge = await prisma.mapEdge.upsert({
     *   create: {
     *     // ... data to create a MapEdge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapEdge we want to update
     *   }
     * })
     */
    upsert<T extends MapEdgeUpsertArgs>(args: SelectSubset<T, MapEdgeUpsertArgs<ExtArgs>>): Prisma__MapEdgeClient<$Result.GetResult<Prisma.$MapEdgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapEdgeCountArgs} args - Arguments to filter MapEdges to count.
     * @example
     * // Count the number of MapEdges
     * const count = await prisma.mapEdge.count({
     *   where: {
     *     // ... the filter for the MapEdges we want to count
     *   }
     * })
    **/
    count<T extends MapEdgeCountArgs>(
      args?: Subset<T, MapEdgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapEdgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapEdgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MapEdgeAggregateArgs>(args: Subset<T, MapEdgeAggregateArgs>): Prisma.PrismaPromise<GetMapEdgeAggregateType<T>>

    /**
     * Group by MapEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapEdgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MapEdgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapEdgeGroupByArgs['orderBy'] }
        : { orderBy?: MapEdgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MapEdgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapEdgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapEdge model
   */
  readonly fields: MapEdgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapEdge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapEdgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MapEdge model
   */
  interface MapEdgeFieldRefs {
    readonly id: FieldRef<"MapEdge", 'Int'>
    readonly fromId: FieldRef<"MapEdge", 'Int'>
    readonly toId: FieldRef<"MapEdge", 'Int'>
    readonly caseId: FieldRef<"MapEdge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MapEdge findUnique
   */
  export type MapEdgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
    /**
     * Filter, which MapEdge to fetch.
     */
    where: MapEdgeWhereUniqueInput
  }

  /**
   * MapEdge findUniqueOrThrow
   */
  export type MapEdgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
    /**
     * Filter, which MapEdge to fetch.
     */
    where: MapEdgeWhereUniqueInput
  }

  /**
   * MapEdge findFirst
   */
  export type MapEdgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
    /**
     * Filter, which MapEdge to fetch.
     */
    where?: MapEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapEdges to fetch.
     */
    orderBy?: MapEdgeOrderByWithRelationInput | MapEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapEdges.
     */
    cursor?: MapEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapEdges.
     */
    distinct?: MapEdgeScalarFieldEnum | MapEdgeScalarFieldEnum[]
  }

  /**
   * MapEdge findFirstOrThrow
   */
  export type MapEdgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
    /**
     * Filter, which MapEdge to fetch.
     */
    where?: MapEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapEdges to fetch.
     */
    orderBy?: MapEdgeOrderByWithRelationInput | MapEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapEdges.
     */
    cursor?: MapEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapEdges.
     */
    distinct?: MapEdgeScalarFieldEnum | MapEdgeScalarFieldEnum[]
  }

  /**
   * MapEdge findMany
   */
  export type MapEdgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
    /**
     * Filter, which MapEdges to fetch.
     */
    where?: MapEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapEdges to fetch.
     */
    orderBy?: MapEdgeOrderByWithRelationInput | MapEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapEdges.
     */
    cursor?: MapEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapEdges.
     */
    skip?: number
    distinct?: MapEdgeScalarFieldEnum | MapEdgeScalarFieldEnum[]
  }

  /**
   * MapEdge create
   */
  export type MapEdgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
    /**
     * The data needed to create a MapEdge.
     */
    data: XOR<MapEdgeCreateInput, MapEdgeUncheckedCreateInput>
  }

  /**
   * MapEdge createMany
   */
  export type MapEdgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapEdges.
     */
    data: MapEdgeCreateManyInput | MapEdgeCreateManyInput[]
  }

  /**
   * MapEdge createManyAndReturn
   */
  export type MapEdgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * The data used to create many MapEdges.
     */
    data: MapEdgeCreateManyInput | MapEdgeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapEdge update
   */
  export type MapEdgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
    /**
     * The data needed to update a MapEdge.
     */
    data: XOR<MapEdgeUpdateInput, MapEdgeUncheckedUpdateInput>
    /**
     * Choose, which MapEdge to update.
     */
    where: MapEdgeWhereUniqueInput
  }

  /**
   * MapEdge updateMany
   */
  export type MapEdgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapEdges.
     */
    data: XOR<MapEdgeUpdateManyMutationInput, MapEdgeUncheckedUpdateManyInput>
    /**
     * Filter which MapEdges to update
     */
    where?: MapEdgeWhereInput
    /**
     * Limit how many MapEdges to update.
     */
    limit?: number
  }

  /**
   * MapEdge updateManyAndReturn
   */
  export type MapEdgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * The data used to update MapEdges.
     */
    data: XOR<MapEdgeUpdateManyMutationInput, MapEdgeUncheckedUpdateManyInput>
    /**
     * Filter which MapEdges to update
     */
    where?: MapEdgeWhereInput
    /**
     * Limit how many MapEdges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapEdge upsert
   */
  export type MapEdgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
    /**
     * The filter to search for the MapEdge to update in case it exists.
     */
    where: MapEdgeWhereUniqueInput
    /**
     * In case the MapEdge found by the `where` argument doesn't exist, create a new MapEdge with this data.
     */
    create: XOR<MapEdgeCreateInput, MapEdgeUncheckedCreateInput>
    /**
     * In case the MapEdge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapEdgeUpdateInput, MapEdgeUncheckedUpdateInput>
  }

  /**
   * MapEdge delete
   */
  export type MapEdgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
    /**
     * Filter which MapEdge to delete.
     */
    where: MapEdgeWhereUniqueInput
  }

  /**
   * MapEdge deleteMany
   */
  export type MapEdgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapEdges to delete
     */
    where?: MapEdgeWhereInput
    /**
     * Limit how many MapEdges to delete.
     */
    limit?: number
  }

  /**
   * MapEdge without action
   */
  export type MapEdgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapEdge
     */
    select?: MapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapEdge
     */
    omit?: MapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapEdgeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CaseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    status: 'status',
    category: 'category',
    suspect: 'suspect',
    officer: 'officer',
    notes: 'notes',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CaseScalarFieldEnum = (typeof CaseScalarFieldEnum)[keyof typeof CaseScalarFieldEnum]


  export const EvidenceScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    mimetype: 'mimetype',
    url: 'url',
    caseId: 'caseId',
    uploadedAt: 'uploadedAt'
  };

  export type EvidenceScalarFieldEnum = (typeof EvidenceScalarFieldEnum)[keyof typeof EvidenceScalarFieldEnum]


  export const MapNodeScalarFieldEnum: {
    id: 'id',
    label: 'label',
    x: 'x',
    y: 'y',
    caseId: 'caseId'
  };

  export type MapNodeScalarFieldEnum = (typeof MapNodeScalarFieldEnum)[keyof typeof MapNodeScalarFieldEnum]


  export const MapEdgeScalarFieldEnum: {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    caseId: 'caseId'
  };

  export type MapEdgeScalarFieldEnum = (typeof MapEdgeScalarFieldEnum)[keyof typeof MapEdgeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CaseWhereInput = {
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    id?: IntFilter<"Case"> | number
    title?: StringFilter<"Case"> | string
    type?: StringFilter<"Case"> | string
    status?: StringFilter<"Case"> | string
    category?: StringFilter<"Case"> | string
    suspect?: StringFilter<"Case"> | string
    officer?: StringFilter<"Case"> | string
    notes?: StringNullableFilter<"Case"> | string | null
    description?: StringFilter<"Case"> | string
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeFilter<"Case"> | Date | string
    evidence?: EvidenceListRelationFilter
    mapNodes?: MapNodeListRelationFilter
    mapEdges?: MapEdgeListRelationFilter
  }

  export type CaseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    status?: SortOrder
    category?: SortOrder
    suspect?: SortOrder
    officer?: SortOrder
    notes?: SortOrderInput | SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    evidence?: EvidenceOrderByRelationAggregateInput
    mapNodes?: MapNodeOrderByRelationAggregateInput
    mapEdges?: MapEdgeOrderByRelationAggregateInput
  }

  export type CaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    title?: StringFilter<"Case"> | string
    type?: StringFilter<"Case"> | string
    status?: StringFilter<"Case"> | string
    category?: StringFilter<"Case"> | string
    suspect?: StringFilter<"Case"> | string
    officer?: StringFilter<"Case"> | string
    notes?: StringNullableFilter<"Case"> | string | null
    description?: StringFilter<"Case"> | string
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeFilter<"Case"> | Date | string
    evidence?: EvidenceListRelationFilter
    mapNodes?: MapNodeListRelationFilter
    mapEdges?: MapEdgeListRelationFilter
  }, "id">

  export type CaseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    status?: SortOrder
    category?: SortOrder
    suspect?: SortOrder
    officer?: SortOrder
    notes?: SortOrderInput | SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CaseCountOrderByAggregateInput
    _avg?: CaseAvgOrderByAggregateInput
    _max?: CaseMaxOrderByAggregateInput
    _min?: CaseMinOrderByAggregateInput
    _sum?: CaseSumOrderByAggregateInput
  }

  export type CaseScalarWhereWithAggregatesInput = {
    AND?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    OR?: CaseScalarWhereWithAggregatesInput[]
    NOT?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Case"> | number
    title?: StringWithAggregatesFilter<"Case"> | string
    type?: StringWithAggregatesFilter<"Case"> | string
    status?: StringWithAggregatesFilter<"Case"> | string
    category?: StringWithAggregatesFilter<"Case"> | string
    suspect?: StringWithAggregatesFilter<"Case"> | string
    officer?: StringWithAggregatesFilter<"Case"> | string
    notes?: StringNullableWithAggregatesFilter<"Case"> | string | null
    description?: StringWithAggregatesFilter<"Case"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Case"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Case"> | Date | string
  }

  export type EvidenceWhereInput = {
    AND?: EvidenceWhereInput | EvidenceWhereInput[]
    OR?: EvidenceWhereInput[]
    NOT?: EvidenceWhereInput | EvidenceWhereInput[]
    id?: IntFilter<"Evidence"> | number
    filename?: StringFilter<"Evidence"> | string
    mimetype?: StringFilter<"Evidence"> | string
    url?: StringFilter<"Evidence"> | string
    caseId?: IntFilter<"Evidence"> | number
    uploadedAt?: DateTimeFilter<"Evidence"> | Date | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type EvidenceOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    mimetype?: SortOrder
    url?: SortOrder
    caseId?: SortOrder
    uploadedAt?: SortOrder
    case?: CaseOrderByWithRelationInput
  }

  export type EvidenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EvidenceWhereInput | EvidenceWhereInput[]
    OR?: EvidenceWhereInput[]
    NOT?: EvidenceWhereInput | EvidenceWhereInput[]
    filename?: StringFilter<"Evidence"> | string
    mimetype?: StringFilter<"Evidence"> | string
    url?: StringFilter<"Evidence"> | string
    caseId?: IntFilter<"Evidence"> | number
    uploadedAt?: DateTimeFilter<"Evidence"> | Date | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type EvidenceOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    mimetype?: SortOrder
    url?: SortOrder
    caseId?: SortOrder
    uploadedAt?: SortOrder
    _count?: EvidenceCountOrderByAggregateInput
    _avg?: EvidenceAvgOrderByAggregateInput
    _max?: EvidenceMaxOrderByAggregateInput
    _min?: EvidenceMinOrderByAggregateInput
    _sum?: EvidenceSumOrderByAggregateInput
  }

  export type EvidenceScalarWhereWithAggregatesInput = {
    AND?: EvidenceScalarWhereWithAggregatesInput | EvidenceScalarWhereWithAggregatesInput[]
    OR?: EvidenceScalarWhereWithAggregatesInput[]
    NOT?: EvidenceScalarWhereWithAggregatesInput | EvidenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evidence"> | number
    filename?: StringWithAggregatesFilter<"Evidence"> | string
    mimetype?: StringWithAggregatesFilter<"Evidence"> | string
    url?: StringWithAggregatesFilter<"Evidence"> | string
    caseId?: IntWithAggregatesFilter<"Evidence"> | number
    uploadedAt?: DateTimeWithAggregatesFilter<"Evidence"> | Date | string
  }

  export type MapNodeWhereInput = {
    AND?: MapNodeWhereInput | MapNodeWhereInput[]
    OR?: MapNodeWhereInput[]
    NOT?: MapNodeWhereInput | MapNodeWhereInput[]
    id?: IntFilter<"MapNode"> | number
    label?: StringFilter<"MapNode"> | string
    x?: IntFilter<"MapNode"> | number
    y?: IntFilter<"MapNode"> | number
    caseId?: IntFilter<"MapNode"> | number
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type MapNodeOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    x?: SortOrder
    y?: SortOrder
    caseId?: SortOrder
    case?: CaseOrderByWithRelationInput
  }

  export type MapNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MapNodeWhereInput | MapNodeWhereInput[]
    OR?: MapNodeWhereInput[]
    NOT?: MapNodeWhereInput | MapNodeWhereInput[]
    label?: StringFilter<"MapNode"> | string
    x?: IntFilter<"MapNode"> | number
    y?: IntFilter<"MapNode"> | number
    caseId?: IntFilter<"MapNode"> | number
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type MapNodeOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    x?: SortOrder
    y?: SortOrder
    caseId?: SortOrder
    _count?: MapNodeCountOrderByAggregateInput
    _avg?: MapNodeAvgOrderByAggregateInput
    _max?: MapNodeMaxOrderByAggregateInput
    _min?: MapNodeMinOrderByAggregateInput
    _sum?: MapNodeSumOrderByAggregateInput
  }

  export type MapNodeScalarWhereWithAggregatesInput = {
    AND?: MapNodeScalarWhereWithAggregatesInput | MapNodeScalarWhereWithAggregatesInput[]
    OR?: MapNodeScalarWhereWithAggregatesInput[]
    NOT?: MapNodeScalarWhereWithAggregatesInput | MapNodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MapNode"> | number
    label?: StringWithAggregatesFilter<"MapNode"> | string
    x?: IntWithAggregatesFilter<"MapNode"> | number
    y?: IntWithAggregatesFilter<"MapNode"> | number
    caseId?: IntWithAggregatesFilter<"MapNode"> | number
  }

  export type MapEdgeWhereInput = {
    AND?: MapEdgeWhereInput | MapEdgeWhereInput[]
    OR?: MapEdgeWhereInput[]
    NOT?: MapEdgeWhereInput | MapEdgeWhereInput[]
    id?: IntFilter<"MapEdge"> | number
    fromId?: IntFilter<"MapEdge"> | number
    toId?: IntFilter<"MapEdge"> | number
    caseId?: IntFilter<"MapEdge"> | number
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type MapEdgeOrderByWithRelationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    caseId?: SortOrder
    case?: CaseOrderByWithRelationInput
  }

  export type MapEdgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MapEdgeWhereInput | MapEdgeWhereInput[]
    OR?: MapEdgeWhereInput[]
    NOT?: MapEdgeWhereInput | MapEdgeWhereInput[]
    fromId?: IntFilter<"MapEdge"> | number
    toId?: IntFilter<"MapEdge"> | number
    caseId?: IntFilter<"MapEdge"> | number
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type MapEdgeOrderByWithAggregationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    caseId?: SortOrder
    _count?: MapEdgeCountOrderByAggregateInput
    _avg?: MapEdgeAvgOrderByAggregateInput
    _max?: MapEdgeMaxOrderByAggregateInput
    _min?: MapEdgeMinOrderByAggregateInput
    _sum?: MapEdgeSumOrderByAggregateInput
  }

  export type MapEdgeScalarWhereWithAggregatesInput = {
    AND?: MapEdgeScalarWhereWithAggregatesInput | MapEdgeScalarWhereWithAggregatesInput[]
    OR?: MapEdgeScalarWhereWithAggregatesInput[]
    NOT?: MapEdgeScalarWhereWithAggregatesInput | MapEdgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MapEdge"> | number
    fromId?: IntWithAggregatesFilter<"MapEdge"> | number
    toId?: IntWithAggregatesFilter<"MapEdge"> | number
    caseId?: IntWithAggregatesFilter<"MapEdge"> | number
  }

  export type CaseCreateInput = {
    title: string
    type: string
    status: string
    category: string
    suspect: string
    officer: string
    notes?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: EvidenceCreateNestedManyWithoutCaseInput
    mapNodes?: MapNodeCreateNestedManyWithoutCaseInput
    mapEdges?: MapEdgeCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateInput = {
    id?: number
    title: string
    type: string
    status: string
    category: string
    suspect: string
    officer: string
    notes?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: EvidenceUncheckedCreateNestedManyWithoutCaseInput
    mapNodes?: MapNodeUncheckedCreateNestedManyWithoutCaseInput
    mapEdges?: MapEdgeUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    suspect?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: EvidenceUpdateManyWithoutCaseNestedInput
    mapNodes?: MapNodeUpdateManyWithoutCaseNestedInput
    mapEdges?: MapEdgeUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    suspect?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: EvidenceUncheckedUpdateManyWithoutCaseNestedInput
    mapNodes?: MapNodeUncheckedUpdateManyWithoutCaseNestedInput
    mapEdges?: MapEdgeUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseCreateManyInput = {
    id?: number
    title: string
    type: string
    status: string
    category: string
    suspect: string
    officer: string
    notes?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    suspect?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    suspect?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceCreateInput = {
    filename: string
    mimetype: string
    url: string
    uploadedAt?: Date | string
    case: CaseCreateNestedOneWithoutEvidenceInput
  }

  export type EvidenceUncheckedCreateInput = {
    id?: number
    filename: string
    mimetype: string
    url: string
    caseId: number
    uploadedAt?: Date | string
  }

  export type EvidenceUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    case?: CaseUpdateOneRequiredWithoutEvidenceNestedInput
  }

  export type EvidenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caseId?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceCreateManyInput = {
    id?: number
    filename: string
    mimetype: string
    url: string
    caseId: number
    uploadedAt?: Date | string
  }

  export type EvidenceUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caseId?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapNodeCreateInput = {
    label: string
    x: number
    y: number
    case: CaseCreateNestedOneWithoutMapNodesInput
  }

  export type MapNodeUncheckedCreateInput = {
    id?: number
    label: string
    x: number
    y: number
    caseId: number
  }

  export type MapNodeUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    case?: CaseUpdateOneRequiredWithoutMapNodesNestedInput
  }

  export type MapNodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    caseId?: IntFieldUpdateOperationsInput | number
  }

  export type MapNodeCreateManyInput = {
    id?: number
    label: string
    x: number
    y: number
    caseId: number
  }

  export type MapNodeUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type MapNodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    caseId?: IntFieldUpdateOperationsInput | number
  }

  export type MapEdgeCreateInput = {
    fromId: number
    toId: number
    case: CaseCreateNestedOneWithoutMapEdgesInput
  }

  export type MapEdgeUncheckedCreateInput = {
    id?: number
    fromId: number
    toId: number
    caseId: number
  }

  export type MapEdgeUpdateInput = {
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    case?: CaseUpdateOneRequiredWithoutMapEdgesNestedInput
  }

  export type MapEdgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    caseId?: IntFieldUpdateOperationsInput | number
  }

  export type MapEdgeCreateManyInput = {
    id?: number
    fromId: number
    toId: number
    caseId: number
  }

  export type MapEdgeUpdateManyMutationInput = {
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
  }

  export type MapEdgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    caseId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EvidenceListRelationFilter = {
    every?: EvidenceWhereInput
    some?: EvidenceWhereInput
    none?: EvidenceWhereInput
  }

  export type MapNodeListRelationFilter = {
    every?: MapNodeWhereInput
    some?: MapNodeWhereInput
    none?: MapNodeWhereInput
  }

  export type MapEdgeListRelationFilter = {
    every?: MapEdgeWhereInput
    some?: MapEdgeWhereInput
    none?: MapEdgeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EvidenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapNodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapEdgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    status?: SortOrder
    category?: SortOrder
    suspect?: SortOrder
    officer?: SortOrder
    notes?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CaseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    status?: SortOrder
    category?: SortOrder
    suspect?: SortOrder
    officer?: SortOrder
    notes?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    status?: SortOrder
    category?: SortOrder
    suspect?: SortOrder
    officer?: SortOrder
    notes?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CaseScalarRelationFilter = {
    is?: CaseWhereInput
    isNot?: CaseWhereInput
  }

  export type EvidenceCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    mimetype?: SortOrder
    url?: SortOrder
    caseId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type EvidenceAvgOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
  }

  export type EvidenceMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    mimetype?: SortOrder
    url?: SortOrder
    caseId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type EvidenceMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    mimetype?: SortOrder
    url?: SortOrder
    caseId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type EvidenceSumOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
  }

  export type MapNodeCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    x?: SortOrder
    y?: SortOrder
    caseId?: SortOrder
  }

  export type MapNodeAvgOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    caseId?: SortOrder
  }

  export type MapNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    x?: SortOrder
    y?: SortOrder
    caseId?: SortOrder
  }

  export type MapNodeMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    x?: SortOrder
    y?: SortOrder
    caseId?: SortOrder
  }

  export type MapNodeSumOrderByAggregateInput = {
    id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    caseId?: SortOrder
  }

  export type MapEdgeCountOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    caseId?: SortOrder
  }

  export type MapEdgeAvgOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    caseId?: SortOrder
  }

  export type MapEdgeMaxOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    caseId?: SortOrder
  }

  export type MapEdgeMinOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    caseId?: SortOrder
  }

  export type MapEdgeSumOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    caseId?: SortOrder
  }

  export type EvidenceCreateNestedManyWithoutCaseInput = {
    create?: XOR<EvidenceCreateWithoutCaseInput, EvidenceUncheckedCreateWithoutCaseInput> | EvidenceCreateWithoutCaseInput[] | EvidenceUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutCaseInput | EvidenceCreateOrConnectWithoutCaseInput[]
    createMany?: EvidenceCreateManyCaseInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type MapNodeCreateNestedManyWithoutCaseInput = {
    create?: XOR<MapNodeCreateWithoutCaseInput, MapNodeUncheckedCreateWithoutCaseInput> | MapNodeCreateWithoutCaseInput[] | MapNodeUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MapNodeCreateOrConnectWithoutCaseInput | MapNodeCreateOrConnectWithoutCaseInput[]
    createMany?: MapNodeCreateManyCaseInputEnvelope
    connect?: MapNodeWhereUniqueInput | MapNodeWhereUniqueInput[]
  }

  export type MapEdgeCreateNestedManyWithoutCaseInput = {
    create?: XOR<MapEdgeCreateWithoutCaseInput, MapEdgeUncheckedCreateWithoutCaseInput> | MapEdgeCreateWithoutCaseInput[] | MapEdgeUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MapEdgeCreateOrConnectWithoutCaseInput | MapEdgeCreateOrConnectWithoutCaseInput[]
    createMany?: MapEdgeCreateManyCaseInputEnvelope
    connect?: MapEdgeWhereUniqueInput | MapEdgeWhereUniqueInput[]
  }

  export type EvidenceUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<EvidenceCreateWithoutCaseInput, EvidenceUncheckedCreateWithoutCaseInput> | EvidenceCreateWithoutCaseInput[] | EvidenceUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutCaseInput | EvidenceCreateOrConnectWithoutCaseInput[]
    createMany?: EvidenceCreateManyCaseInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type MapNodeUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<MapNodeCreateWithoutCaseInput, MapNodeUncheckedCreateWithoutCaseInput> | MapNodeCreateWithoutCaseInput[] | MapNodeUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MapNodeCreateOrConnectWithoutCaseInput | MapNodeCreateOrConnectWithoutCaseInput[]
    createMany?: MapNodeCreateManyCaseInputEnvelope
    connect?: MapNodeWhereUniqueInput | MapNodeWhereUniqueInput[]
  }

  export type MapEdgeUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<MapEdgeCreateWithoutCaseInput, MapEdgeUncheckedCreateWithoutCaseInput> | MapEdgeCreateWithoutCaseInput[] | MapEdgeUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MapEdgeCreateOrConnectWithoutCaseInput | MapEdgeCreateOrConnectWithoutCaseInput[]
    createMany?: MapEdgeCreateManyCaseInputEnvelope
    connect?: MapEdgeWhereUniqueInput | MapEdgeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EvidenceUpdateManyWithoutCaseNestedInput = {
    create?: XOR<EvidenceCreateWithoutCaseInput, EvidenceUncheckedCreateWithoutCaseInput> | EvidenceCreateWithoutCaseInput[] | EvidenceUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutCaseInput | EvidenceCreateOrConnectWithoutCaseInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutCaseInput | EvidenceUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: EvidenceCreateManyCaseInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutCaseInput | EvidenceUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutCaseInput | EvidenceUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type MapNodeUpdateManyWithoutCaseNestedInput = {
    create?: XOR<MapNodeCreateWithoutCaseInput, MapNodeUncheckedCreateWithoutCaseInput> | MapNodeCreateWithoutCaseInput[] | MapNodeUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MapNodeCreateOrConnectWithoutCaseInput | MapNodeCreateOrConnectWithoutCaseInput[]
    upsert?: MapNodeUpsertWithWhereUniqueWithoutCaseInput | MapNodeUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: MapNodeCreateManyCaseInputEnvelope
    set?: MapNodeWhereUniqueInput | MapNodeWhereUniqueInput[]
    disconnect?: MapNodeWhereUniqueInput | MapNodeWhereUniqueInput[]
    delete?: MapNodeWhereUniqueInput | MapNodeWhereUniqueInput[]
    connect?: MapNodeWhereUniqueInput | MapNodeWhereUniqueInput[]
    update?: MapNodeUpdateWithWhereUniqueWithoutCaseInput | MapNodeUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: MapNodeUpdateManyWithWhereWithoutCaseInput | MapNodeUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: MapNodeScalarWhereInput | MapNodeScalarWhereInput[]
  }

  export type MapEdgeUpdateManyWithoutCaseNestedInput = {
    create?: XOR<MapEdgeCreateWithoutCaseInput, MapEdgeUncheckedCreateWithoutCaseInput> | MapEdgeCreateWithoutCaseInput[] | MapEdgeUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MapEdgeCreateOrConnectWithoutCaseInput | MapEdgeCreateOrConnectWithoutCaseInput[]
    upsert?: MapEdgeUpsertWithWhereUniqueWithoutCaseInput | MapEdgeUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: MapEdgeCreateManyCaseInputEnvelope
    set?: MapEdgeWhereUniqueInput | MapEdgeWhereUniqueInput[]
    disconnect?: MapEdgeWhereUniqueInput | MapEdgeWhereUniqueInput[]
    delete?: MapEdgeWhereUniqueInput | MapEdgeWhereUniqueInput[]
    connect?: MapEdgeWhereUniqueInput | MapEdgeWhereUniqueInput[]
    update?: MapEdgeUpdateWithWhereUniqueWithoutCaseInput | MapEdgeUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: MapEdgeUpdateManyWithWhereWithoutCaseInput | MapEdgeUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: MapEdgeScalarWhereInput | MapEdgeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EvidenceUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<EvidenceCreateWithoutCaseInput, EvidenceUncheckedCreateWithoutCaseInput> | EvidenceCreateWithoutCaseInput[] | EvidenceUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutCaseInput | EvidenceCreateOrConnectWithoutCaseInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutCaseInput | EvidenceUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: EvidenceCreateManyCaseInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutCaseInput | EvidenceUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutCaseInput | EvidenceUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type MapNodeUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<MapNodeCreateWithoutCaseInput, MapNodeUncheckedCreateWithoutCaseInput> | MapNodeCreateWithoutCaseInput[] | MapNodeUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MapNodeCreateOrConnectWithoutCaseInput | MapNodeCreateOrConnectWithoutCaseInput[]
    upsert?: MapNodeUpsertWithWhereUniqueWithoutCaseInput | MapNodeUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: MapNodeCreateManyCaseInputEnvelope
    set?: MapNodeWhereUniqueInput | MapNodeWhereUniqueInput[]
    disconnect?: MapNodeWhereUniqueInput | MapNodeWhereUniqueInput[]
    delete?: MapNodeWhereUniqueInput | MapNodeWhereUniqueInput[]
    connect?: MapNodeWhereUniqueInput | MapNodeWhereUniqueInput[]
    update?: MapNodeUpdateWithWhereUniqueWithoutCaseInput | MapNodeUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: MapNodeUpdateManyWithWhereWithoutCaseInput | MapNodeUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: MapNodeScalarWhereInput | MapNodeScalarWhereInput[]
  }

  export type MapEdgeUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<MapEdgeCreateWithoutCaseInput, MapEdgeUncheckedCreateWithoutCaseInput> | MapEdgeCreateWithoutCaseInput[] | MapEdgeUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MapEdgeCreateOrConnectWithoutCaseInput | MapEdgeCreateOrConnectWithoutCaseInput[]
    upsert?: MapEdgeUpsertWithWhereUniqueWithoutCaseInput | MapEdgeUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: MapEdgeCreateManyCaseInputEnvelope
    set?: MapEdgeWhereUniqueInput | MapEdgeWhereUniqueInput[]
    disconnect?: MapEdgeWhereUniqueInput | MapEdgeWhereUniqueInput[]
    delete?: MapEdgeWhereUniqueInput | MapEdgeWhereUniqueInput[]
    connect?: MapEdgeWhereUniqueInput | MapEdgeWhereUniqueInput[]
    update?: MapEdgeUpdateWithWhereUniqueWithoutCaseInput | MapEdgeUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: MapEdgeUpdateManyWithWhereWithoutCaseInput | MapEdgeUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: MapEdgeScalarWhereInput | MapEdgeScalarWhereInput[]
  }

  export type CaseCreateNestedOneWithoutEvidenceInput = {
    create?: XOR<CaseCreateWithoutEvidenceInput, CaseUncheckedCreateWithoutEvidenceInput>
    connectOrCreate?: CaseCreateOrConnectWithoutEvidenceInput
    connect?: CaseWhereUniqueInput
  }

  export type CaseUpdateOneRequiredWithoutEvidenceNestedInput = {
    create?: XOR<CaseCreateWithoutEvidenceInput, CaseUncheckedCreateWithoutEvidenceInput>
    connectOrCreate?: CaseCreateOrConnectWithoutEvidenceInput
    upsert?: CaseUpsertWithoutEvidenceInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutEvidenceInput, CaseUpdateWithoutEvidenceInput>, CaseUncheckedUpdateWithoutEvidenceInput>
  }

  export type CaseCreateNestedOneWithoutMapNodesInput = {
    create?: XOR<CaseCreateWithoutMapNodesInput, CaseUncheckedCreateWithoutMapNodesInput>
    connectOrCreate?: CaseCreateOrConnectWithoutMapNodesInput
    connect?: CaseWhereUniqueInput
  }

  export type CaseUpdateOneRequiredWithoutMapNodesNestedInput = {
    create?: XOR<CaseCreateWithoutMapNodesInput, CaseUncheckedCreateWithoutMapNodesInput>
    connectOrCreate?: CaseCreateOrConnectWithoutMapNodesInput
    upsert?: CaseUpsertWithoutMapNodesInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutMapNodesInput, CaseUpdateWithoutMapNodesInput>, CaseUncheckedUpdateWithoutMapNodesInput>
  }

  export type CaseCreateNestedOneWithoutMapEdgesInput = {
    create?: XOR<CaseCreateWithoutMapEdgesInput, CaseUncheckedCreateWithoutMapEdgesInput>
    connectOrCreate?: CaseCreateOrConnectWithoutMapEdgesInput
    connect?: CaseWhereUniqueInput
  }

  export type CaseUpdateOneRequiredWithoutMapEdgesNestedInput = {
    create?: XOR<CaseCreateWithoutMapEdgesInput, CaseUncheckedCreateWithoutMapEdgesInput>
    connectOrCreate?: CaseCreateOrConnectWithoutMapEdgesInput
    upsert?: CaseUpsertWithoutMapEdgesInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutMapEdgesInput, CaseUpdateWithoutMapEdgesInput>, CaseUncheckedUpdateWithoutMapEdgesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EvidenceCreateWithoutCaseInput = {
    filename: string
    mimetype: string
    url: string
    uploadedAt?: Date | string
  }

  export type EvidenceUncheckedCreateWithoutCaseInput = {
    id?: number
    filename: string
    mimetype: string
    url: string
    uploadedAt?: Date | string
  }

  export type EvidenceCreateOrConnectWithoutCaseInput = {
    where: EvidenceWhereUniqueInput
    create: XOR<EvidenceCreateWithoutCaseInput, EvidenceUncheckedCreateWithoutCaseInput>
  }

  export type EvidenceCreateManyCaseInputEnvelope = {
    data: EvidenceCreateManyCaseInput | EvidenceCreateManyCaseInput[]
  }

  export type MapNodeCreateWithoutCaseInput = {
    label: string
    x: number
    y: number
  }

  export type MapNodeUncheckedCreateWithoutCaseInput = {
    id?: number
    label: string
    x: number
    y: number
  }

  export type MapNodeCreateOrConnectWithoutCaseInput = {
    where: MapNodeWhereUniqueInput
    create: XOR<MapNodeCreateWithoutCaseInput, MapNodeUncheckedCreateWithoutCaseInput>
  }

  export type MapNodeCreateManyCaseInputEnvelope = {
    data: MapNodeCreateManyCaseInput | MapNodeCreateManyCaseInput[]
  }

  export type MapEdgeCreateWithoutCaseInput = {
    fromId: number
    toId: number
  }

  export type MapEdgeUncheckedCreateWithoutCaseInput = {
    id?: number
    fromId: number
    toId: number
  }

  export type MapEdgeCreateOrConnectWithoutCaseInput = {
    where: MapEdgeWhereUniqueInput
    create: XOR<MapEdgeCreateWithoutCaseInput, MapEdgeUncheckedCreateWithoutCaseInput>
  }

  export type MapEdgeCreateManyCaseInputEnvelope = {
    data: MapEdgeCreateManyCaseInput | MapEdgeCreateManyCaseInput[]
  }

  export type EvidenceUpsertWithWhereUniqueWithoutCaseInput = {
    where: EvidenceWhereUniqueInput
    update: XOR<EvidenceUpdateWithoutCaseInput, EvidenceUncheckedUpdateWithoutCaseInput>
    create: XOR<EvidenceCreateWithoutCaseInput, EvidenceUncheckedCreateWithoutCaseInput>
  }

  export type EvidenceUpdateWithWhereUniqueWithoutCaseInput = {
    where: EvidenceWhereUniqueInput
    data: XOR<EvidenceUpdateWithoutCaseInput, EvidenceUncheckedUpdateWithoutCaseInput>
  }

  export type EvidenceUpdateManyWithWhereWithoutCaseInput = {
    where: EvidenceScalarWhereInput
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyWithoutCaseInput>
  }

  export type EvidenceScalarWhereInput = {
    AND?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
    OR?: EvidenceScalarWhereInput[]
    NOT?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
    id?: IntFilter<"Evidence"> | number
    filename?: StringFilter<"Evidence"> | string
    mimetype?: StringFilter<"Evidence"> | string
    url?: StringFilter<"Evidence"> | string
    caseId?: IntFilter<"Evidence"> | number
    uploadedAt?: DateTimeFilter<"Evidence"> | Date | string
  }

  export type MapNodeUpsertWithWhereUniqueWithoutCaseInput = {
    where: MapNodeWhereUniqueInput
    update: XOR<MapNodeUpdateWithoutCaseInput, MapNodeUncheckedUpdateWithoutCaseInput>
    create: XOR<MapNodeCreateWithoutCaseInput, MapNodeUncheckedCreateWithoutCaseInput>
  }

  export type MapNodeUpdateWithWhereUniqueWithoutCaseInput = {
    where: MapNodeWhereUniqueInput
    data: XOR<MapNodeUpdateWithoutCaseInput, MapNodeUncheckedUpdateWithoutCaseInput>
  }

  export type MapNodeUpdateManyWithWhereWithoutCaseInput = {
    where: MapNodeScalarWhereInput
    data: XOR<MapNodeUpdateManyMutationInput, MapNodeUncheckedUpdateManyWithoutCaseInput>
  }

  export type MapNodeScalarWhereInput = {
    AND?: MapNodeScalarWhereInput | MapNodeScalarWhereInput[]
    OR?: MapNodeScalarWhereInput[]
    NOT?: MapNodeScalarWhereInput | MapNodeScalarWhereInput[]
    id?: IntFilter<"MapNode"> | number
    label?: StringFilter<"MapNode"> | string
    x?: IntFilter<"MapNode"> | number
    y?: IntFilter<"MapNode"> | number
    caseId?: IntFilter<"MapNode"> | number
  }

  export type MapEdgeUpsertWithWhereUniqueWithoutCaseInput = {
    where: MapEdgeWhereUniqueInput
    update: XOR<MapEdgeUpdateWithoutCaseInput, MapEdgeUncheckedUpdateWithoutCaseInput>
    create: XOR<MapEdgeCreateWithoutCaseInput, MapEdgeUncheckedCreateWithoutCaseInput>
  }

  export type MapEdgeUpdateWithWhereUniqueWithoutCaseInput = {
    where: MapEdgeWhereUniqueInput
    data: XOR<MapEdgeUpdateWithoutCaseInput, MapEdgeUncheckedUpdateWithoutCaseInput>
  }

  export type MapEdgeUpdateManyWithWhereWithoutCaseInput = {
    where: MapEdgeScalarWhereInput
    data: XOR<MapEdgeUpdateManyMutationInput, MapEdgeUncheckedUpdateManyWithoutCaseInput>
  }

  export type MapEdgeScalarWhereInput = {
    AND?: MapEdgeScalarWhereInput | MapEdgeScalarWhereInput[]
    OR?: MapEdgeScalarWhereInput[]
    NOT?: MapEdgeScalarWhereInput | MapEdgeScalarWhereInput[]
    id?: IntFilter<"MapEdge"> | number
    fromId?: IntFilter<"MapEdge"> | number
    toId?: IntFilter<"MapEdge"> | number
    caseId?: IntFilter<"MapEdge"> | number
  }

  export type CaseCreateWithoutEvidenceInput = {
    title: string
    type: string
    status: string
    category: string
    suspect: string
    officer: string
    notes?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mapNodes?: MapNodeCreateNestedManyWithoutCaseInput
    mapEdges?: MapEdgeCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutEvidenceInput = {
    id?: number
    title: string
    type: string
    status: string
    category: string
    suspect: string
    officer: string
    notes?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mapNodes?: MapNodeUncheckedCreateNestedManyWithoutCaseInput
    mapEdges?: MapEdgeUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutEvidenceInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutEvidenceInput, CaseUncheckedCreateWithoutEvidenceInput>
  }

  export type CaseUpsertWithoutEvidenceInput = {
    update: XOR<CaseUpdateWithoutEvidenceInput, CaseUncheckedUpdateWithoutEvidenceInput>
    create: XOR<CaseCreateWithoutEvidenceInput, CaseUncheckedCreateWithoutEvidenceInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutEvidenceInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutEvidenceInput, CaseUncheckedUpdateWithoutEvidenceInput>
  }

  export type CaseUpdateWithoutEvidenceInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    suspect?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapNodes?: MapNodeUpdateManyWithoutCaseNestedInput
    mapEdges?: MapEdgeUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutEvidenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    suspect?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapNodes?: MapNodeUncheckedUpdateManyWithoutCaseNestedInput
    mapEdges?: MapEdgeUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseCreateWithoutMapNodesInput = {
    title: string
    type: string
    status: string
    category: string
    suspect: string
    officer: string
    notes?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: EvidenceCreateNestedManyWithoutCaseInput
    mapEdges?: MapEdgeCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutMapNodesInput = {
    id?: number
    title: string
    type: string
    status: string
    category: string
    suspect: string
    officer: string
    notes?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: EvidenceUncheckedCreateNestedManyWithoutCaseInput
    mapEdges?: MapEdgeUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutMapNodesInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutMapNodesInput, CaseUncheckedCreateWithoutMapNodesInput>
  }

  export type CaseUpsertWithoutMapNodesInput = {
    update: XOR<CaseUpdateWithoutMapNodesInput, CaseUncheckedUpdateWithoutMapNodesInput>
    create: XOR<CaseCreateWithoutMapNodesInput, CaseUncheckedCreateWithoutMapNodesInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutMapNodesInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutMapNodesInput, CaseUncheckedUpdateWithoutMapNodesInput>
  }

  export type CaseUpdateWithoutMapNodesInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    suspect?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: EvidenceUpdateManyWithoutCaseNestedInput
    mapEdges?: MapEdgeUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutMapNodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    suspect?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: EvidenceUncheckedUpdateManyWithoutCaseNestedInput
    mapEdges?: MapEdgeUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseCreateWithoutMapEdgesInput = {
    title: string
    type: string
    status: string
    category: string
    suspect: string
    officer: string
    notes?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: EvidenceCreateNestedManyWithoutCaseInput
    mapNodes?: MapNodeCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutMapEdgesInput = {
    id?: number
    title: string
    type: string
    status: string
    category: string
    suspect: string
    officer: string
    notes?: string | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    evidence?: EvidenceUncheckedCreateNestedManyWithoutCaseInput
    mapNodes?: MapNodeUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutMapEdgesInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutMapEdgesInput, CaseUncheckedCreateWithoutMapEdgesInput>
  }

  export type CaseUpsertWithoutMapEdgesInput = {
    update: XOR<CaseUpdateWithoutMapEdgesInput, CaseUncheckedUpdateWithoutMapEdgesInput>
    create: XOR<CaseCreateWithoutMapEdgesInput, CaseUncheckedCreateWithoutMapEdgesInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutMapEdgesInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutMapEdgesInput, CaseUncheckedUpdateWithoutMapEdgesInput>
  }

  export type CaseUpdateWithoutMapEdgesInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    suspect?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: EvidenceUpdateManyWithoutCaseNestedInput
    mapNodes?: MapNodeUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutMapEdgesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    suspect?: StringFieldUpdateOperationsInput | string
    officer?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evidence?: EvidenceUncheckedUpdateManyWithoutCaseNestedInput
    mapNodes?: MapNodeUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type EvidenceCreateManyCaseInput = {
    id?: number
    filename: string
    mimetype: string
    url: string
    uploadedAt?: Date | string
  }

  export type MapNodeCreateManyCaseInput = {
    id?: number
    label: string
    x: number
    y: number
  }

  export type MapEdgeCreateManyCaseInput = {
    id?: number
    fromId: number
    toId: number
  }

  export type EvidenceUpdateWithoutCaseInput = {
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvidenceUncheckedUpdateManyWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    mimetype?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapNodeUpdateWithoutCaseInput = {
    label?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type MapNodeUncheckedUpdateWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type MapNodeUncheckedUpdateManyWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type MapEdgeUpdateWithoutCaseInput = {
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
  }

  export type MapEdgeUncheckedUpdateWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
  }

  export type MapEdgeUncheckedUpdateManyWithoutCaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}