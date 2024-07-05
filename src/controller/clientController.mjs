import dataInService from '../service/clientService.mjs'

const clientPost=async(request,response)=>{
try{

    const clliendData=request.body;
    const data =await dataInService(clliendData)
    if(data){
        response.send({
            success:"Success",
            data:data
        })
    }
}catch(error){
    throw error
}
}

export default clientPost