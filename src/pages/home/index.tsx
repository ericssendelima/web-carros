import { Container } from "../../components/container";

export function Home() {
  return (
    <Container>
      <section className="bg-background-gray p-4 rounded-lg w-full max-w-3xl mx-auto flex items-center justify-center gap-2">
        <input
          type="text"
          className="bg-gray-700 text-textColor-white w-full border-2 border-gray-500 rounded-lg h-9 px-3 outline-none"
          placeholder="Digite o nome do carro"
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg font-medium text-lg">
          <span className="text-textColor-white">Buscar</span>
        </button>
      </section>

      <h1 className="font-bold text-textColor-white text-center mt-6 text-[4.5vw] sm:text-2xl mb-4">Carros novos e usados em todo o Brasil</h1>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <section className="text-textColor-white w-full bg-background-gray rounded-lg">
          <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202405/20240528/nissan-sentra-2.0-16v-gasolina-exclusive-xtronic-wmimagem1048525239.jpg?s=fill&w=552&h=414&q=60" alt="Carro" className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"/>
          <p className="font-bold mt-1 mb-2 px-2">NISSAN SENTRA</p>
          <div className="flex flex-col px-2">
            <span className="text-gray-500 mb-6">Ano 2021/2021 | 0km</span>
            <strong className="font-medium text-xl">R$ 130.000</strong>

            <div className="w-full h-px bg-gray-700 my-2"></div>

            <div className="px-2 pb-2">
              <span className="text-gray-300">Recife-PE</span>
            </div>
          </div>
        </section>
        
        
      </main>
      
      
    </Container>
  );
}
