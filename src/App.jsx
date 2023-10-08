import dp from "./assets/profile-card-component-main/images/image-victor.jpg";
import top from "./assets/profile-card-component-main/images/bg-pattern-top.svg";
import bottom from "./assets/profile-card-component-main/images/bg-pattern-bottom.svg";
import card from "./assets/profile-card-component-main/images/bg-pattern-card.svg";
function App() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen bg-[#19a1ad] font-kumbh relative overflow-hidden">
        <img
          src={top}
          alt="bubble-top"
          className="absolute opacity-50 -translate-y-1/2 left-0"
        />
        <img
          src={bottom}
          alt="bubble-bottom"
          className="absolute opacity-50 translate-y-1/2 right-0"
        />
        <div className="relative flex flex-col justify-center items-center">
          <div className=" rounded-tr-xl rounded-tl-xl">
            <img
              src={card}
              alt="card"
              className=" rounded-tr-xl rounded-tl-xl"
            />
          </div>
          <img
            src={dp}
            alt="victor"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white"
          />
          <div className="bg-white w-full pt-[4rem] rounded-br-xl rounded-bl-xl">
            <article className="flex flex-col justify-center items-center border-b">
              <div className="flex flex-row justify-center text-lg mb-1">
                <h1 className="mx-2 text-[#3f3f4c] font-bold">Victor Crest</h1>
                <h2 className="text-[#9e9fa1] font-semibold">26</h2>
              </div>
              <span className="text-[#9e9fa1] text-sm mb-6">London</span>
            </article>
            <div className="flex flex-row justify-evenly py-6">
              <div className="flex flex-col justify-center items-center">
                <article className="text-[#3f3f4c] font-bold text-lg">
                  80K
                </article>
                <span className="text-[#9e9fa1] font-semibold text-xs">
                  Followers
                </span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <article className="text-[#3f3f4c] font-bold text-lg">
                  803K
                </article>
                <span className="text-[#9e9fa1] font-semibold text-xs">
                  Likes
                </span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <article className="text-[#3f3f4c] font-bold text-lg">
                  1.4K
                </article>
                <span className="text-[#9e9fa1] font-semibold text-xs">
                  Photos
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
