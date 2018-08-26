import { ITheme } from './interface';

export const defaultTheme: ITheme = {
    colors: {
        background: "#F5F7FA",
        brand: "#273A8A",
        error: "#F0603C",
        guide: "#ABB1BE",
        none: null,
        primary: "#303540",
        secondary: "#72767F",
        stroke: "#CFD6E5",
        success: "#30AB30",
        warning: "#FFD24D",
        warning_hover: "#FFDE7E",
    },
    sizing: {
        height: {
            full: '90vh',
        },
        width: {
            full: '100%',
            half_screen: '200px',
        }
    }
}