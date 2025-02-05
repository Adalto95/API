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

export default{
    createUserService,
};