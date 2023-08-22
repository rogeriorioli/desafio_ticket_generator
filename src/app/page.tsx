import Image from "next/image";
import { space, roboto } from "./fonts";
import Title from "./components/Title";
import Form from "./components/Form";
import Ticket from "./components/Ticket";
import { UserProvider } from "./context/useContext";

export default function Home() {
  return (
    <UserProvider>
      <main className="flex min-h-screen justify-center">
        <div className="container px-40 flex flex-row gap-8 items-center">
          <div className="col w-2/5">
            <div className="w-10/12">
              <Title />
              <p
                className={`text-gray-light uppercase ${space.className} text-xl`}
              >
                Digite seu usuário do GitHub
              </p>
              <Form />
            </div>
          </div>
          <div className="col w-2/3">
            <Ticket />
          </div>
        </div>
      </main>
    </UserProvider>
  );
}
