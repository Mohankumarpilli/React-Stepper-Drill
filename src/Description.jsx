const Description = ({count}) => {
  const arr = [
    "Add Contact Details for further communications.",
    "Add shipping address for successful delivery",
    "Complete Payment to complete the order",
    "Ready to deliver!",
    "Order successfully delivered!",
  ];
  return <div className="m-4 text-center"><h3 className="font-bold ">{arr[count-1]}</h3></div>
};
export default Description