import {createTheme} from "@mui/material";

declare module '@mui/material/styles'{
    interface Palette{
        custom:{
            blue:string;
        };
    }

    interface PaletteOptions{
        custom?:{
            blue?:string;
        }
    }
}

const theme=createTheme({
    palette:{
        mode:'dark',
        background:{
            default:'#28272B',
            paper:'#201F24',
        },
        primary:{
            main:'#2D2D30',
        },
        secondary: {
            main:'#E8E7F0',
        },
        text: {
            primary:'#E8E7F0',
            secondary:'#A5A5A6',
        },
        custom: {
            blue: "#00BFFF",
        },
    },
    typography: {
        fontFamily:'Gilroy,Arial,sans-serif',
        fontWeightBold:600,
        fontSize:14,
    },
    spacing: 8,

});
export default theme;