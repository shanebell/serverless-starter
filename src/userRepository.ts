import AWS from "aws-sdk";

const TABLE_NAME = "users";

const dynamo = new AWS.DynamoDB.DocumentClient();

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const userRepository = {
  list: async (): Promise<User[]> => {
    const { Items } = await dynamo.scan({ TableName: TABLE_NAME }).promise();
    return Items as User[];
  },

  get: async (id: string): Promise<User | undefined> => {
    const { Item } = await dynamo.get({ TableName: TABLE_NAME, Key: { id } }).promise();
    return Item as User;
  },

  save: async (user: User): Promise<void> => {
    await dynamo.put({ TableName: TABLE_NAME, Item: user }).promise();
  },
};

export default userRepository;
