
import Typography from '../../atoms/Typography';
import {styled } from "@mui/material/styles";
import ImageField from '../../atoms/Image';
import {TABLE_DATA} from "../../../utils/constants";

const StyledText = styled(Typography)(({ theme }) =>({
    fontFamily:theme.typography.fontFamily,
    fontWeight:theme.typography.fontWeightBold,
    fontSize:theme.spacing(2),
    letterSpacing:"-0.5%",
    lineHeight:theme.spacing(2.5),
    
}));
const StyledImage = styled(ImageField)({
    width:"20px",
    height:"20px",
});

const StyledRefeshContainer = styled('div')(({ theme }) =>({
    display:"flex",
    maxWidth:"132px",
    maxHeight:"29px",
    height:"29px",
    alignItems:"center",
    padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
    gap:theme.spacing(1),
}));
const Refresher :React.FC = () => {
    return (
        <StyledRefeshContainer>
            <StyledImage src="/refresh-2.svg" alt="refresher-icon"/>
            <StyledText text={TABLE_DATA.synctext}/>
        </StyledRefeshContainer>
    )
}
export default Refresher;