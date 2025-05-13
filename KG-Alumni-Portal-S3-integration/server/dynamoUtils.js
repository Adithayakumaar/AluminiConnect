require("dotenv").config();

const { DynamoDBClient, CreateTableCommand, DescribeTableCommand } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand
} = require("@aws-sdk/lib-dynamodb");


const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const docClient = DynamoDBDocumentClient.from(client);

// Function to create table if it doesn't exist
const createTableIfNotExists = async (tableName) => {
  try {
    // Check if table exists
    await client.send(new DescribeTableCommand({ TableName: tableName }));
    console.log(`Table ${tableName} already exists`);
  } catch (error) {
    if (error.name === 'ResourceNotFoundException') {
      // Table doesn't exist, create it
      const params = {
        TableName: tableName,
        KeySchema: [
          { AttributeName: "userId", KeyType: "HASH" }  // Partition key
        ],
        AttributeDefinitions: [
          { AttributeName: "userId", AttributeType: "S" }
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
        }
      };

      try {
        await client.send(new CreateTableCommand(params));
        console.log(`Table ${tableName} created successfully`);
        // Wait for table to be created
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (err) {
        console.error(`Error creating table ${tableName}:`, err);
        throw err;
      }
    } else {
      throw error;
    }
  }
};

// Initialize tables
const initializeTables = async () => {
  const tables = ["jobs", "alumni", "event", "conference", "student", "internShip"];
  for (const table of tables) {
    await createTableIfNotExists(table);
  }
};

// Call initializeTables when the server starts
initializeTables().catch(console.error);

const saveToDynamoDB = async (data, tablename) => {
  let tableName;

  switch (tablename) {
    case "jobs":
      tableName = "jobs";
      break;
    case "alumni":
      tableName = "alumni";
      break;
    case "event":
      tableName = "event";
      break;
    case "conference":
      tableName = "conference";
      break;
    case "student":
      tableName = "student";
      break;
    case "internShip":
      tableName = "internShip";
      break;
    default:
      throw new Error(`Unknown table: ${tablename}`);
  }

  const params = {
    TableName: tableName,
    Item: data
  };

  await docClient.send(new PutCommand(params));
};

const getFromDynamoDB = async (tablename) => {
  let tableName;

  switch (tablename) {
    case "jobs":
      tableName = "jobs";
      break;
    case "alumni":
      tableName = "alumni";
      break;
    case "event":
      tableName = "event";
      break;
    case "conference":
      tableName = "conference";
      break;
    case "student":
      tableName = "student";
      break;
    case "internShip":
      tableName = "internShip";
      break;
    default:
      throw new Error(`Unknown table: ${tablename}`);
  }

  const params = {
    TableName: tableName,
  };

  const data = await docClient.send(new ScanCommand(params));
  return data.Items;
};

// const getItemByKeyFromDynamoDB = async (tablename, key) => {
//   let tableName;

//   switch (tablename) {
//     case "jobs":
//       tableName = "jobs";
//       break;
//     case "internship":
//       tableName = "internship";
//       break;
//     default:
//       throw new Error(`Unknown table: ${tablename}`);
//   }

//   const params = {
//     TableName: tableName,
//     Key: key, 
//   };

//   const result = await docClient.send(new GetCommand(params));
//   return result.Item;
// };

module.exports = {
  saveToDynamoDB,
  getFromDynamoDB
};
