export default function Header() {
  return (
    <div>
      <div
      className="flex justify-between items-center p-4 bg-gray-800 text-white"
      >
        <h2>Walter.dev</h2>
        <ul className="flex gap-5">
          <li className="hover:cursor-pointer">Início</li>
          <li className="hover:cursor-pointer" >Sobre</li>
          <li className="hover:cursor-pointer">Projects</li>
        </ul>
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
            Contato</button>
      </div>
    </div>
  );
}
