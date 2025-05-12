import {Box,BoxProps} from "@mui/material"

interface IBox extends BoxProps {
    src:string 
    alt:string
}
const ImageField :React.FC<IBox>=({src,alt,...props})=>{
    return (
        <Box component="img" src={src} alt={alt} {...props}/>
    )
}
export default ImageField;