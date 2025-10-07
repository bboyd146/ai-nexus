// utils/feather.js
import * as Icons from "react-feather";

export const FeatherIcon = ({ name, size = 20, color = "currentColor" }) => {
    const Icon = Icons[name];
    if (!Icon) return null;
    return <Icon size={size} color={color} />;
};
