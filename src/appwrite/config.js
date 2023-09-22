import { Account, Client, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT_URL)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID)

export const account = new Account(client);
export const databases = new Databases(client)
