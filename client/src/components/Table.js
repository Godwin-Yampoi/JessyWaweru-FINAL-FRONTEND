import React,{useState} from 'react'
import { Link } from "react-router-dom";
const Table=({product})=>{
console.log(product)
    const [sortBy,setSortBy]=useState('price')
    const platforms=['jumium','amazon','kilimall','shopify']
        const platformData=platforms.map((platform)=>{
            console.log(platform)
            const pro=[product].find((p)=>p[platform])
            if(!pro) {return <div>Loading...</div>}
            console.log(pro)
        const{price,shipping_cost,days_to_ship,review,product_location}=pro[platform]
        const costBenefit=(parseFloat(1/price)+parseFloat(1/shipping_cost)*100).toFixed(2)
        const marginalBenefit=(parseFloat(((1/days_to_ship)-(1/review))*100)).toFixed(2)
        return{
            name:platform,
            price:price,
            ShippingCost:shipping_cost,
            daysToShip:days_to_ship,
            review:review,
            productLocation:product_location,
            costBenefit:costBenefit,
            marginalBenefit:marginalBenefit
        }
    }).filter(Boolean)
      const sortData=(data)=>{
        return data.sort((a,b)=>b[sortBy]-a[sortBy])
      }      
      const sortedData=sortData(platformData)
      console.log(sortedData)
    platformData.sort((a,b)=>b[sortBy]-a[sortBy])
    
       
    return(
        <div>
            <div>
                {sortedData.map((platform,index)=>
               { if (index===0){
                  return <h3 className='uppercase text-3xl font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-lg shadow-lg animate-pulse'>SHOPCRAWL RECOMMENDS {platform.name}</h3>
                }
                
            }
               )}
            </div>
       <p className='text-white p-4 rounded-lg hover:text-red-500 transition-colors duration-300'>FILTER RANKINGS BELOW:</p> 
       <div className='p-4'>
        <select onChange={e=>setSortBy(e.target.value)}
          className='mb-4 px-2 py-1 border rounded'>
            <option value="price">Price</option>
            <option value="costBenefit">Cost Benefit</option>
            <option value="marginalbenefit">Marginal Benefit</option>
        </select>
        <table className='w-full border-collapse'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='p-2'>RANKINGS</th>
                    <th className='p-2'>PRICE (KSH)</th>
                    <th className='p-2'>SHIPPING COST(KSH)</th>
                    <th className='p-2'>SHIPPING DAYS</th>
                    <th className='p-2'>STAR RATING</th>
                    <th className='p-2'>SHIPPED FROM</th>
                    <th className='p-2'>COST BENEFIT</th>
                    <th className='p-2'>MARGINAL BENEFIT</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((platform,index)=>(
                    
                
                    <tr key={index} className='relative border-t'>
                        <td className='p-2'><Link to={`https://${platform.name}.com`}><span className=' uppercase text-red group  text-red-500 font-bold underline'>{platform.name}<span className='absolute bg-white text-red p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>click {platform.name}'s shopping site</span></span></Link></td>
                        <td className='p-2'>{platform.price}</td>
                        <td className='p-2' >{platform.ShippingCost}</td>
                        <td className='p-2'>{platform.daysToShip}</td>
                        <td className='p-2'>{platform.review}</td>
                        <td className='p-2'>{platform.productLocation}</td>
                        <td className='p-2'>{platform.costBenefit}%</td>
                        <td className='p-2'>{platform.marginalBenefit}%</td>
                    
                    </tr>
                
                ))}
                
            </tbody>
        </table>
       </div>
       </div>
    )
}
export default Table