import { z } from "zod";

const userShema = z.object({
    username: z.string().min(3,"Nome de usuario menos que 3 carcteres"),
    email: z.string().email("Email invalido"),
    passoword: z.string().min(6,"Senha menor que 6 carcteres"),
    avatar: z.string().url("Não e um link valido").optional(),
});
export {userShema};