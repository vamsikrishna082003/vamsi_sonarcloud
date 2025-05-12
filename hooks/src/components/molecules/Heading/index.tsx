
import { styled } from "@mui/material/styles";
import ImageField from '../../atoms/Image';
import { TABLE_DATA } from "../../../utils/constants";
import theme from '../../../theme/theme';

const StyledImageField = styled(ImageField)({
  width: "20px",
  height: "20px",
});

const StyledHeadingText = styled('span')({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 600,
  fontSize: theme.spacing(2.5),
  letterSpacing: "-0.5%",
  lineHeight: "100%",
  color: theme.palette.text.primary,
});

const HeadingTextWithIcon = styled('div')({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
});

const StyledHeadContainer = styled('div')({
  display: "flex",
  margin: "10px",
  alignItems: "center",
});

const Heading: React.FC = () => {
  return (
    <StyledHeadContainer>
      <HeadingTextWithIcon>
        <StyledHeadingText>{TABLE_DATA.Heading}</StyledHeadingText>
        <StyledImageField src="/info-circle.svg" alt="info-circle" />
      </HeadingTextWithIcon>
    </StyledHeadContainer>
  );
};

export default Heading;
