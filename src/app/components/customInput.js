const CustomInput = ({placeholder, onChange}) => {
    const handleChange = (event) => {
        onChange(event.target.value)
    }
    return (
        <input type="text" placeholder={placeholder} className="border-2 border-[#4BC789] w-[100%] rounded-lg p-4 mb-[50px]" onChange={handleChange}></input>
    )
}

export default CustomInput;