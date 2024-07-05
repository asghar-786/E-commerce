import  dataSource from '../infrastructure/postgres.mjs'

const clientRepo = dataSource.getRepository("client");

const contactUsRepo = async (ClientData) => {
    try {
        const data = clientRepo.create(ClientData);
        const result = await clientRepo.save(data);
        return result;
    } catch (error) {
        throw error;
    }
};

export default contactUsRepo