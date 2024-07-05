
import clientPost from '../controller/clientController.mjs'

const clientRoute=async(express)=>{
express.post('/client',clientPost)
}

export default clientRoute