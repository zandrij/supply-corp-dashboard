import Image from "next/image";
import logo from "../assets/logo/logo-blanco.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full justify-between bg-[--orange]">
      <section className="w-2/5 flex items-center justify-center">
        <Image src={logo} width={250} alt="logo" />
      </section>
      <section className="min-h-screen bg-[--white] w-3/5 rounded-l-3xl flex items-center">
        <div className="m-auto w-2/5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Inicia sesión</h1>
          <Input type="email" placeholder="Correo electrónico" />
          <Input type="password" placeholder="Contraseña" />

          <Button className="bg-[--blue] hover:bg-[--blue] h-12">Entrar</Button>
        </div>
      </section>
    </main>
  );
}
