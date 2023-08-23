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
        <div className="lg:container lg:px-40 p-3  gap-3 flex lg:flex-row flex-col lg:gap-8 lg:items-center w-full">
          <div className="col lg:w-2/5">
            <div className="lg:w-10/12">
              <Title />
              <p
                className={`text-gray-light uppercase ${space.className} text-xl`}
              >
                Digite seu usuário do GitHub
              </p>
              <Form />
            </div>
          </div>
          <div className="col lg:w-2/3">
            <Ticket />
          </div>
        </div>
      </main>
    </UserProvider>
  );
}
