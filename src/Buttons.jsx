const Buttons = ({count, handleClick}) => {
    let pre;
    let next;
    let button = "Next";
    if(count > 1){
        pre = "bg-gray-400 text-white border-2 border-black h-10 w-25 rounded-2xl font-bold";
    }else{
        pre = "bg-gray-400 text-white h-10 w-25 rounded-2xl font-bold "
    }
    if(count < 5){
        next = "bg-gray-400 text-white border-2 border-black h-10 w-25 rounded-2xl font-bold";
        if(count==4){
            button = "Finish";
        }
    }else{
        next = "bg-gray-400 text-white h-10 w-25 rounded-2xl font-bold "
    }
  return (
    <div className="flex justify-center gap-30 m-10">
      <button disabled = {count == 1} onClick={() => handleClick(-1)} className={pre}>Previous</button>
      <button disabled = {count == 5} onClick={() => handleClick(1)} className={next}>{button}</button>
    </div>
  );
};

export default Buttons