import userRepository from '../repositories/user.repositories.js';
import bcrypt from 'bcrypt';

async function createUserService(newUser){
    const foundUser = await userRepository.findUserByEmailRepository(
        newUser.email);
    if(foundUser) throw new Error("Usuario já existente");

    const passHash = await bcrypt.hash(newUser.passoword, 10);

    const user = await userRepository.createUserRepository({...newUser,
        passoword: passHash,
    });

    if(!user) throw new Error("Erro ao criar o usuario");
    return user;
}

async function findAllUsersService (){
    const users = await userRepository.findAllUserRepository();
    return users;
}

async function findUserByIdService(id) {
    const user = await userRepository.findUserByIdRepository(id)
    if(!user) throw new Error("usuario não encontrado");
    return user
    
}

export default{
    createUserService,
    findAllUsersService,
    findUserByIdService,
};