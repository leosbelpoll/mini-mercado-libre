import { DEFAULT_VALUES } from  "../configs";

export const getEnv = envVariable => {
    return process.env[`${envVariable}`] || DEFAULT_VALUES[`DEFAULT_${envVariable}`];
};

