import { Client, Account} from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') //this is my actual endpoint
    .setProject('67f3b5ad000514167a2f');

const account = new Account(client);



export default account;
