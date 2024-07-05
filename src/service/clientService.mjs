import dataInRepo from '../repository/clientRepo.mjs'

const dataInService=async(clliendData)=>{
try{
const data=await dataInRepo(clliendData);
return data

}catch(error){
    throw error
}
}

export default dataInService