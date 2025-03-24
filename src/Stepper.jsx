import "./App.css";

const Stepper = ({count}) => {
    let arr = [];
    for(let i = 0; i < 4; i++){
        if( i > count-1 ){
            arr.push("h-10 w-10 border-2 font-bold rounded-full bg-gray-600 flex justify-center items-center text-white");
        }else if( i == count-1){
            arr.push("h-10 w-10 border-2 font-bold rounded-full bg-blue-600 flex justify-center items-center text-white border-black");   
        }else if(i < count-1){
            arr.push("h-10 w-10 border-2 font-bold rounded-full bg-green-700 flex justify-center items-center");
        }
    }
    
  return (
    <div className="pt-20">
      <div className="flex -flex-col h-full w-full justify-center items-center">
        <div className={arr[0]}>
          <span>{1 < count ? "✓" : 1}</span>
        </div>
        <div className={count >= 2 ? "h-1 w-120 bg-green-700" : "h-1 w-120 bg-gray-700"}></div>
        <div className={arr[1]}>
          <span>{2 < count ? "✓" : 2}</span>
        </div>
        <div className={count >= 3 ? "h-1 w-120 bg-green-700" : "h-1 w-120 bg-gray-700"}></div>
        <div className={arr[2]}>
          <span>{3 < count ? "✓" : 3}</span>
        </div>
        <div className={count >= 4 ? "h-1 w-120 bg-green-700" : "h-1 w-120 bg-gray-700"}></div>
        <div className={arr[3]}>
          <span>{4 < count ? "✓" : 4}</span>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
