export default function Banner() {
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
  return (
    <div>
      <div className="h-96 bg-green-300 w-lvw flex items-end justify-between">
        <div className="bg-black text-red-50 ml-16">
          <div>
            <h1 className="text-5xl">Marvellll jeu bdb</h1>
          </div>
          <div className="pb-3 ">
            <button className="py-2 mx-3  px-4 rounded  border-none bg-gray-700 bg-opacity-50  text-white cursor-pointer hover:text-black hover:bg-gray-300 transition-all duration-0.2s">
              Play
            </button>
            <button className="py-2  px-4 rounded  border-none bg-gray-700 bg-opacity-50 text-white cursor-pointer  hover:text-black hover:bg-gray-300 transition-all duration-0.2s">
              My List
            </button>
          </div>
          <div className="text-xl w-96">{truncate(`this is a discription his is a discription his is a 
          discription his is a discription v his is a discription a discription 
          v his is a discription a discription v his is a discription a discription v his
           is a discriptiona discription v his is a discriptiona discription v his is a discriptiona 
           discription v his is a discriptiona discription v his is a discriptiona discription v his
            is a discriptiona discription v his is a discription`, 150)}</div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-transparent via-rgba-37-37-37-0.61 to-black  h-14"></div>
    </div>
  );
}
