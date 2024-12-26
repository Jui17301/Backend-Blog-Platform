/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
// class which in one kind of blueprint of object.

import { FilterQuery, Query } from "mongoose";


class QueryBuilder<T>{
    public modelQuery:Query<T[],T> //comes from service(any type service like booking/tour/user) [T[] array or T means single object]
    public query:Record<string,unknown> //query from postman/client

    constructor(modelQuery:Query<T[],T>,query:Record<string,unknown>){
         this.modelQuery=modelQuery
         this.query=query
    }


    search(searchableFields:string[]){

        const searchTerm=this?.query?.search
        this.modelQuery=this.modelQuery.find({
            $or:searchableFields.map((field:any)=>({
                [field]:{$regex:searchTerm,$options:'i'}
            }))
        } as FilterQuery<T>)

        return this

    }


    filter(){
        const queryObj={...this.query}
        const excludingImportant=['searchTerm',
      'sortOrder',
      'sortBy',
      'fields']

      excludingImportant.forEach((key)=>delete queryObj[key]);

      this.modelQuery =this.modelQuery.find(queryObj);

      return this;
    }
    sort(){
        let sortStr 

        if(this?.query?.sortBy && this?.query?.sortQuery){
            const sortBy=this?.query?.sortBy
            const sortOrder = this?.query?.sortOrder
      // "-price" othoba "price"
      sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`
    }

    this.modelQuery = this.modelQuery.sort(sortStr)

    return this
 
        }
        // select() {
        //     let fields = '-__v'
        
        //     if (this?.query?.fields) {
        //       fields = (this?.query.fields as string)?.split(',').join(' ')
        //     }
        
        //     this.modelQuery = this.modelQuery.select(fields)
        
        //     return this
        //   }
}

export default QueryBuilder