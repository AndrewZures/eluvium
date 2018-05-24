export type Button = 'danger' | 'primary' | 'secondary';

export interface IButtonTheme {
    danger: string | null;
    primary: string | null;
    secondary: string | null;
}

export interface ITheme {
    backgroundColor:  IButtonTheme;
    color: IButtonTheme;
    borderRadius: IButtonTheme;
}

const theme: ITheme = {
    backgroundColor: {
        danger: 'red',
        primary: 'white',
        secondary: 'blue',
    },
    borderRadius: {
        danger: null,
        primary: '50px',
        secondary: null,
    },
    color: {
        danger: 'white',
        primary: 'blue',
        secondary: 'white',
    }
}

export default theme;