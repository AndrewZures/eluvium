import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const mainContent: Partial<IContainerConfig> = {
    backgroundColor: 'secondary',
    height: 'full',
    width: 'main_content',
}

export const mainContentConfig: IContainerConfig = {...defaults, ...mainContent};