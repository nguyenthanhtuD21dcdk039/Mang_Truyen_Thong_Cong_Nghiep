import { MongoClient, Db, Collection } from 'mongodb';
import {config} from 'dotenv'
import User from '~/models/schemas/User.schema'
import RefreshToken from '~/models/schemas/RefreshToken.schema';
import Follower from '~/models/schemas/Follower.schema';
config()
const uri =`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@test1.rz6zphz.mongodb.net/?retryWrites=true&w=majority&appName=Test1`;

class DatabaseService{
  private client: MongoClient
  private db: Db
  constructor(){
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }
  async connect(){
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error){
      console.log('Error', error)
      throw error
    }
  }


  get users(): Collection<User> { 
    return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  }

  get refreshTokens(): Collection<RefreshToken>{
    return this.db.collection(process.env.DB_REFRESH_TOKENS_COLLECTION as string)
  }

  get followers(): Collection<Follower>{
    return this.db.collection(process.env.DB_FOLLOWERS_COLLECTION as string)
  }
}
// Tạo object từ class DatabaseService
const databaseService = new DatabaseService()
export default databaseService
