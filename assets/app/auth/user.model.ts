/**
 * Created by jmccommas on 7/4/17.
 */
export  class User{
    constructor(
        public email:string,
        public password:string,
        public firstName?:string,
        public lastName?:string,
    ){}
}