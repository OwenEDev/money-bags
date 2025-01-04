import { DeleteItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const dbClient = new DynamoDBClient({
    credentials: {
        accessKeyId: process.env.DYNAMO_ACCESS_KEY,
        secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY,
    },
    region: process.env.DYNAMO_REGION,
});

const docClient = DynamoDBDocumentClient.from(dbClient);

export const createNewMoneyBag = async (MoneyBagName, MoneyBagBudget) => {
    const command = new PutCommand({
        TableName: process.env.DYNAMO_TABLE_NAME,
  
        Item: {
            MoneyBagID: MoneyBagName,
            purchases: {},
            budget: MoneyBagBudget,
        }
    })
    try {
        const response = await docClient.send(command);
    } catch (error) {
        throw error
    }
}

export const getMoneybag = async (MoneyBagName) => {
    const command = new GetCommand({
        TableName: process.env.DYNAMO_TABLE_NAME,
        Key: {
            MoneyBagID: MoneyBagName
        }
    })

    try {
        const response = await docClient.send(command);
        return response.Item
    } catch (error) {
        throw error
    }
}

export const addPurchase = async (MoneyBagName, Purchase) => {
    const command = new UpdateCommand({
        TableName: process.env.DYNAMO_TABLE_NAME,
        Key: {
            MoneyBagID: MoneyBagName,
        },
        UpdateExpression: `SET purchases.#purchaseKey = :purchaseAmount`,
        ExpressionAttributeValues: {
            ":purchaseAmount": Purchase.amount,
        },
        ExpressionAttributeNames: {
            "#purchaseKey": Purchase.name,
        },
        ReturnValues: "ALL_NEW"
    })

    try {
        const response = await docClient.send(command);
        return response
    } catch (error) {
        throw error
    }
}

export const deletePurchase = async (MoneyBagName, purchaseName) => {
    const command = new UpdateCommand({
        TableName: process.env.DYNAMO_TABLE_NAME,
        Key: {
            MoneyBagID: MoneyBagName
        },
        UpdateExpression: `REMOVE purchases.#purchaseKey`,
        ExpressionAttributeNames: {
            "#purchaseKey": purchaseName,
        },
        ReturnValues: "ALL_NEW",
    })

    try {
        const response = await docClient.send(command);
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteMoneyBagDB = async (MoneyBagName) => {
    const command = new DeleteCommand({
        TableName: process.env.DYNAMO_TABLE_NAME,
        Key: {
            MoneyBagID: MoneyBagName
        },
    })

    try {
        const response = await docClient.send(command)
        return response;
    } catch (error) {
        throw error
    }
}