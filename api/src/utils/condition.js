export const getCondition = condition => {
    switch (condition) {
        case "new":
            return "Nuevo";
        case "used":
            return "Usado";
        default:
            return "No especificado";
    }
};
