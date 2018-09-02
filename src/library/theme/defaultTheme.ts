import { ITheme } from './interface';

export const defaultTheme: ITheme = {
    colors: {
        background: "#F5F7FA",
        brand: "#273A8A",
        empty: "#FFFFFF",
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
            align_items: {
                baseline: 'baseline',
                center: 'center',
                end: 'start',
                start: 'start',
                stretch: 'stretch',
            },
            justify_content: {
                center: 'center',
                end: 'flex-end',
                space_around: 'space_around',
                space_between: 'space_between',
                space_evenly: 'space_evenly',
                start: 'flex-start',
            },
        }
   },
    sizing: {
        borderRadius: {
            none: null,
            rounded: '90px',
            semirounded: '15px',
            slightly_rounded: '2px',
        },
        boxShadow: {
            medium: '0 5px 7px rgba(0, 0, 0, 0.1), 0 3px 12px rgba(0, 0, 0, 0.14)',
            none: null,
        },
        height: {
            full: '500px',
            input: '36px',
            small: '400px',
            tiny: '80px',
        },
        inputSizing: {
            height: {
                medium: '36px',
            },
            width: {
                medium: '400px',
                small: '16px',
                small_medium: '24px',
                tiny: '8px'

            },
        },
        width: {
            full: '100%',
            half_screen: '50%',
            input: '400px',
            main_content: '600px',
            small: '56px',
        },
    },
    text: {
        fontSize: {
            medium: '16px',
        },
        lineHeight: {
            medium: '24px',
            small: '20px',
        },
    }
}