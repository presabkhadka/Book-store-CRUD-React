import Navbar from "./components/navbar";

function Home() {
  return (
    <div className="grid grid-cols-12 gap-x-4  min-h-screen">
      <div className="h-fit col-span-full">
        <Navbar />
        <div className="mt-20 px-6">
          <div className="grid grid-cols-12 ">
            <div className="col-start-1 col-end-5 flex items-center">
              <div className="w-full border-2 border-white p-4 rounded-lg shadow-2xl h-fit">
                <h1 className="text-4xl font-bold  mb-4">
                  WELCOME TO BOOK <span className="text-yellow-300">पसल</span>
                </h1>
                <p className=" text-justify">
                  Welcome to BOOK <span className="text-yellow-300">पसल</span>,
                  your ultimate destination for an extensive collection of books
                  spanning a myriad of categories. Whether you're a lover of
                  fiction, a non-fiction enthusiast, or searching for the latest
                  academic resources, we've got you covered. Our goal is to
                  provide you with a delightful and seamless shopping
                  experience. Explore our diverse range of titles and immerse
                  yourself in the world of literature. Happy shopping!
                </p>
              </div>
            </div>
            <div className="col-start-7 col-end-13 ">
              <div>
                <div className="flex justify-center">
                  <img
                    src="../src/assets/book.png"
                    className=" aspect-square"
                  />
                </div>
                <div className=""></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
