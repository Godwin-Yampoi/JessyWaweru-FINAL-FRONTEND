import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faTrophy } from "@fortawesome/free-solid-svg-icons"
import { faHistory } from "@fortawesome/free-solid-svg-icons"
function Highlights(){

    
    return(
        
             <div className=" flex justify-evenly items-center w-3/4 m-auto h-[50vh] text-gray-700 bg-https://images.unsplash.com/photo-1637625854255-d893202554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
      style={{
        backgroundImage:`url('https://images.unsplash.com/photo-1637625854255-d893202554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80')`
      }}>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"> <FontAwesomeIcon icon={faSearch} className="fa-solid"/>
                </div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">SEARCH-FOR-PRODUCTS</h3>
                <p className="text-center">Simply enter the product name,and our app will gather information from some of the  most popular e-commerce sites</p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"> <FontAwesomeIcon icon={faTrophy} className="fa-solid"/></div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">ON-DEMAND RANKINGS</h3>
                <p className="text-center">The search results will be automatically ranked by cost and marginal benefits.Find what works for you</p>
            </div>
           
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"> <FontAwesomeIcon icon={faHistory} className="fa-solid"/></div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">SEARCH HISTORY</h3>
                <p className="text-center"> Shopcrawl keeps a record of your search history,enabling easy revision of previous searches and findings.</p>
            </div>
                  
        </div>
    )
}

export default Highlights