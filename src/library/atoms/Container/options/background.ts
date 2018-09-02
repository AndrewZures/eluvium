import { IContainerConfig } from "../types";
import { defaults } from './defaults';

const backgroundOption: Partial<IContainerConfig> = {
    backgroundColor: "background",
}

export const backgroundConfig: IContainerConfig = {...defaults, ...backgroundOption};

