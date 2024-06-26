import logoImg from "../../assets/logo.svg";
import { Container } from "../../components/container";

import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

const schema = z.object({
  email: z
    .string()
    .email("Insira um email válido")
    .min(1, "O email é obrigatório"),
  password: z.string().min(1, "A senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        alert("Logado com sucesso!");
        navigate("/dashboard", { replace: true });
        console.log(user.user);
        console.log(auth.currentUser);

      })
      .catch((err) => {
        alert("Erro ao logar!");
        console.log(err);
      });
  };

  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to="/" className="mb-6 max-w-sm w-full">
          <img src={logoImg} alt="Logo do site" className="w-full" />
        </Link>

        <form
          className="bg-background-gray max-w-xl w-full rounded-lg p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <Input
              type="email"
              placeholder="Digite seu email..."
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>

          <div className="mb-3">
            <Input
              type="password"
              placeholder="Digite sua senha..."
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 text-textColor-white w-full rounded-md h-10 font-medium"
          >
            Acessar
          </button>
        </form>
        <Link to="/register" className="text-textColor-white">
          Ainda não possui uma conta? Cadastre-se
        </Link>
      </div>
    </Container>
  );
}
