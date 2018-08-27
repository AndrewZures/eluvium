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
    position: {
        flex: {
            justify_content: {
                center: 'center',
                end: 'flex-end',
                none: null,
                space_around: 'space-around',
                space_between: 'space-between',
                space_evenly: 'space-evenly',
                start: 'flex-start',
            }
        }
   },
    sizing: {
        height: {
            full: '500px',
        },
        width: {
            full: '100%',
            half_screen: '200px',
            main_content: '600px',
        }
    },
}