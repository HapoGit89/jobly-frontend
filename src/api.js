import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *cd cl 
 */

export class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      
      return err
      // let message = err.response.data.error.message;
      // throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all Companies in db */

  static async getAllCompanies() {
    let res = await this.request(`companies/`);
    return res;
  }

    /** Get all Jobs in db */

  static async getAllJobs() {
    let res = await this.request(`jobs/`);
    return res;
  }

   /** Find all companies which include name-string in name */

  static async findAllCompanies(name) {
    let res = await this.request(`companies/`,{name: name});
    return res;
  }

  /** Find all companies which include title-string in title */

  static async findAllJobs(title) {
    let res = await this.request(`jobs/`,{title: title});
    return res;
  }

  static async SignUp(data){
    try{
      let res = await this.request(`auth/register`, {...data}, "post")
      return res
      }
    catch(e){
      return (e)
    }
  }

  static async Login(data, callback){
    try{let res = await this.request(`auth/token`, {...data}, "post")
    return res}
    catch(e){
      return (e)
    }
}

static async getUser(username){
  try{
    let res = await this.request(`users/${username}`)
    return res
  }
  catch(e){
    return e
  }
}

static async deleteUser(username){
  try{
    let res = await this.request(`users/${username}`,{}, "delete")
    return res
  }
  catch(e){
    return e
  }
}

static async patchUser(username,data){
  try{
    let res = await this.request(`users/${username}`,{...data}, "patch")
    return res
  }
  catch(e){
    return e
  }
}

static async ApplyForJob(username,jobId){
  try{
    let res = await this.request(`users/${username}/jobs/${jobId}`,{},"post")
    return res
  }
  catch(e){
    return e
  }
}

}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
