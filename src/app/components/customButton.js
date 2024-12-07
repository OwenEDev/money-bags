const CustomButton = ({onClick, buttonText}) => {
    return (
        <button className="bg-[#4BC789] hover:bg-[#82D9AD] font-medium p-5 text-white rounded max-w-[200px]" onClick={() => {onClick()}}>{buttonText}</button>
    )
}

export default CustomButton;