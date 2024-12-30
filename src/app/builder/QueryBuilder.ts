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
        if (searchTerm) {
        this.modelQuery=this.modelQuery.find({
            $or:searchableFields.map((field:string)=>({
                [field]:{$regex:searchTerm,$options:'i'}
            }))
        } as FilterQuery<T>)
    }
        return this

    }


    filter(){
        const queryObj={...this.query}
        const excludingImportant=['search',
      'sortOrder',
      'sortBy'
    ]

      excludingImportant.forEach((key)=>delete queryObj[key]);

      this.modelQuery =this.modelQuery.find(queryObj as FilterQuery<T>);

      return this;
    }
    sort(){
        let sortStr 

        if(this?.query?.sortBy && this?.query?.sortQuery){
            const sortBy=this?.query?.sortBy
            const sortOrder = this?.query?.sortOrder
      // "-price" othoba "price"
      sortStr = `${sortOrder === 'desc' ? '-' : ''}${sortBy}`
    

    this.modelQuery = this.modelQuery.sort(sortStr)
        }
    return this
 
        }
      
}

export default QueryBuilder